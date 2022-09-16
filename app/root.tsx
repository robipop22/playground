import type { MetaFunction, LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import styles from './tailwind.css';
import globalStyles from './styles/globals.css';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Robipop | Playground',
	viewport: 'width=device-width,initial-scale=1',
	description: 'Here you can find a list of examples which were documented in my blog and their source code',
	tags: [
		'robipop',
		'playground',
		'examples',
		'blog',
		'react',
		'remix',
		'typescript',
		'tailwindcss',
		'github',
		'opensource',
		'oss',
	],
});

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: styles },
	{ rel: 'stylesheet', href: globalStyles },
	{
		rel: 'apple-touch-icon',
		sizes: '180x180',
		href: '/apple-touch-icon.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '32x32',
		href: '/favicon-32x32.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '16x16',
		href: '/favicon-16x16.png',
	},
	{
		rel: 'manifest',
		href: '/site.webmanifest',
	},
	{
		rel: 'mask-icon',
		href: '/safari-pinned-tab.svg',
		color: '#00aba9',
	},
];

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<script defer data-domain="playground.robipop.dev" src="https://plausible.io/js/plausible.js"></script>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export function CatchBoundary() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<div className="flex flex-col justify-center items-center h-screen w-full">
					<h1 className="text-4xl font-bold text-center">Oops nothing here :(</h1>
				</div>
				<script defer data-domain="playground.robipop.dev" src="https://plausible.io/js/plausible.js"></script>
			</body>
		</html>
	);
}
