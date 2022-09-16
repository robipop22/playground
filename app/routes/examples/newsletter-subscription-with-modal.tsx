import SubscribeToNewsletter from '~/containers/SubscribeToNewsletter';
import ExampleWrapper from '~/components/ExampleWrapper';

const ExampleRoute = () => (
	<ExampleWrapper
		title="Example of a subscribe input component that shows a modal as success or a text if an error ocurred"
		linkToSourceCode="https://github.com/robipop22/playground/blob/main/app/containers/examples/SubscribeToNewsletter/index.tsx"
		children={<SubscribeToNewsletter />}
	/>
);

export default ExampleRoute;
