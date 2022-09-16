import { Link } from '@remix-run/react';

const NewsLetterThanksRoute = () => (
	<div className="w-full h-screen flex flex-col justify-center items-center p-5">
		<h1>Thanks for signing up test page!</h1>
		<Link className="pt-10" to={'/'}>
			See more Examples
		</Link>
	</div>
);

export default NewsLetterThanksRoute;
