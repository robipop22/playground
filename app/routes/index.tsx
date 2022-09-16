import { Link } from '@remix-run/react';

import { examples } from '~/data/examples';

const Index = () => (
	<div className="flex justify-start items-center pt-20 h-screen w-screen flex-col text-center gradient-background">
		<h1 className="text-7xl pb-10">robipop Playground</h1>
		<h2 className="max-w-6xl text-left px-5">
			Here you can find a list of examples which were documented in my blog and their source code:
		</h2>
		<ul className="text-left flex flex-col items-start justify-center w-full max-w-6xl p-5">
			{examples.map(example => (
				<li className="text-3xl" key={example.slug}>
					<Link to={`examples/${example.slug}`}>{`● ${example.title}`}</Link>
				</li>
			))}
		</ul>
	</div>
);

export default Index;
