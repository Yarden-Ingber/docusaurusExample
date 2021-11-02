const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Applitools SDK API reference',
  tagline: 'A full guide to Applitools',
  url: 'https://applitools.com',
  baseUrl: '/sdk-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.webp',
  organizationName: 'Applitools', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.
  customFields: {

  },
  themeConfig: {
    algolia: {
      apiKey: '6250418bcc6c4b5124fd2f0cb776c6ba',
      indexName: 'Applitools_documentation',
      // Optional: see doc section below
      appId: '4O0M1JZGOO',
    },
    hideableSidebar: true,
    navbar: {
      title: 'Applitools SDK API reference',
      logo: {
        alt: 'Applitools documentation logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/facebook/docusaurus',
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
              label: 'Tutorial',
              to: '/',
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
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Applitools, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Set this value to '/'.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
