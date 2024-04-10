'use client';

import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import {
	Pagination,
	PaginationContent,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { transformationTypes } from '@/data';
import { IImage } from '@/lib/database/models/image.model';
import { formUrlQuery } from '@/lib/utils';
import Image from 'next/image';

import { Button } from '../ui/button';

import { Search } from './Search';

export const Collection = ({
	hasSearch = false,
	images,
	totalPages = 1,
	page,
}: {
	images: IImage[];
	totalPages?: number;
	page: number;
	hasSearch?: boolean;
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	// PAGINATION HANDLER
	const onPageChange = (action: string) => {
		const pageValue = action === 'next' ? Number(page) + 1 : Number(page) - 1;

		const newUrl = formUrlQuery({
			searchParams: searchParams.toString(),
			key: 'page',
			value: pageValue,
		});

		router.push(newUrl, { scroll: false });
	};

	return (
		<>
			<div className='my-6 flex flex-col gap-6 md:flex-row md:justify-between lg:items-center'>
				<h2 className='h-1 text-[25px] leading-4'>Recent Edits</h2>
				{hasSearch && <Search />}
			</div>

			{images.length > 0 ? (
				<ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'>
					{images.map((image) => (
						<Card image={image} key={image._id} />
					))}
				</ul>
			) : (
				<div className='border-dark-400/10 flex h-60 w-full items-center justify-center rounded-[10px] border bg-background/20'>
					<p className='p-20-semibold'>Empty List</p>
				</div>
			)}

			{totalPages > 1 && (
				<Pagination className='mt-10'>
					<PaginationContent className='flex w-full'>
						<Button
							disabled={Number(page) <= 1}
							variant={'default'}
							onClick={() => onPageChange('prev')}
						>
							<PaginationPrevious className='hover:bg-transparent hover:text-white' />
						</Button>

						<p className='p-16-medium flex w-fit flex-1 items-center justify-center'>
							{page} / {totalPages}
						</p>

						<Button
							variant={'default'}
							onClick={() => onPageChange('next')}
							disabled={Number(page) >= totalPages}
						>
							<PaginationNext className='hover:bg-transparent hover:text-white' />
						</Button>
					</PaginationContent>
				</Pagination>
			)}
		</>
	);
};

const Card = ({ image }: { image: IImage }) => {
	return (
		<li>
			<Link
				href={`/dashboard/transformations/${image._id}`}
				className='flex flex-1 cursor-pointer flex-col gap-5 rounded-xl border-2 border-border bg-background p-4 shadow-xl transition-all '
			>
				<CldImage
					src={image.publicId}
					alt={image.title}
					width={image.width}
					height={image.height}
					{...image.config}
					loading='lazy'
					className='h-52 w-full rounded-[10px] object-cover'
					sizes='(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw'
				/>
				<div className='flex justify-between'>
					<p className='text-dark-600 mr-3 line-clamp-1 text-[20px] font-semibold leading-[140%]'>
						{image.title}
					</p>
					{
						<Image
							src={
								transformationTypes[
									image.transformationType as TransformationTypeKey
								].icon
							}
							alt={''}
							width={30}
							height={30}
						/>
					}
				</div>
			</Link>
		</li>
	);
};
