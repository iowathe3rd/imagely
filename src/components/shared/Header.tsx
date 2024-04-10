import React from 'react';

const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => {
	return (
		<>
			<h2 className='text-dark-600 text-[30px] font-bold leading-[110%] md:text-[36px]'>
				{title}
			</h2>
			{subtitle && (
				<p className='mt-4 text-[16px] font-normal leading-[140%]'>
					{subtitle}
				</p>
			)}
		</>
	);
};

export default Header;
