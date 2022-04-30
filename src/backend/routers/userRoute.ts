import { createRouter } from '@/backend/utils/createRouter';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

export const userRoute = createRouter()
	.middleware(async ({ ctx, next }) => {
		if (!ctx.session) throw new TRPCError({ code: 'UNAUTHORIZED' });
		return next();
	})
	.query('getUserById', {
		input: z.object({ id: z.string() }),
		async resolve({ input }) {
			const res = await fetch(`https://jsonplaceholder.typicode.com/users/${input.id}`);
			const user = await res.json();
			return { success: true, user };
		},
	});
