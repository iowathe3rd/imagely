'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/data';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
	{
		title: 'Dashboard',
		to: '/dashboard',
	},
	{
		title: 'Pricing',
		to: '/pricing',
	},
	{
		title: 'Features',
		to: '#features',
	},
];

const Header = () => {
	const pathname = usePathname();

	return (
		<header className='header px-2'>
			<Link href='/' className='bg-base-100 flex items-center gap-2'>
				<Image src='/logo-text.png' alt='logo' width={180} height={28} />
			</Link>

			<div
				className='hidden w-full items-center justify-between lg:flex lg:w-auto'
				id='mobile-menu-2'
			>
				<ul className='mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8'>
					{links.map((link, index) => (
						<li key={index}>
							<Link
								href={link.to}
								className='lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white'
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<nav className='flex items-center gap-2 lg:hidden'>
				<SignedIn>
					<UserButton afterSignOutUrl='/' />

					<Sheet>
						<SheetTrigger>
							<Image
								src={'/icons/bars-3-icon.svg'}
								alt={'menu'}
								width={40}
								height={40}
							/>
						</SheetTrigger>
						<SheetContent className='sm:w-64'>
							<>
								<Image
									src='/logo-text.png'
									alt='logo'
									width={152}
									height={23}
								/>

								<ul className='mt-8 flex w-full flex-col items-start gap-5'>
									{navLinks.map((link) => {
										const isActive = link.route === pathname;

										return (
											<li key={link.route} className='w-full'>
												<Button
													asChild
													variant={isActive ? 'default' : 'secondary'}
													className='flex w-full justify-start'
												>
													<Link
														className='p-16-semibold flex size-full gap-4 p-4'
														href={link.route}
													>
														<Image
															src={link.icon}
															alt={link.label}
															width={20}
															height={20}
														/>
														{link.label}
													</Link>
												</Button>
											</li>
										);
									})}
								</ul>
							</>
						</SheetContent>
					</Sheet>
				</SignedIn>

				<SignedOut>
					<Button asChild>
						<Link href='/sign-in'>Login</Link>
					</Button>
				</SignedOut>
			</nav>

			<nav className='hidden items-center gap-2 lg:flex'>
				<SignedIn>
					<UserButton afterSignOutUrl='/' showName />
					<Button asChild>
						<Link href={'/dashboard'}>Dashboard</Link>
					</Button>
				</SignedIn>

				<SignedOut>
					<Button asChild variant={'outline'}>
						<Link href='/sign-in'>Login</Link>
					</Button>
					<Button asChild variant={'default'}>
						<Link href='/sign-in'>Sign up</Link>
					</Button>
				</SignedOut>
			</nav>
		</header>
	);
};

export default Header;
