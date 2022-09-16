import { redirect } from '@remix-run/node';

import type { ActionFunction } from '@remix-run/node';

export const action: ActionFunction = async ({ request }) => {
	try {
		const email = (await request.formData()).get('email');

		// throw new Error('test error');
		return redirect('/newsletter/thanks', { headers: { 'Set-Cookie': `subscribedEmail=${email}` } });
	} catch (error) {
		return redirect('/newsletter/error', { headers: { 'Set-Cookie': 'error=true' } });
	}
};
