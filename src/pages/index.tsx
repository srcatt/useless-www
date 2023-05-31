import styles from '@/styles/home.module.scss';
import { Poppins, DM_Sans } from 'next/font/google';
import Header from '@/components/header';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
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
			<Header className={dmSans.className} />
			<div className={`${dmSans.className} main-wrapper`}>
				<main data-scroll-container="" ref={mainRef}>
					<section className="h-screen grid grid-cols-1 md:grid-cols-2 xs:grid-cols-3 gap-section">
						<h1 className={styles.heroTitle}>
							A studio that focuses on developing nothing useful.
						</h1>
					</section>
					<section className="section"></section>
				</main>
			</div>
		</>
	);
}
