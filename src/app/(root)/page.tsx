import Features from '@/sections/home/Features';
import Footer from '@/sections/home/Footer';
import Hero from '@/sections/home/Hero';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Imagely',
	description: 'Imagely is easiest creation tooling',
};

export default function HomePage() {
	return (
		<React.Fragment>
			<Hero />
			<Features />
			<Footer />
		</React.Fragment>
	);
}
