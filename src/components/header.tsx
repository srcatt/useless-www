import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import MdiIcon from '@mdi/react';
import { mdiTrashCan } from '@mdi/js';
export default function Header(
	props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
) {
	return (
		<header {...props} className={`${props.className} ${styles.header}`}>
			<Link href="/" className={styles.headerButton} data-bigicon>
				<MdiIcon path={mdiTrashCan} color="currentColor" />
				useless
			</Link>
			<div className="grow" />
			<Link href="/" className={styles.headerLink}>
				projects
			</Link>
		</header>
	);
}
