import { prisma } from '../../lib/server/prisma';
export const load = async ({ params }) => {
	const getUser = async () => {
		const user = await prisma.user.findUnique({
			where: {
				id: Number(params.userId)
			}
		});
		if (!user) {
			throw error(404, 'User not found');
		}
		return user;
	};

	return {
		user: getUser()
	};
};

export const actions = {
    updateUser: async ({ request, params }) => {
        const {username, name, surname, email, gender} = Object.fromEntries(await request.formData())
        try {
            await prisma.user.update({
                where: {
                    id: Number(params.userId)
                },
                data: {
                    username,
                    name,
                    surname,
                    email,
                    gender: parseInt(gender),
                    updated_at: new Date(),
                }
            })
        } catch (error) {
            console.error(error);
            return fail(500, {message: "Could not update user"})
        }
        return {
            status: 200
        }
    }
}