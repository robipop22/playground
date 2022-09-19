import type { FC } from 'react';

import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import ExampleWrapper from '~/components/ExampleWrapper';

interface ParagraphProps {
	plainProperty: number;
	objectLikeProperty: {
		prop1: string;
		prop2: number;
	};
}

const Paragraph: FC<ParagraphProps> = ({ plainProperty, objectLikeProperty }: ParagraphProps) => (
	<>
		<p className="pt-5">
			plainProperty: <span className="text-lg font-Montserrat-bold">{plainProperty}</span>
		</p>
		<p className="py-5">
			objectLikeProperty.prop1: <span className="text-lg font-Montserrat-bold">{objectLikeProperty.prop1}</span>
		</p>
		<p>
			objectLikeProperty.prop2: <span className="text-lg font-Montserrat-bold">{objectLikeProperty.prop2}</span>
		</p>
	</>
);

export const loader = () => {
	return json({
		plainProperty: 22,
		objectLikeProperty: {
			prop1: 'prop1',
			prop2: 100,
		},
	});
};

const ExampleRoute = () => {
	// const data = useLoaderData<typeof loader>();
	const { plainProperty, objectLikeProperty } = useLoaderData<typeof loader>();

	return (
		<ExampleWrapper
			title="Remix > 1.7.0 Loader Types example"
			linkToSourceCode="https://github.com/robipop22/playground/blob/main/app/routes/examples/remix-1-7-0-loader-types-example.tsx"
			// children={<Paragraph {...data} />}
			children={<Paragraph plainProperty={plainProperty} objectLikeProperty={objectLikeProperty} />}
		/>
	);
};

export default ExampleRoute;
