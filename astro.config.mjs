// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.packetix.io',
	integrations: [
		starlight({
			title: 'packet:IX Docs',
			customCss: [
				'./src/styles/custom.css',
				'./src/styles/fonts.css',
			],
			locales: {
				en: {
					label: 'English',
				},
				ko: {
					label: '한국어',
				},
				ja: {
					label: '日本語',
				},
			},
			defaultLocale: 'en',
			social: {
				github: 'https://github.com/packetIX/docs.packetix.io',
				discord: 'https://packetix.io/discord',
			},
			editLink: {
				baseUrl: 'github.com/packetIX/docs.packetix.io/edit/main/docs/',
			},
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
