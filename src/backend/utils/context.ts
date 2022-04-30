import { getSession } from 'next-auth/react';
import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';

export const createContext = async ({ req, res }: trpcNext.CreateNextContextOptions) => {
	const session = await getSession({ req });
	return { req, res, session };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
