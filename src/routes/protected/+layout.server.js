import { redirect } from "@sveltejs/kit";

export const load = async (event) => {
	const session = event.locals.getSession();

	if(!session) {
		throw redirect(307, 'auth/signin');
	}

	return {
		session
	};
}