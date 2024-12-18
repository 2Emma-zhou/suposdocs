// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// const redocusaurus = [
//   'redocusaurus',
//   {
//     debug: Boolean(process.env.DEBUG || process.env.CI),
//     config: path.join(__dirname, 'redocly.yaml'),
//     specs: [
//       {
//         id: 'App Management',
//         spec: 'openapi/APP Management.yaml', 
//         route: '/api-reference/app-management/',
//       },
//       {
//         id: 'using-multi-file-yaml',
//         spec: 'openapi/multi-file/openapi.yaml',
//         route: '/examples/using-multi-file-yaml/',
//       },
//       {
//         id: 'using-swagger-json',
//         spec: 'openapi/swagger/swagger.json',
//         route: '/examples/using-swagger-json/',
//       },
//       {
//         id: 'using-remote-url',
//         // Remote File
//         spec: 'https://redocly.github.io/redoc/openapi.yaml',
//         route: '/examples/using-remote-url/',
//       },
//       {
//         id: 'using-custom-page',
//         spec: 'openapi/single-file/openapi.yaml',
//         // NOTE: no `route` passed, instead data used in custom React Component ('custom-page/index.jsx')
//       },
//       {
//         id: 'using-custom-layout',
//         spec: 'openapi/single-file/openapi.yaml',
//         // NOTE: no `route` passed, instead data used in custom React Component ('custom-layout/index.jsx')
//       },
//     ],
//     theme: {
//       /**
//        * Highlight color for docs
//        */
//       primaryColor: '#1890ff',
//     },
//   },
// ];

// if (process.env.VERCEL_URL) {
//   process.env.DEPLOY_PRIME_URL = `https://${process.env.VERCEL_URL}`;
// }
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'supOS Industrial Operating System',
  tagline: 'Get started reshaping your future',
  url: 'https://your_supos_url',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'https://wordpressfreezonex.oss-accelerate.aliyuncs.com/Favicon.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'M3rcyzzz', // Usually your GitHub org/user name.
  projectName: 'production', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [ 
     [
       '@docusaurus/preset-classic',
      // /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          lastVersion: 'current',
          versions: {
            current: {
              label: '4.2',
              path: '4.2',
              banner:'none',
          },
          '4.0': {
            label: '4.0',  
            path: '4.0',
            banner:'none',
        },
        },
          breadcrumbs: false,
         sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogTitle: 'FreezoneX blog!',
          blogDescription: 'A FreezoneX powered blog!',
          postsPerPage: 10,
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        
          }, 
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // pages: {
        //   path: 'src/pages',
        //   include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
        // },
        
      },
    ],
    [
    'redocusaurus',
    {
      // Plugin Options for loading OpenAPI files
      specs: [
        {
          spec: 'openapi/APP Management.yaml',
          route: '/api/',
        },
        {
          spec: 'openapi/APP Config.yaml',
          route: '/appConfig/',
        },
        {
          spec: 'openapi/Big Data Model Inference.yaml',
          route: '/bdModelInference/',
        },
        {
          spec: 'openapi/Big Data Model Training.yaml',
          route: '/bdModelTraining/',
        },
        {
          spec: 'openapi/Config Info.yaml',
          route: '/configInfo/',
        },
        {
          spec: 'openapi/Notification Center.yaml',
          route: '/NotificationCenter/',
        },
        {
          spec: 'openapi/Object Modeling.yaml',
          route: '/objectModeling/',
        },
        {
          spec: 'openapi/System Code.yaml',
          route: '/systemCode/',
        },
        {
          spec: 'openapi/workflow.yaml', 
          route: '/workflow/',
        },
        {
          spec: 'openapi/Permission Management.yaml', 
          route: '/permissionManagement/',
        },
        {
          spec: 'openapi/Authroization Management.yaml', 
          route: '/authorizationManagement/',
        },
        {
          spec: 'openapi/Identity Oauth2.yaml', 
          route: '/identityOauth2/',
        },
        {
          spec: 'openapi/Identity Authentication.yaml', 
          route: '/identityAuthentication/',
        },
        {
          spec: 'openapi/Data Push.yaml', 
          route: '/dataPush/',
        },
        {
          spec: 'openapi/Module Management.yaml', 
          route: '/moduleManagement/',
        },
        {
          spec: 'openapi/Organization.yaml', 
          route: '/organization/',
        },
        {
          spec: 'openapi/User Management.yaml', 
          route: '/userManagement/',
        },
        {
          spec: 'openapi/supLink.yaml', 
          route: '/supLink/',
        },
      ],
      // Theme Options for modifying how redoc renders them
      theme: {
        // Change with your site colors
        primaryColor: '#1890ff',
      },
    },
  ],
],
  plugins: [
    require.resolve("plugin-image-zoom"),  //zoom images in document
  ],

  themeConfig:
  // /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
       zoom: {  //image zoom config
        selector: '.mdx img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        // style:'primary',
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/supOS.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'supOS',
          },
          
          {
            // type: 'dropdown',
            label: 'Applications',
            position: 'left',
            items: [
              {
                type:'doc',
                label: 'X-Collector',
                docId: 'Using X-Collector/System Requirements sc',
              },
              {
                type: 'doc',
                label: 'X-DAM',
                docId: 'Using supDAM/System Requirements sd',
              },
              {
                type: 'doc',
                label: 'X-ETL',
                docId: 'Using supETL/System Requirements se',
              },
              {
                type: 'doc',
                label: 'X-Edge',
                docId: 'Using supEdge/System Requirements sedge',
              },
              {
                type:'doc',
                label: 'X-BD',
                docId: 'Using supBD/System Requirements sb',
              },
              {
                type:'doc',
                label: 'supLink',
                docId: 'Using supLink/System Requirements sl',
              },
              {
                type:'doc',
                label: '3D Designer',
                docId: '3D Designer/System Requirements',
              },
            ],
            
          },
          {
            // type: 'dropdown',
            label: 'Demo',
            position: 'left',
            items: [
              {
                type:'doc',
                label: 'Video Demo',
                docId: 'demo/Dashboard/Dashboard Development Step by Step',
              },
              {
                type: 'doc',
                label: 'Image/Text Demo',
                docId: 'demo/X-Collector Connection Demo/OPC DA',
              },
            ],
          },
          {
            type: 'doc',
            docId: 'Data Integration/MQTT Integration',
            label: 'Data Integration',
            position: 'left',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'demo', 
          //   position: 'left',
          //   label: 'Demo',
          // },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'api',
          //   position: 'left',
          //   label: 'API Reference',
          // },
          {
            position: 'right',
            label: 'API Reference',
            items: [
              {
                label: 'APP Management',
                to: '/api/',
              },
              {
                label: 'APP Config',
                to: '/appConfig/',
              },
              {
                label: 'Big Data Model Inference',
                to: '/bdModelInference',
              },
              {
                label: 'Big Data Model Training',
                to: '/bdModelTraining',
              },
              {   
                label: 'Object Modeling', 
                to: '/objectModeling',
              },
              {
                label: 'Workflow',
                to: '/workflow',
              },
              {
                label: 'Config Info',
                to: '/configInfo',
              },
              {
                label: 'Notification Center',
                to: '/notificationCenter',
              },
              {
                label: 'System Code',
                to: '/systemCode',
              },
              {
                label: 'Permission Management', 
                to: '/permissionManagement',
              },
              {
                label: 'Authorization Management', 
                to: '/authorizationManagement',
              },
              {
                label: 'Identity Oauth2', 
                to: '/identityOauth2',
              },
              {
                label: 'Identity Authentication', 
                to: '/identityAuthentication',
              },
              {
                label: 'Data Push', 
                to: '/dataPush/',
              },
              {
                label: 'Module Management', 
                to: '/moduleManagement/',
              },
              {  
                label: 'Organization', 
                to: '/organization/',
              },
              { 
                label: 'User Management', 
                to: '/userManagement/', 
              },
              {
                label: 'supLink', 
                to: '/supLink/',   
              },
            ]
          }, 
          
          //  {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: false,
          },
          // {
          //   href: 'https://github.com/facebook/docusaurus', 
          //   label: 'GitHub',
          //   position: 'right', 
          // },
          // {  
          //   href: '@site/release_notes',
          //   label: 'Release Notes',
          //   position: 'right', 
          // },
       
        ], 
      },
      algolia: {
        appId: '29I8LAXY53',
        apiKey: '420807d466741ad059d2c9aa0d68e28d',
        indexName: 'work-related',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        searchParameters: {},
        searchPagePath: 'search',
      },
      title: 'My site',
  // ...
  themes: ['@docusaurus/theme-search-algolia'],
  
  stylesheets: [
    {
      // ...
      href: './src/css/custom.css',
      // ...
    },
  ],
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/4.2/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/tMGaBRwU',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/FreezoneX123',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/M3rcyzzz/production/tree/main/supOS',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FreezoneX Inc.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'), lightCodeTheme,  //code block change to black
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;


