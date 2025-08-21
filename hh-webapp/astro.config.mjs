// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'HackHarvard Handbook',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/hackharvard' }],
        sidebar: [
            {
                label: 'LOOK HERE FOR UPDATES',
                items: [
                    { label: 'Day 1 (10/03) Updates', slug: 'updates/announcements_10-03' },
                    { label: 'Day 2 (10/04) Updates', slug: 'updates/announcements_10-04' },
                    { label: 'Day 3 (10/05) Updates', slug: 'updates/announcements_10-05' }
                ],
            },
            {
                label: 'Rules and Regulations',
                items: [
                    { label: 'Hacker Rules', slug: 'rules/ground_rules' },
                    { label: 'Project Rules', slug: 'rules/project_rules' },
                    { label: 'Judging Criteria', slug: 'rules/judging_criteria' }
                ],
            },
            {
                label: 'Schedule',
                items: [
                    { label: 'Day 1 Schedule', slug: 'schedule/day1_schedule' },
                    { label: 'Day 2 Schedule', slug: 'schedule/day2_schedule' },
                    { label: 'Day 3 Schedule', slug: 'schedule/day3_schedule' }
                ],
            },
            {
                label: 'Maps',
                items: [
                    { label: 'Floor 1 Map', slug: 'map/floor1_map' }
                ],
            },
            {
                label: 'Reference',
                items: [
                    { label: 'Shuttles', slug: 'reference/shuttles' },
                ]
            },
        ],
		}), mdx()],
});