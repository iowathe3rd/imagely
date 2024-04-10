import { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className='flex min-h-screen w-full items-center justify-center'>
			{children}
		</main>
	);
};

export default Layout;
