import { Collection } from '@/components/shared/Collection';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/data';
import { getAllImages } from '@/lib/actions/image.actions';
import Image from 'next/image';
import Link from 'next/link';

import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Imagely dashboard',
};

const Home = async ({ searchParams }: SearchParamProps) => {
	const page = Number(searchParams?.page) || 1;
	const searchQuery = (searchParams?.query as string) || '';

	const images = await getAllImages({ page, searchQuery });

	return (
		<>
			<section className='flex min-h-72 flex-col gap-4 rounded-[20px] border bg-card bg-cover bg-no-repeat p-10 shadow-inner sm:items-center sm:justify-center'>
				<h1 className='max-w-[500px] flex-wrap text-center text-[36px] font-semibold leading-[120%] sm:text-[44px] sm:leading-[56px] '>
					Unleash Your Creativity with Imagely
				</h1>
				<ul className='grid w-full grid-cols-2 gap-0 lg:grid-cols-4'>
					{navLinks.slice(1, 5).map((link) => (
						<div
							className='flex flex-col items-center justify-center gap-2  transition-all hover:scale-125'
							key={link.route}
						>
							<Button
								asChild
								variant={'outline'}
								className='h-fit w-fit rounded-full p-0'
							>
								<Link
									href={link.route}
									className='flex flex-col items-center justify-center gap-2'
								>
									<li className='flex w-fit items-center justify-center rounded-full bg-background p-4'>
										<Image
											src={link.icon}
											width={25}
											alt={link.route}
											height={25}
										/>
									</li>
								</Link>
							</Button>

							<p className='hidden text-center text-[14px] font-medium leading-[120%] lg:flex'>
								<Link
									href={link.route}
									className='flex flex-col items-center justify-center gap-2'
								>
									{link.label}
								</Link>
							</p>
						</div>
					))}
				</ul>
			</section>

			<section className='sm:mt-12'>
				<Collection
					hasSearch={true}
					images={images?.data}
					totalPages={images?.totalPage}
					page={page}
				/>
			</section>
		</>
	);
};

export default Home;
