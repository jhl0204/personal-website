// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://jhl0204.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/personal-website/',

  // GitHub pages deployment config.
  organizationName: 'jhl0204', // Usually your GitHub username.
  projectName: 'personal-website', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jhl0204/personal-website/tree/main/',
          exclude: [
            'tutorial-basics/**',
            'tutorial-extras/**',
            '**/README.md',
          ],
        },
        blog: {
          showReadingTime: true,
          routeBasePath: 'journal',
          blogTitle: 'My Journal',
          blogDescription: 'A personal journal of thoughts, experiences, and reflections',
          postsPerPage: 5,
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'My Journal',
            description: 'A personal journal of thoughts, experiences, and reflections',
            xslt: true,
          },
          editUrl:
            'https://github.com/jhl0204/personal-website/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'projectsSidebar',
            position: 'left',
            label: 'Projects',
          },
          {
            type: 'docSidebar',
            sidebarId: 'workflowSidebar',
            position: 'left',
            label: 'Workflow',
          },
          {
            type: 'docSidebar',
            sidebarId: 'topicsSidebar',
            position: 'left',
            label: 'Topics',
            docsPluginId: 'default',
          },
          {to: '/journal', label: 'Journal', position: 'left'},
          {
            href: 'https://github.com/jhl0204/personal-website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Projects',
                to: '/docs/projects/welcome',
              },
              {
                label: 'Topics',
                to: '/docs/topics/welcome',
              },
              {
                label: 'Workflow',
                to: '/docs/workflow/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Journal',
                to: '/journal',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/jhl0204/personal-website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
