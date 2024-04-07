"use client";
import { Form } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  aspectRatioOptions,
  creditFee,
  defaultValues,
  transformationTypes,
} from "@/data";
import { AspectRatioKey, debounce, deepMergeObjects } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

import { addImage, updateImage } from "@/lib/actions/image.actions";
import { updateCredits } from "@/lib/actions/user.actions";
import { getCldImageUrl } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Field } from "./Field";
import MediaUploader from "./MediaUploader";
import TransformedImage from "./TransformedImage";

export const formSchema = z.object({
  title: z.string(),
  aspectRatio: z.string().optional(),
  color: z.string().optional(),
  prompt: z.string().optional(),
  publicId: z.string(),
});

const TransformationForm = ({
  action,
  data = null,
  userId,
  type,
  creditBalance,
  config = null,
}: TransformationFormProps) => {
  const transType = transformationTypes[type];

  const [isSubmittingState, setIsSubmittingState] = useState<boolean>(false);
  const [isTransformingState, setIsTransformingState] =
    useState<boolean>(false);

  const [transformationConfigState, setTranformationConfigState] =
    useState<Transformations | null>(config);
  const [imageState, setImageState] = useState(data);
  const [newTransform, setNewTransform] = useState<Transformations | null>(
    null,
  );

  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const initialFormValues =
    data && action === "Update"
      ? {
          title: data?.title,
          aspectRatio: data?.aspectRatio,
          color: data?.color,
          prompt: data?.prompt,
          publicId: data?.publicId,
        }
      : defaultValues;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialFormValues,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmittingState(true);
    if (data || imageState) {
      const transformationUrl = getCldImageUrl({
        width: imageState?.width,
        height: imageState?.height,
        src: imageState?.publicId,
        ...transformationConfigState,
      });

      const imageData = {
        title: values.title,
        publicId: imageState?.publicId,
        transformationType: type,
        width: imageState?.width,
        height: imageState?.height,
        config: transformationConfigState,
        secureURL: imageState?.secureURL,
        transformationURL: transformationUrl,
        aspectRatio: values.aspectRatio,
        prompt: values.prompt,
        color: values.color,
      };

      if (action === "Add") {
        try {
          const newImage = await addImage({
            image: imageData,
            userId,
            path: "/",
          });

          if (newImage) {
            form.reset();
            setImageState(data);
            router.push(`/transformations/${newImage._id}`);
          }
        } catch (error) {
          console.log(error);
        }
      }

      if (action === "Update") {
        try {
          const updatedImage = await updateImage({
            image: {
              ...imageData,
              _id: data._id,
            },
            userId,
            path: `/transformations/${data._id}`,
          });

          if (updatedImage) {
            router.push(`/transformations/${updatedImage._id}`);
          }
        } catch (error) {
          console.log(error);
        }
      }
      setIsSubmittingState(false);
    }
  }

  const onInputChangeHandler = (
    fieldName: string,
    value: string,
    type: string,
    onChangeField: (value: string) => void,
  ) => {
    debounce(() => {
      setNewTransform((prevState: any) => ({
        ...prevState,
        [type]: {
          ...prevState?.[type],
          [fieldName === "prompt" ? "prompt" : "to"]: value,
        },
      }));
    }, 1000)();

    return onChangeField(value);
  };

  const onTransformHandler = async () => {
    setIsTransformingState(true);

    setTranformationConfigState(
      deepMergeObjects(newTransform, transformationConfigState),
    );

    setNewTransform(null);

    startTransition(async () => {
      await updateCredits(userId, creditFee);
    });
  };

  const onSelectFieldHandler = (
    value: string,
    onChangeField: (value: string) => void,
  ) => {
    const imageSize = aspectRatioOptions[value as AspectRatioKey];

    setImageState((prevState: any) => ({
      ...prevState,
      aspectRatio: imageSize.aspectRatio,
      width: imageSize.width,
      height: imageSize.height,
    }));

    setNewTransform(transType.config);

    return onChangeField(value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Field
          control={form.control}
          name="title"
          formLabel="Image title"
          className="w-full"
          render={({ field }) => <Input {...field} />}
        />

        {type === "fill" && (
          <Field
            control={form.control}
            name="aspectRatio"
            formLabel="Aspect Ratio"
            className="w-full"
            render={({ field }) => (
              <Select
                onValueChange={(value) =>
                  onSelectFieldHandler(value, field.onChange)
                }
                value={field.value}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(aspectRatioOptions).map((key) => (
                    <SelectItem key={key} value={key}>
                      {aspectRatioOptions[key as AspectRatioKey].label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        )}
        {(type === "remove" || type === "recolor") && (
          <div className="prompt-field">
            <Field
              control={form.control}
              name="prompt"
              formLabel={
                type === "remove" ? "Object to remove" : "Object to recolor"
              }
              className="w-full"
              render={({ field }) => (
                <Input
                  value={field.value}
                  className="input-field"
                  onChange={(e) =>
                    onInputChangeHandler(
                      "prompt",
                      e.target.value,
                      type,
                      field.onChange,
                    )
                  }
                />
              )}
            />

            {type === "recolor" && (
              <Field
                control={form.control}
                name="color"
                formLabel="Replacement Color"
                className="w-full"
                render={({ field }) => (
                  <Input
                    value={field.value}
                    className="input-field"
                    onChange={(e) =>
                      onInputChangeHandler(
                        "color",
                        e.target.value,
                        "recolor",
                        field.onChange,
                      )
                    }
                  />
                )}
              />
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Field
            control={form.control}
            name={"publicId"}
            className="flex size-full flex-col "
            render={({ field }) => (
              <MediaUploader
                onValueChange={field.onChange}
                setImage={setImageState}
                publicId={field.value}
                image={imageState}
                type={type}
              />
            )}
          />
          <TransformedImage
            image={imageState}
            type={type}
            title={form.getValues("title")}
            isTransforming={isTransformingState}
            setIsTransforming={setIsTransformingState}
            transformationConfig={transformationConfigState}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <Button
            type="button"
            disabled={isTransformingState || newTransform === null}
            onClick={onTransformHandler}
            size={"lg"}
          >
            {isTransformingState ? "Transforming..." : "Apply"}
          </Button>

          <Button type="button" disabled={isSubmittingState} size={"lg"}>
            {isSubmittingState ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default TransformationForm;
