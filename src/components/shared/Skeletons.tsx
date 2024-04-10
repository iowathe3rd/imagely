import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export const HeaderSkeleton = () => {
	return (
		<>
			<Skeleton className='h-[40px] w-96' />
			<Skeleton className='h-[24px] w-96' />
		</>
	);
};
