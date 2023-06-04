import { ReactNode } from 'react';
import { Manrope } from 'next/font/google';
import Header from '@/components/header';
import { NextSeo } from 'next-seo';

const manrope = Manrope({ subsets: ['latin'] });
const titleDefault = 'Useless Studio';
const descDefault = 'A studio that focuses on developing nothing useful.';

interface Props {
	title?: string;
	desc?: string;
	showHeader?: boolean;
	children?: ReactNode;
}

export default function Page({
	title,
	desc,
	showHeader = true,
	children,
}: Props) {
	return (
		<>
			<NextSeo
				title={title ? title + ' | ' + titleDefault : titleDefault}
				description={desc ? desc : descDefault}
			/>
			{showHeader && <Header className={manrope.className} />}
			<div
				className={`${manrope.className} main-wrapper`}
				data-header={showHeader}
			>
				<main>{children}</main>
			</div>
		</>
	);
}
