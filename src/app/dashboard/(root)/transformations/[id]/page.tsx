import { DeleteConfirmation } from "@/components/shared/DeleteConfirmation";
import Header from "@/components/shared/Header";
import TransformedImage from "@/components/shared/TransformedImage";
import { Button } from "@/components/ui/button";
import { getImageById } from "@/lib/actions/image.actions";
import { getImageSize } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import Image from "next/image";

import Link from "next/link";

const TransformationsDetailsPage = async ({
  params: { id },
}: SearchParamProps) => {
  const { userId } = auth();
  const image = await getImageById(id);
  console.log(image);
  return (
    <>
      <Header title={image.title} />

      <section className="mt-5 flex flex-wrap gap-4">
        <div className="p-14-medium md:p-16-medium flex gap-2">
          <p>Transformation:</p>
          <p className="capitalize text-accent-400">
            {image.transformationType}
          </p>
        </div>

        {image.prompt && (
          <>
            <p className="hidden md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2 ">
              <p>Prompt:</p>
              <p className=" capitalize text-accent-400">{image.prompt}</p>
            </div>
          </>
        )}
        {image.color && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="text-dark-600">Color:</p>
              <p className=" capitalize text-purple-400">{image.color}</p>
            </div>
          </>
        )}

        {image.aspectRatio && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="text-dark-600">Aspect Ratio:</p>
              <p className=" capitalize text-purple-400">{image.aspectRatio}</p>
            </div>
          </>
        )}
      </section>
      <section className="mt-10 border-t border-dark-400/15">
        <div className="grid h-fit min-h-[200px] grid-cols-1 gap-5 py-8 md:grid-cols-2">
          {/* MEDIA UPLOADER */}
          <div className="flex flex-col gap-4">
            <h3 className="h3-bold">Original</h3>

            <Image
              width={getImageSize(image.transformationType, image, "width")}
              height={getImageSize(image.transformationType, image, "height")}
              src={image.secureURL}
              alt="image"
              className="h-fit min-h-72 w-full rounded-xl border border-border object-contain p-2"
            />
          </div>

          {/* TRANSFORMED IMAGE */}
          <TransformedImage
            image={image}
            type={image.transformationType}
            title={image.title}
            isTransforming={false}
            transformationConfig={image.config}
            hasDownload={true}
          />
        </div>

        {userId === image.author.clerkId && (
          <div className="justify-end flex items-center flex-col md:flex-row gap-2 w-full">
            <div className="flex items-center flex-col md:flex-row gap-2 w-full lg:w-fit">
              <Button asChild type="submit" className="w-full md:w-fit">
                <Link href={`/dashboard/transformations/${image._id}/update`}>
                  Update Image
                </Link>
              </Button>

              <DeleteConfirmation imageId={image._id} />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default TransformationsDetailsPage;
