import type { LayoutServerLoad } from "./$types"
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async (event) => {
	return {
		session: await event.locals.getSession()
	};
}