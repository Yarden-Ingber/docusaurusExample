module.exports = {

  mainSidebar: [
    {
      type: 'category',
      label: 'Applitools API reference guide',
      link: {type: 'generated-index', title: 'Applitools API reference guide', slug: '/',},
      items: [
        {
          type: 'category',
          label: 'Server REST API',
          link: {type: 'doc', id: 'server-api/getting-started'},
          items: [
            'server-api/basic-endpoint',
            'server-api/authentication',
            'server-api/date-format',
            {
              type: 'category',
              label: 'Batches',
              items: [
                'server-api/batches/list-batch-results',
                'server-api/batches/list-batch-statistics',
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'SDK API',
          link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
          items: [
            {
              type: 'category',
              label: 'Selenium',
              link: {type: 'generated-index', title: 'List of programming languages', slug: '/sdk-api/selenium',},
              items: [
                {type: 'link', label: 'Java', href: '/sdk-api/selenium/java'},
                {type: 'link', label: 'Javascript', href: '/sdk-api/selenium/javascript'},
                {type: 'link', label: 'DotNet', href: '/sdk-api/selenium/dotnet'},
                {type: 'link', label: 'Python', href: '/sdk-api/selenium/python'},
                {type: 'link', label: 'Python sdk 4', href: '/sdk-api/selenium/python_sdk4'},
              ]
            },
            {
              type: 'category',
              label: 'Selenium 4',
              items: [
                {type: 'link', label: 'Javascript', href: '/sdk-api/selenium4/javascript'},
              ]
            },
            {
              type: 'category',
              label: 'Appium',
              link: {type: 'generated-index', title: 'List of programming languages', slug: '/sdk-api/appium',},
              items: [
                {type: 'link', label: 'Java', href: '/sdk-api/appium/java'},
                {type: 'link', label: 'DotNet', href: '/sdk-api/appium/dotnet'},
              ]
            },
            {
              type: 'category',
              label: 'Espresso',
              items: [
                {type: 'link', label: 'Java', href: '/sdk-api/espresso/java'},
              ]
            },
            {
              type: 'category',
              label: 'Images',
              link: {type: 'generated-index', title: 'List of programming languages', slug: '/sdk-api/images',},
              items: [
                {type: 'link', label: 'Dotnet', href: '/sdk-api/images/dotnet'},
                {type: 'link', label: 'Java', href: '/sdk-api/images/java'},
                {type: 'link', label: 'Javascript', href: '/sdk-api/images/javascript'},
                {type: 'link', label: 'Objective C', href: '/sdk-api/images/objectivec'},
                {type: 'link', label: 'Python', href: '/sdk-api/images/python'},
              ]
            },
            {
              type: 'category',
              label: 'Images App kit',
              items: [
                {type: 'link', label: 'Objective C', href: '/sdk-api/imagesappkit/objectivec'},
              ]
            },
            {
              type: 'category',
              label: 'Nightwatch',
              items: [
                {type: 'link', label: 'Javascript', href: '/sdk-api/nightwatch/javascript'},
              ]
            },
            {
              type: 'category',
              label: 'Playwright',
              items: [
                {type: 'link', label: 'Javascript', href: '/sdk-api/playwright/javascript'},
              ]
            },
            {
              type: 'category',
              label: 'Protractor',
              items: [
                {type: 'link', label: 'Javascript', href: '/sdk-api/protractor/javascript'},
              ]
            },
            {
              type: 'category',
              label: 'WebdriverIO 4',
              items: [
                {type: 'link', label: 'Javascript', href: '/sdk-api/wdio4/javascript'},
              ]
            },
            {
              type: 'category',
              label: 'WebdriverIO 5-7',
              items: [
                {type: 'link', label: 'Javascript', href: '/sdk-api/wdiogeneric/javascript'},
              ]
            },
            {
              type: 'category',
              label: 'XCUI',
              items: [
                {type: 'link', label: 'Objective C', href: '/sdk-api/xcui/objectivec'},
              ]
            },
          ]
        }
      ]
    }
  ],

  sdkAppiumJavaSidebar: [
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {
          type: 'category',
          label: 'Appium',
          items: [
            {
              type: 'category',
              label: 'Java',
              link: {
                type: 'generated-index',
                title: 'Class index',
                slug: '/sdk-api/appium/java',
                // description: 'description',
              },
              items: [{type: 'autogenerated',dirName: 'sdk-api/appium/java'}],
            },
          ]
        },
      ]
    }
  ],

  sdkAppiumCsharpSidebar: [
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {
          type: 'category',
          label: 'Appium',
          items: [
            {
              type: 'category',
              label: 'DotNet',
              link: {
                type: 'generated-index',
                title: 'Class index',
                slug: '/sdk-api/appium/dotnet',
                // description: 'description',
              },
              items: [{type: 'autogenerated',dirName: 'sdk-api/appium/csharp'}],
            },
          ]
        },
      ]
    }
  ],

  sdkEspressoJavaSidebar: [
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {
          type: 'category',
          label: 'Espresso',
          items: [
            {
              type: 'category',
              label: 'Java',
              link: {
                type: 'generated-index',
                title: 'Class index',
                slug: '/sdk-api/espresso/java',
                // description: 'description',
              },
              items: [{type: 'autogenerated',dirName: 'sdk-api/espresso/java'}],
            },
          ]
        },
      ]
    }
  ],

  sdkImagesCsharpSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference', 
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'Images', //Edit ******
          items: [
            {type: 'category',
              label: 'DotNet', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/images/dotnet', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/images/csharp'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],

  sdkImagesJavaSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'Images', //Edit ******
          items: [
            {type: 'category',
              label: 'Java', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/images/java', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/images/java'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],

  sdkImagesJavascriptSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'Images', //Edit ******
          items: [
            {type: 'category',
              label: 'Javascript', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/images/javascript', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/images/javascript'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],

  sdkImagesObjectivecSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'Images', //Edit ******
          items: [
            {type: 'category',
              label: 'Objective C', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/images/objectivec', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/images/objectivec'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],

  sdkImagesPythonSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'Images', //Edit ******
          items: [
            {type: 'category',
              label: 'Python', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/images/python', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/images/python_sdk4'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],

  sdkImagesAppKitObjectivecSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'Images App kit', //Edit ******
          items: [
            {type: 'category',
              label: 'Objective C', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/imagesappkit/objectivec', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/imagesappkit/objectivec'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],
  
  sdkNightwatchJavascriptSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'Nightwatch', //Edit ******
          items: [
            {type: 'category',
              label: 'Javascript', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/nightwatch/javascript', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/nightwatch/javascript'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],

  sdkPlaywrightJavascriptSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'Playwright', //Edit ******
          items: [
            {type: 'category',
              label: 'Javascript', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/playwright/javascript', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/playwright/javascript'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],

  sdkProtractorJavascriptSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'Protractor', //Edit ******
          items: [
            {type: 'category',
              label: 'Javascript', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/protractor/javascript', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/protractor/javascript'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],

  sdkPuppeteerJavascriptSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'Puppeteer', //Edit ******
          items: [
            {type: 'category',
              label: 'Javascript', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/puppeteer/javascript', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/puppeteer/javascript'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],

  sdkSeleniumCsharpSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'Selenium', //Edit ******
          items: [
            {type: 'category',
              label: 'DotNet', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/selenium/dotnet', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/selenium/csharp'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],

  sdkSeleniumJavaSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'Selenium', //Edit ******
          items: [
            {type: 'category',
              label: 'Java', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/selenium/java', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/selenium/java'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],

  sdkSeleniumJavascriptSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'Selenium', //Edit ******
          items: [
            {type: 'category',
              label: 'Javascript', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/selenium/javascript', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/selenium/javascript'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],

  sdkSeleniumPythonSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'Selenium', //Edit ******
          items: [
            {type: 'category',
              label: 'Python', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/selenium/python', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/selenium/python'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],

  sdkSeleniumPythonSdk4Sidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'Selenium', //Edit ******
          items: [
            {type: 'category',
              label: 'Python sdk 4', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/selenium/python_sdk4', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/selenium/python_sdk4'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],

  sdkSelenium4JavascriptSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'Selenium 4', //Edit ******
          items: [
            {type: 'category',
              label: 'Javascript', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/selenium4/javascript', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/selenium4/javascript'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],

  sdkWDIO4JavascriptSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'WebdriverIO 4', //Edit ******
          items: [
            {type: 'category',
              label: 'Javascript', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/wdio4/javascript', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/wdio4/javascript'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],

  sdkWDIO5JavascriptSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'WebdriverIO 5-7', //Edit ******
          items: [
            {type: 'category',
              label: 'Javascript', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/wdiogeneric/javascript', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/wdiogeneric/javascript'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],

  sdkXCUIObjectiveCSidebar: [ //Edit ******
    {
      type: 'category', label: 'SDK API reference',
      link: {type: 'generated-index', title: 'List of available SDKs', slug: '/sdk-api',},
      items: [
        {type: 'category',
          label: 'XCUI', //Edit ******
          items: [
            {type: 'category',
              label: 'Objective C', //Edit ******
              link: {type: 'generated-index', title: 'Class index',
                slug: '/sdk-api/xcui/objectivec', //Edit ******
                // description: 'description',
              },
              items: [{type: 'autogenerated',
                dirName: 'sdk-api/xcui/objectivec'} //Edit ******
              ],
            },
          ]
        },
      ]
    }
  ],
   
};
