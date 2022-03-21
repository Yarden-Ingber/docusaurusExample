const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Applitools API reference',
  tagline: 'A guide to the Applitools API',
  url: 'https://applitools.com',
  baseUrl: '/docs/api-ref/',
  onBrokenLinks: 'error',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.webp',
  organizationName: 'Applitools', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.
  customFields: {

  },
  themeConfig: {
    // algolia: {
    //   apiKey: '2a94ef2d6dd8443ed6f1deb4b0f7c393',
    //   indexName: 'applitools-sdk',
    //   appId: '43J1WXG2YG',
    // },
    hideableSidebar: false,
    navbar: {
      logo: {
        alt: 'Applitools documentation logo',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
      },
      items: [
        {
          to: "https://applitools.com/docs/topics/overview.html",
          label: "Overview",
          position: "left",
          target: '_self',
        },
        {
          to: "https://applitools.com/docs/topics/general-concepts.html",
          label: "Concepts",
          position: "left",
          target: '_self',
        },
        {
          to: "https://applitools.com/docs/topics/sdk/sdk.html",
          label: "SDK",
          position: "left",
          target: '_self',
        },
        {
          to: "https://applitools.com/docs/topics/test-manager/tm-overview.html",
          label: "Test manager",
          position: "left",
          target: '_self',
        },
        {
          to: "https://applitools.com/docs/topics/integrations.html",
          label: "Integrations",
          position: "left",
          target: '_self',
        },
        {
          to: "https://applitools.com/docs/topics/test-manager/pages/tm-page-admin-admin-panel.html",
          label: "Admin",
          position: "left",
          target: '_self',
        },
        {
          to: 'https://applitools.com/docs/api-ref/',
          label: 'API reference',
          position: "left",
          target: '_self',
        },
        {
          href: '#',
          label: ' ',
          position: 'left',
          className: 'searchBar',
        },
        {
          to: 'https://auth.applitools.com/users/register',
          label: 'GET STARTED',
          position: 'right',
          className: 'button',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          items: [
            {
              html: '<a href="https://www.facebook.com/pages/Applitools/163528770501019" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/facebook-circled--v5.png" height="30px" width="30px"/></a>\
              <a href="https://twitter.com/applitools" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/twitter-circled--v2.png" height="30px" width="30px"/></a>\
              <a href="http://www.linkedin.com/company/2837526?trk=tyah" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin-circled--v2.png" height="30px" width="30px"/></a>\
              <a href="http://www.youtube.com/channel/UCk13Ucc26mWqI4xvsbO13jw" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png" height="30px" width="30px"/></a>\
              <a href="https://medium.com/@applitools" target="_blank"><img src="https://img.icons8.com/glyph-neue/64/000000/medium-logo.png" height="30px" width="30px"/></a>\
              <a href="https://github.com/applitools" target="_blank"><img src="https://img.icons8.com/glyph-neue/64/000000/github.png" height="30px" width="30px"/></a><script async src="https://js.sitesearch360.com/plugin/bundle/1853.js"></script>',
            }
          ],
        },
        {
          items: [
            {
              label: 'Terms & Conditions',
              to: 'https://applitools.com/terms-of-use/',
            },
          ],
        },
        {
          items: [
            {
              label: 'Privacy Policy',
              to: 'https://applitools.com/privacy-policy/',
            },
          ],
        },
        {
          items: [
            {
              label: 'GDPR',
              to: 'https://applitools.com/gdpr/',
            },
          ],
        },
        {
          items: [
            {
              label: 'Privacy Shield',
              to: 'https://applitools.com/privacy-shield-notice/',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Applitools, Inc.`,
      copyright: `Applitools. All Rights Reserved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
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
