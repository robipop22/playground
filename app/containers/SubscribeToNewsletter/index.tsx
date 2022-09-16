import { useEffect, useRef, useState } from 'react';
import { useFetcher } from '@remix-run/react';

import type { FC, ReactElement } from 'react';

import Modal from '~/components/Modal';

// check routes/newsletter/subscribe.ts for the server side code

const SubscribeToNewsletter: FC = (): ReactElement => {
	const newsletter = useFetcher();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const formRef = useRef<HTMLFormElement>(null);

	const toggleModal = (toggler: boolean) => {
		setIsModalOpen(toggler);
	};

	useEffect(() => {
		if (newsletter.type === 'done' && newsletter.data.success) {
			formRef.current?.reset();
			toggleModal(true);
		}
	}, [newsletter]);

	return (
		<>
			<newsletter.Form
				method="post"
				ref={formRef}
				action="/newsletter/subscribe"
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
					disabled={newsletter.state === 'submitting'}
					className={`bg-primary-complement rounded-lg border-l-0 rounded-l-none h-10 border-secondary-complement border px-1 ${
						newsletter.state === 'submitting' ? 'opacity-70' : 'opacity-100'
					}`}>
					<svg
						className="w-6 h-6 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</button>
				{newsletter.type === 'done' && newsletter.data.error && (
					<span className="absolute text-red-700 mt-20">Something went wrong ...</span>
				)}
			</newsletter.Form>
			<Modal
				isOpen={isModalOpen}
				onClose={() => {
					toggleModal(false);
				}}
				title={'Subscribed!'}
				subtitle={`Thank you ${
					newsletter.type === 'done' && newsletter.data.subscribedEmail
				}. You are now subscribed to our newsletter.`}
			/>
		</>
	);
};

export default SubscribeToNewsletter;
