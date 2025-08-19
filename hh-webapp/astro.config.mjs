// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'HackHarvard Handbook',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/hackharvard' }],
			sidebar: [
				{
					label: 'Announcements',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Organizer Updates', slug: 'guides/announcements' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
