import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
	return (
		<section className='flex h-[70vh] items-center bg-background'>
			<div className='mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16'>
				<Link href={'/dashboard/transformations/add/fill'}>
					<Badge
						variant={'outline'}
						style={{
							marginBottom: '40px',
							padding: 'unset',
						}}
					>
						<Badge variant='outline' className='mr-2'>
							New
						</Badge>
						<span className='text-sm font-medium'>
							Check out Generative fill feature!
						</span>
						<svg
							className='ml-2 h-5 w-5'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
								clipRule='evenodd'
							></path>
						</svg>
					</Badge>
				</Link>
				<h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl'>
					Imagely is easiest creation tooling
				</h1>
				<p className='mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48'>
					Here at Imagely you can remove annoying background, fill/restore image
					and more!
				</p>
				<div className='mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16'>
					<Link href={'/dashboard'}>
						<Button variant='ghost' size={'lg'}>
							Get started
							<svg
								className='-mr-1 ml-2 h-5 w-5'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clipRule='evenodd'
								></path>
							</svg>
						</Button>
					</Link>
					<Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
						<Button variant='outline' size={'lg'}>
							<svg
								className='-ml-1 mr-2 h-5 w-5'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z'></path>
							</svg>
							Watch video
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
