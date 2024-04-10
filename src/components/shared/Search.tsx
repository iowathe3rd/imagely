'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Input } from '@/components/ui/input';
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
export const Search = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [query, setQuery] = useState('');

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (query) {
				const newUrl = formUrlQuery({
					searchParams: searchParams.toString(),
					key: 'query',
					value: query,
				});

				router.push(newUrl, { scroll: false });
			} else {
				const newUrl = removeKeysFromQuery({
					searchParams: searchParams.toString(),
					keysToRemove: ['query'],
				});

				router.push(newUrl, { scroll: false });
			}
		}, 300);

		return () => clearTimeout(delayDebounceFn);
	}, [router, searchParams, query]);

	return (
		<div className='shadowm-md flex w-full items-center rounded-xl border-2 border-border bg-background px-4 md:max-w-96'>
			<Image
				src={'/icons/search-loop.svg'}
				width={25}
				alt={'search'}
				height={25}
			/>

			<Input
				className='text-dark-600 placeholder:text-dark-400 h-[50px] w-full border-0 bg-transparent p-3 text-[16px] font-medium leading-[140%] focus-visible:ring-transparent focus-visible:ring-offset-0'
				placeholder='Search'
				onChange={(e) => setQuery(e.target.value)}
			/>
		</div>
	);
};
