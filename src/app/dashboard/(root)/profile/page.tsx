import { Collection } from '@/components/shared/Collection';
import Header from '@/components/shared/Header';
import { getUserImages } from '@/lib/actions/image.actions';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Profile',
};

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
	const page = Number(searchParams?.page) || 1;
	const { userId } = auth();

	if (!userId) redirect('/sign-in');

	const user = await getUserById(userId);
	const images = await getUserImages({ page, userId: user._id });

	return (
		<>
			<Header title='Profile' />

			<section className='mt-5 flex flex-col gap-5 sm:flex-row md:mt-8 md:gap-10'>
				<div className='w-full rounded-xl border-2 border-border bg-background p-5 shadow-lg md:p-8 md:px-6'>
					<p className='p-14-medium md:p-16-medium'>CREDITS AVAILABLE</p>
					<div className='mt-4 flex items-center gap-4'>
						<Image
							src='/icons/coins.svg'
							alt='coins'
							width={50}
							height={50}
							className='size-9 md:size-12'
						/>
						<h2 className='h2-bold text-dark-600'>{user.creditBalance}</h2>
					</div>
				</div>

				<div className='w-full rounded-xl border-2 border-border bg-background p-5 shadow-lg md:p-8 md:px-6'>
					<p className='p-14-medium md:p-16-medium'>IMAGE MANIPULATION DONE</p>
					<div className='mt-4 flex items-center gap-4'>
						<Image
							src='/icons/photo.svg'
							alt='coins'
							width={50}
							height={50}
							className='size-9 md:size-12'
						/>
						<h2 className='h2-bold'>{images?.data.length}</h2>
					</div>
				</div>
			</section>

			<section className='mt-8 md:mt-14'>
				<Collection
					images={images?.data}
					totalPages={images?.totalPages}
					page={page}
				/>
			</section>
		</>
	);
};

export default ProfilePage;
