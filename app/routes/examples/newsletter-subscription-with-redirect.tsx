import SubscribeToNewsletterWithRedirect from '~/containers/SubscribeWithRedirect';
import ExampleWrapper from '~/components/ExampleWrapper';

const ExampleRoute = () => (
	<ExampleWrapper
		title="Example of a subscribe input component that shows a modal as success or a text if an error ocurred"
		linkToSourceCode="https://github.com/robipop22/playground/blob/main/app/containers/SubscribeWithRedirect/index.tsx"
		children={<SubscribeToNewsletterWithRedirect />}
	/>
);

export default ExampleRoute;
