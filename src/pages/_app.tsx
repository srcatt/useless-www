import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { Manrope } from 'next/font/google';
import Header from '@/components/header';

const manrope = Manrope({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	let mainRef = useRef(null);
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<Header className={manrope.className} />
			<div className={`${manrope.className} main-wrapper`}>
				<main ref={mainRef}>
					<Component {...pageProps} />
				</main>
			</div>
		</>
	);
}
