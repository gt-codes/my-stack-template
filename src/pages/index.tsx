import { trpc } from '@/lib/trpc';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	const { query } = useRouter();
	const { data } = trpc.useQuery(['user.getUserById', { id: (query.id as string) || '1' }]);

	return (
		<div className={styles.container}>
			<Head>
				<title>Next.js TRPC Template</title>
				<meta name="description" content="TRPC Template for Next.js" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<h1>{data?.user?.name}</h1>
				<p>{data?.user?.email}</p>
			</div>
		</div>
	);
};

export default Home;
