import { json } from '@remix-run/node';

import type { ActionFunction } from '@remix-run/node';

export const action: ActionFunction = async ({ request }) => {
	try {
		const email = (await request.formData()).get('email');

		// throw new Error('test error');
		return {
			success: true,
			subscribedEmail: email,
		};
	} catch (error) {
		return json({ error: true });
	}
};
