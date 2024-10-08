// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.packetix.io',
	redirects: {
		'/': {
			status: 302,
			destination: '/en/',
		}
	},
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
              baseUrl: 'https://github.com/packetIX/docs.packetix.io/edit/main/',
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

  output: 'server',
  adapter: cloudflare(),
});