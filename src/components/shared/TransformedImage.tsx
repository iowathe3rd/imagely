"use client";

import { dataUrl, debounce, download, getImageSize } from "@/lib/utils";
import { ArrowDownOnSquareStackIcon } from "@heroicons/react/24/outline";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const TransformedImage = ({
  image,
  type,
  title,
  transformationConfig,
  isTransforming,
  setIsTransforming,
  hasDownload = false,
}: TransformedImageProps) => {
  const downloadHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    download(
      getCldImageUrl({
        width: image?.width,
        height: image?.height,
        src: image?.publicId,
        ...transformationConfig,
      }),
      title,
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex-between">
        <h3 className="font-bold text-[30px] leading-[140%]; text-dark-600">
          Transformed
        </h3>

        {hasDownload && (
          <Button variant={"default"} onClick={downloadHandler}>
            <ArrowDownOnSquareStackIcon height={"50px"} />
          </Button>
        )}
      </div>

      {image?.publicId && transformationConfig ? (
        <div className="relative">
          <CldImage
            width={getImageSize(type, image, "width")}
            height={getImageSize(type, image, "height")}
            src={image?.publicId}
            alt={image.title}
            sizes={"(max-width: 767px) 100vw, 50vw"}
            placeholder={dataUrl as PlaceholderValue}
            className="h-fit min-h-72 w-full rounded-[10px] border border-dashed bg-base-100/20 object-cover p-2;"
            onLoad={() => {
              setIsTransforming && setIsTransforming(false);
            }}
            onError={() => {
              debounce(() => {
                setIsTransforming && setIsTransforming(false);
              }, 8000)();
            }}
            {...transformationConfig}
          />

          {isTransforming && (
            <div className="flex-center absolute left-[50%] top-[50%] size-full -translate-x-1/2 -translate-y-1/2 flex-col gap-2 rounded-[10px] border bg-dark-700/90">
              <Skeleton className="w-full h-full" />
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center font-medium text-[14px] leading-[120%] h-full min-h-72 flex-col gap-5 rounded-[16px] border border-dashed bg-base-100/20 shadow-inner">
          Transform image to see a magic!!!
        </div>
      )}
    </div>
  );
};

export default TransformedImage;
