import { Form } from '@remix-run/react';

import type { FC, ReactElement } from 'react';

// check routes/newsletter/subscribe-with-redirect.ts for the server side code

const SubscribeToNewsletter: FC = (): ReactElement => (
	<Form
		method="post"
		action="/newsletter/subscribe-with-redirect"
		id="subscribe-form-footer"
		className="flex justify-center items-center md:w-96 sm:w-72 pt-5 w-full">
		<input
			type="email"
			name="email"
			id="email"
			placeholder="Your email"
			className="w-full h-10 px-3 text-base bg-primary-complement placeholder-white border rounded-lg focus:shadow-outline border-secondary-complement border-r-0 rounded-r-none"
			required
		/>
		<button
			type="submit"
			value="subscribe"
			className="bg-primary-complement rounded-lg border-l-0 rounded-l-none h-10 border-secondary-complement border px-1">
			<svg
				className="w-6 h-6 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</button>
	</Form>
);

export default SubscribeToNewsletter;
