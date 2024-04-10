import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='m-4 rounded-lg bg-white shadow dark:bg-gray-900'>
			<div className='mx-auto w-full max-w-screen-xl p-4 md:py-8'>
				<div className='sm:flex sm:items-center sm:justify-between'>
					<Link
						href='/'
						className='mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse'
					>
						<Image
							src='/logo-text.png'
							alt='Imagely Logo'
							width={250}
							height={100}
						/>
					</Link>
					<ul className='mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0'>
						<li>
							<Link href='#' className='me-4 hover:underline md:me-6'>
								About
							</Link>
						</li>
						<li>
							<Link href='#' className='me-4 hover:underline md:me-6'>
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link href='#' className='me-4 hover:underline md:me-6'>
								Licensing
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline'>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
				<span className='block text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
					© 2023{' '}
					<Link href='/' className='hover:underline'>
						Imagely
					</Link>
					. by{' '}
					<a
						href={'https://github.com/iowathe3rd'}
						className='hover:underline'
						target='_blank'
						rel='noreferrer'
					>
						Baurzhan Beglerov
					</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
