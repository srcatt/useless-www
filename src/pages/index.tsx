import styles from '@/styles/home.module.scss';
import Page from '@/components/page';

export default function Home() {
	return (
		<Page>
			<section className={styles.hero}>
				<h1 className={styles.heroTitle}>
					A studio that focuses on developing{' '}
					<span className="blink">*nothing*</span> useful.
				</h1>
				<p className={styles.heroScroll}>Scroll.</p>
			</section>
			<section className={`${styles.projects}`}>
				<div>
					<h1>Projects</h1>
				</div>
			</section>
		</Page>
	);
}
