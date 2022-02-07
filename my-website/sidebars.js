/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'Home',
      label: 'Home'
    },
    {
      type: 'category',
      label: 'SDK API reference',
      items: [
        {
          type: 'category',
          label: 'Selenium',
          items: [
            {
              type: 'category',
              label: 'Java',
              items: [
                'sdk-api-reference/Selenium/Java/AccessibilitySettings',
                'sdk-api-reference/Selenium/Java/ApiUrls',
                'sdk-api-reference/Selenium/Java/AppUrls',
                'sdk-api-reference/Selenium/Java/BatchClose',
                'sdk-api-reference/Selenium/Java/BatchInfo',
                'sdk-api-reference/Selenium/Java/ChromeEmulationInfo',
                'sdk-api-reference/Selenium/Java/ClassicRunner',
                'sdk-api-reference/Selenium/Java/Configuration',
                'sdk-api-reference/Selenium/Java/DesktopBrowserInfo',
                'sdk-api-reference/Selenium/Java/Eyes',
                
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Javascript',
          items: [
            'sdk-api-reference/Javascript/Cypress',
            'sdk-api-reference/Javascript/Storybook',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Server API',
      items: [
        {
          type: 'doc',
          id: 'server-api/ServerRestAPI',
          label: 'Server REST API Reference (v1.0)',
        },
      ]
    }
  ],
   
};
