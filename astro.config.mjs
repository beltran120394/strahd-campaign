// @ts-check
// @ts-ignore
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarEntries } from 'starlight-obsidian'


const vault = "/Users/beltran120394/Library/Mobile Documents/iCloud~md~obsidian/Documents/La Maldición de Strahd"



// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightObsidian({
					vault,
					skipGeneration: true,
				}),
			],
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
				{
					label: 'Notes',
					// Add the generated Obsidian sidebar entries to this group.
					items: [obsidianSidebarEntries],
				},
			],
		}),
	],
});
