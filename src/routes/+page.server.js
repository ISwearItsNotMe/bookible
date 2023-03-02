import { prisma } from '../lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load = async () => {
	return {
		users: await prisma.user.findMany()
	};
};

export const actions = {
	createUser: async ({ request }) => {
		const { username, name, surname, email, gender } = Object.fromEntries(await request.formData());
		try {
			await prisma.user.create({
				data: {
					username,
					name,
					surname,
					email,
					gender: parseInt(gender),
					password: 'password',
					created_at: new Date(),
					updated_at: new Date(),
					removed: 0
				}
			});
		} catch (error) {
			console.log(error);
			return fail(500, { message: 'Could not create the user' });
		}
		return {
			status: 201
		};
	},
	deleteUser: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}
		try {
			await prisma.user.delete({
				where: {
					id: Number(id)
				}
			});
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Something went wrong' });
		}
		return {
			status: 200
		};
	}
};
