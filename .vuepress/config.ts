import path from 'path';
import { defineUserConfig } from 'vuepress-vite';
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite';
import sidebar from './sidebar';

const config = defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
	bundler: '@vuepress/vite',
	templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
	templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
	lang: 'en-US',
	title: 'Weeby API Support',
	description: 'The official support website for Weeby API, which includes guides and FAQs regarding the API service.',
	head: [
		['meta', { charset: 'utf-8' }],
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
		['link', { rel: 'icon', href: 'https://cdn.weebyapi.xyz/img/static/IconTransparent.png' }],
		['meta', { name: 'theme-color', content: '#e881d0' }],
		['meta', { name: 'twitter:card', content: 'summary' }],
		['meta', { property: 'og:title', content: 'Weeby API Support' }],
		['meta', { property: 'og:description', content: 'The official support website for Weeby API, which includes guides and FAQs regarding the API service.' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:url', content: 'https://support.weebyapi.xyz/' }],
		['meta', { property: 'og:locale', content: 'en_US' }],
		['meta', { property: 'og:image', content: 'https://cdn.weebyapi.xyz/img/static/IconTransparent.png' }],
	],
	theme: path.join(__dirname, 'theme', 'index.ts'),
	themeConfig: {
		contributors: false,
		sidebar,
		repo: 'ntm-development/weebyapi-guide',
		docsDir: 'guide',
		sidebarDepth: 3,
		editLinks: true,
		lastUpdated: true,
		navbar: [
			{
				text: 'Website',
				link: 'https://weebyapi.xyz/',
			},
			{
				text: 'Docs',
				link: 'https://weebyapi.xyz/api/docs/',
			},
			{
				text: 'Discord',
				link: 'https://discord.gg/cmUFubKUtu',
			}
		],
		themePlugins: {
			mediumZoom: false,
		},
	},
	plugins: [],
});

const { ALGOLIA_DOCSEARCH_API_KEY, NODE_ENV } = process.env;

if (NODE_ENV === 'production' && ALGOLIA_DOCSEARCH_API_KEY) {
	config.plugins.push(
		[
			'@vuepress/plugin-docsearch',
			{
				apiKey: ALGOLIA_DOCSEARCH_API_KEY,
				indexName: 'weebyapi',
				placeholder: 'Search guide',
			},
		],
	);
}

export default config;
