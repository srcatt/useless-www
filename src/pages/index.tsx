import styles from '@/styles/home.module.scss';
import { Manrope } from 'next/font/google';
import Header from '@/components/header';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const manrope = Manrope({ subsets: ['latin'] });

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
			<Header className={manrope.className} />
			<div className={`${manrope.className} main-wrapper`}>
				<main data-scroll-container="" ref={mainRef}>
					<section className={styles.hero}>
						<h1 className={styles.heroTitle}>
							A studio that focuses on developing{' '}
							<span className="blink">*nothing*</span> useful.
						</h1>
						<p className={styles.heroScroll}>Scroll.</p>
					</section>
					<section className={styles.topProjects}>
						<div>
							<h1>Projects</h1>
						</div>
					</section>
				</main>
			</div>
		</>
	);
}
