import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const features = [
	{
		title: 'Image Restore',
		description:
			'Restore old or damaged images with our advanced image restoration feature.',
		route: '/dashboard/transformations/add/restore',
		icon: '/icons/adjustments-horizonal.svg',
	},
	{
		title: 'Generative Fill',
		description:
			'Automatically fill in missing parts of images using generative algorithms.',
		route: '/dashboard/transformations/add/fill',
		icon: '/icons/sparkles.svg',
	},
	{
		title: 'Object Remove',
		description:
			'Effortlessly remove unwanted objects from your images with our object removal tool.',
		route: '/dashboard/transformations/add/remove',
		icon: '/icons/backspace.svg',
	},
	{
		title: 'Object Recolor',
		description:
			'Change the color of objects in your images with our easy-to-use recoloring feature.',
		route: '/dashboard/transformations/add/recolor',
		icon: '/icons/photo.svg',
	},
	{
		title: 'Background Remove',
		description:
			'Quickly remove backgrounds from images to isolate objects or people.',
		route: '/dashboard/transformations/add/removeBackground',
		icon: '/icons/cross.svg',
	},
	{
		title: 'Buy Credits',
		description: 'Purchase credits to access premium features and services.',
		route: '/dashboard/credits',
		icon: '/icons/sparkles.svg',
	},
];
function FeatureBlock({
	title,
	description,
	icon,
	href,
}: {
	title: string;
	description: string;
	icon: string;
	href: string;
}) {
	return (
		<Link href={href}>
			<div className='h-48 rounded-lg border-2 border-border p-4 shadow-lg transition-all hover:shadow-2xl'>
				<div className='dark:bg-primary-900s flex w-full items-center'>
					<h3 className='text-xl font-bold'>{title}</h3>
					<Button variant={'ghost'}>
						<Image src={icon} width={25} height={25} alt={title} />
					</Button>
				</div>
				<p className='text-gray-500 dark:text-gray-400'>{description}</p>
			</div>
		</Link>
	);
}

const Features = () => {
	return (
		<section id='features'>
			<div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6'>
				<div className='mb-8 max-w-screen-md lg:mb-16'>
					<h2 className='mb-4 text-4xl font-extrabold tracking-tight'>
						Our features is simple
					</h2>
					<p className='sm:text-xl'>
						Here at Flowbite we focus on markets where technology, innovation,
						and capital can unlock long-term value and drive economic growth.
					</p>
				</div>
				<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
					{features.map((feature, index) => (
						<FeatureBlock
							key={index}
							title={feature.title}
							description={feature.description}
							icon={feature.icon}
							href={feature.route}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
