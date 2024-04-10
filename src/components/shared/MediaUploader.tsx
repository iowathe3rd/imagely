import { useToast } from '@/components/ui/use-toast';
import { dataUrl, getImageSize } from '@/lib/utils';
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

type MediaUploaderProps = {
	onValueChange: (value: string) => void;
	setImage: React.Dispatch<any>;
	publicId: string;
	image: any;
	type: string;
};

const MediaUploader = ({
	onValueChange,
	setImage,
	image,
	publicId,
	type,
}: MediaUploaderProps) => {
	const { toast } = useToast();

	const onUploadSuccessHandler = (result: any) => {
		setImage((prevState: any) => ({
			...prevState,
			publicId: result?.info?.public_id,
			width: result?.info?.width,
			height: result?.info?.height,
			secureURL: result?.info?.secure_url,
		}));

		onValueChange(result?.info?.public_id);

		toast({
			title: 'Image uploaded successfully',
			description: '1 credit was deducted from your account',
			duration: 5000,
			className: 'success-toast',
		});
	};
	const onUploadErrorHandler = () => {
		toast({
			title: 'Something went wrong while uploading',
			description: 'Please try again',
			duration: 5000,
			className: 'error-toast',
		});
	};
	return (
		<CldUploadWidget
			uploadPreset='imagely'
			options={{
				multiple: false,
				resourceType: 'image',
			}}
			onSuccess={onUploadSuccessHandler}
			onError={onUploadErrorHandler}
		>
			{({ open }) => (
				<div className='flex flex-col gap-4'>
					<h3 className='text-dark-600 text-[30px] font-bold leading-[140%]'>
						Original
					</h3>

					{publicId ? (
						<div className='cursor-pointer overflow-hidden rounded-[10px]'>
							<CldImage
								width={getImageSize(type, image, 'width')}
								height={getImageSize(type, image, 'height')}
								src={publicId}
								alt='image'
								sizes={'(max-width: 767px) 100vw, 50vw'}
								placeholder={dataUrl as PlaceholderValue}
								className='bg-base-100/20 h-fit min-h-72 w-full rounded-[10px] border border-dashed object-cover p-2'
							/>
						</div>
					) : (
						<div
							className='coursor-pointer bg-base-100/20 flex h-72 cursor-pointer flex-col items-center justify-center gap-5 rounded-[16px] border border-dashed shadow-inner'
							onClick={() => open()}
						>
							<div className='bg-base shadow-base-200/50 rounded-[16px] p-5 shadow-sm'>
								<Image
									src='/icons/sparkles.svg'
									width={40}
									height={40}
									alt={''}
								/>
							</div>
							<p className='p-14-medium'>Click here to upload image</p>
						</div>
					)}
				</div>
			)}
		</CldUploadWidget>
	);
};
export default MediaUploader;
