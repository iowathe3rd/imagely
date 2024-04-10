import { HeaderSkeleton } from '@/components/shared/Skeletons';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<div className='flex flex-col space-y-3'>
			<HeaderSkeleton />
			<div className='mt-20 flex flex-col gap-5'>
				<Skeleton className='h-4 w-44' />
				<Skeleton className='h-10 w-full' />
			</div>
			<div className='grid h-fit min-h-[200px] grid-cols-1 gap-5 py-4 md:grid-cols-2'>
				<Skeleton className='flex size-full flex-col rounded-xl' />
				<Skeleton className='flex size-full flex-col rounded-xl' />
			</div>
		</div>
	);
}
