'use client';

import { dataUrl, debounce, download, getImageSize } from '@/lib/utils';
import { CldImage, getCldImageUrl } from 'next-cloudinary';
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';

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
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();

		download(
			getCldImageUrl({
				width: image?.width,
				height: image?.height,
				src: image?.publicId,
				...transformationConfig,
			}),
			title
		);
	};

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex items-center justify-between'>
				<h3 className='leading-[140%]; text-dark-600 text-[30px] font-bold'>
					Transformed
				</h3>

				{hasDownload && (
					<Button variant={'default'} onClick={downloadHandler}>
						Download
					</Button>
				)}
			</div>

			{image?.publicId && transformationConfig ? (
				<div className='relative'>
					<CldImage
						width={getImageSize(type, image, 'width')}
						height={getImageSize(type, image, 'height')}
						src={image?.publicId}
						alt={image.title}
						sizes={'(max-width: 767px) 100vw, 50vw'}
						placeholder={dataUrl as PlaceholderValue}
						className='h-fit min-h-72 w-full rounded-xl border border-border object-contain p-2'
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
						<div className='flex-center bg-dark-700/90 absolute left-[50%] top-[50%] size-full -translate-x-1/2 -translate-y-1/2 flex-col gap-2 rounded-[10px] border'>
							<Skeleton className='h-full w-full' />
						</div>
					)}
				</div>
			) : (
				<div className='bg-base-100/20 flex h-full min-h-72 flex-col items-center justify-center gap-5 rounded-[16px] border border-dashed text-[14px] font-medium leading-[120%] shadow-inner'>
					Transform image to see a magic!!!
				</div>
			)}
		</div>
	);
};

export default TransformedImage;
