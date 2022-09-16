import type { FC, ReactElement } from 'react';
import type { ExampleWrapperProps } from './props';

const ExampleWrapper: FC<ExampleWrapperProps> = ({
	children,
	title,
	linkToSourceCode,
}: ExampleWrapperProps): ReactElement => (
	<section className="min-h-screen w-full gradient-background flex justify-center items-center flex-col p-5">
		<h1 className="text-3xl text-center">{title}</h1>
		{children}
		<a
			href={linkToSourceCode}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center pt-10 justify-evenly gap-5 cursor-pointer">
			Source Code <img className="w-10 h-10" src="/images/github.svg" alt="github icon" />
		</a>
	</section>
);

export default ExampleWrapper;
