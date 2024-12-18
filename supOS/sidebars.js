/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  
  tutorialSidebar: [
    'intro',
    'Getting Started/System Requirements',
    'Getting Started/Installing supOS',
    'Using supOS/Login',
    {
      type: 'category',
      label: 'Access Management',
      link: {
        type: 'generated-index'
    },
        items: [
          
        ]
        },
        {
          type: 'category',
          label: 'Digital Factory',
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'category',
              label: 'Object Modeling',
              link: {
                type: 'generated-index'
            },
            items: [
              'Using supOS/Digital Factory/Object Model Management/Overview',
              {
                type: 'category',
              label: 'Entity Model Creation',
              link: {
                type: 'generated-index'
            },
            items: [
              'Using supOS/Digital Factory/Object Model Management/Entity Template Type',
              'Using supOS/Digital Factory/Object Model Management/Entity Model Details',
              'Using supOS/Digital Factory/Object Model Management/Creating Entity Template',
              'Using supOS/Digital Factory/Object Model Management/Creating Entity Instance',
            ]
            },
            {type: 'category',
            label: 'Form Model Creation',
            link: {
              type: 'generated-index'
            },
            items: [
              'Using supOS/Digital Factory/Object Model Management/Form Template vs Data Table',
              'Using supOS/Digital Factory/Object Model Management/Creating Form Model',
            ]
            },
            'Using supOS/Digital Factory/Object Model Management/Other Operations',
            'Using supOS/Digital Factory/Object Model Management/Embedded Service',
                  
    
            ]
            },
            {
              type: 'category',
              label: 'Organization Management',
              link: {
                  type: 'generated-index',
              },
              items: [
                'Using supOS/Digital Factory/Organization Management/Adding Company',
                'Using supOS/Digital Factory/Organization Management/Adding Organization',
                'Using supOS/Digital Factory/Organization Management/Adding Staff',
                'Using supOS/Digital Factory/Organization Management/Assigning Permissions to Subsidiary Admin',
              ]
            },
          ],
        },
        
        {type: 'category',
        label: 'Application Management',
        link: {
          type: 'generated-index',
        },
        items: [
          'Using supOS/APP Management/APP Runtime Management',
          {
            type: 'category',
            label: 'Application Design',
            link: {
                type: 'generated-index',
                
            },
            items: [
              'Using supOS/APP Management/APP/Designing Process',
          'Using supOS/APP Management/APP/Creating an Application',
          'Using supOS/APP Management/APP/Adding a Page',
          'Using supOS/APP Management/APP/Layout Scenario',
           {
            type: 'category',
            label: 'Designing Pages in Free Layout',
            link: {
                type: 'generated-index',
            },
            items: [
              'Using supOS/APP Management/APP/Free Layout/Page Description',
              'Using supOS/APP Management/APP/Free Layout/Creating a Page',
              'Using supOS/APP Management/APP/Free Layout/Quick Operations',
            ]
           },
           {
            type: 'category',
            label: 'Designing Pages in Grid Layout',
            link: {
                type: 'generated-index',
            },
            items: [
              'Using supOS/APP Management/APP/Grid Layout/Designing a Page',
              'Using supOS/APP Management/APP/Grid Layout/Quick Operations',
            ]
           },
           'Using supOS/APP Management/APP/Designing Custom Component',
           'Using supOS/APP Management/APP/Adding Data Query',
           {
            type: 'category',
            label: 'Appendix',
            link: {
                type: 'generated-index',
            },
            items: [
              'Using supOS/APP Management/APP/Dynamic Effect',
          'Using supOS/APP Management/APP/Element Details',
          'Using supOS/APP Management/APP/Element Script',
            ]
           },
            ]
          },
          {
            type: 'category',
            label: 'Workflow Design',
            link: {
                type: 'generated-index',
            },
            items: [
              'Using supOS/APP Management/Workflow Design/Process',
              'Using supOS/APP Management/Workflow Design/Workflow Creation',
              'Using supOS/APP Management/Workflow Design/Page Description',
              'Using supOS/APP Management/Workflow Design/Element Description',
              'Using supOS/APP Management/Workflow Design/Workflow Script',
            ]
          },
         
        ]
        },
        {
          type: 'category',
          label: 'User Center',
          link: {
              type: 'generated-index',
          },
          items: [
                'Using supOS/User Center/User Management',
                'Using supOS/User Center/Role Management',
                'Using supOS/User Center/Viewing Permission',
                'Using supOS/User Center/Viewing Online User',
          ]
        },
        {
          type: 'category',
          label: 'Competence Center',
          link: {
              type: 'generated-index',
          },
          items: [
            {
              type: 'category',
              label: 'Message Management',
              link: {
                  type: 'generated-index',
              },
              items: [
                'Using supOS/Competence Center/Message Management/Setting Message Information',
                'Using supOS/Competence Center/Message Management/Configuring Message Content',
                'Using supOS/Competence Center/Message Management/Setting Message Theme',
                'Using supOS/Competence Center/Message Management/Sending Message through API',
                'Using supOS/Competence Center/Message Management/Managing Messages',
              ]
            },
            {
              type: 'category',
              label: 'Task Management',
              link: {
                  type: 'generated-index',
              },
              items: [
                'Using supOS/Competence Center/Task Management/Viewing Subscription Tasks',
                'Using supOS/Competence Center/Task Management/Viewing Object Service Tasks',
                'Using supOS/Competence Center/Task Management/Data Dump',
                'Using supOS/Competence Center/Task Management/Viewing Webhook Tasks',
                'Using supOS/Competence Center/Task Management/Scheduling Tasks',
              ]
            },
            {
              type: 'category',
              label: 'Storage Resources',
              link: {
                  type: 'generated-index',
              },
              items: [
                'Using supOS/Competence Center/Storage Resources/Applying Resource',
                'Using supOS/Competence Center/Storage Resources/Registering Data Source',
                'Using supOS/Competence Center/Storage Resources/PI Service Registration',
                'Using supOS/Competence Center/Storage Resources/Standard Data Service Registration',
                'Using supOS/Competence Center/Storage Resources/Data Source Description',
                
                
              ]
            },
            'Using supOS/Competence Center/Log Management/Viewing Logs',
          ]
        },
        
    {
      type: 'category',
      label: 'System Configuration',
      link: {
          type: 'generated-index',
      },
      items: [
        'Using supOS/System Management/Configuring Menu',
        {
          type: 'category',
          label: 'System Settings',
          link: {
              type: 'generated-index',
          },
          items: [
            'Using supOS/System Management/System Configuration/Basic System Settings',
            'Using supOS/System Management/System Configuration/Extension System Settings',
            
            
          ]
        },
          ]
        },
    {
      type: 'category',
      label: 'Operation Center',
      link: {
          type: 'generated-index',
      },
      items: [
        
        'Using supOS/Monitoring/Overview',
'Using supOS/Monitoring/Business Process',
'Using supOS/Monitoring/Trend Chart Operations',
'Using supOS/Monitoring/Dashboard',
'Using supOS/Monitoring/Alarm',
'Using supOS/Monitoring/Video',
'Using supOS/Monitoring/Production Report',
      ]
    },
   
  ],

  // But you can create a sidebar manually
//   api: [
   
//     {
//       type: 'category',
//       label: 'OpenAPI',
//       link: {
//           type: 'generated-index',
//       },
//       items: [
//         'Open API/Error Code Reference',
        
//   {
//     type: 'category',
//       label: 'Object Modeling',
//       link: {
//           type: 'generated-index',
//       },
//       items: [
//     'Open API/Object Modeling/Network',
//     'Open API/Object Modeling/Alarm',
// 'Open API/Object Modeling/Event',
// 'Open API/Object Modeling/History Alarm',
// 'Open API/Object Modeling/Instance',
// 'Open API/Object Modeling/Label',
// 'Open API/Object Modeling/Attribute',
// 'Open API/Object Modeling/Relation',
// 'Open API/Object Modeling/Running Functions',
// 'Open API/Object Modeling/Template',
//     ]
//   }, 
//   {
//     type: 'category',
//       label: 'supLink',
//       link: {
//           type: 'generated-index',
//       },
//       items: [
//     'Open API/supLink/Send Messages to Mobile App',
//     ]
//   }, 
//   {
//     type: 'category',
//       label: 'APP Management Management',
//       link: {
//           type: 'generated-index',
//       },
//       items: [
//     'Open API/APP Management Management/Pages',
//     'Open API/APP Management Management/Layouts',
//     'Open API/APP Management Management/Object Data',

//     ]
//   }, 
//   {
//     type: 'category',
//       label: 'APP Management',
//       link: {
//           type: 'generated-index',
//       },
//       items: [
//     'Open API/APP Management/Apps',
//     ]
//   },
//   {
//     type: 'category',
//       label: 'Big Data Model Analysis',
//       link: {
//           type: 'generated-index',
//       },
//       items: [
//     'Open API/Big Data Model Analysis/Data Mining Runtime',
//     ]
//   },
//   {
//     type: 'category',
//       label: 'Big Data Model Training',
//       link: {
//           type: 'generated-index',
//       },
//       items: [
//     'Open API/Big Data Model Training/Data Mining',
//     ]
//   },
//   {
//     type: 'category',
//       label: 'Workflow',
//       link: {
//           type: 'generated-index',
//       },
//       items: [
//     'Open API/Workflow/Task',
//     'Open API/Workflow/Process',
//     ]
//   },
//   {
//     type: 'category',
//       label: 'Configuration Information',
//       link: {
//           type: 'generated-index',
//       },
//       items: [
//     'Open API/Configuration Information/Config',
//     ]
//   },
//   {
//     type: 'category',
//       label: 'Data Push',
//       link: {
//           type: 'generated-index',
//       },
//       items: [
//     'Open API/Data Push/Webhook',
//     ]
//   },
//   {
//     type: 'category',
//       label: 'Authentication Management',
//       link: {
//           type: 'generated-index',
//       },
//       items: [
//     'Open API/Authentication Management/Quota',
//     ]
//   },
//   {
//     type: 'category',
//       label: 'Organization',
//       link: {
//           type: 'generated-index',
//       },
//       items: [
//     'Open API/Organization/Orgs',
//     ]
//   },
//   {
//     type: 'category',
//       label: 'Notification Center',
//       link: {
//           type: 'generated-index',
//       },
//       items: [
//     'Open API/Notification Center/V1',
//     'Open API/Notification Center/V2',
//     ]
//   },
//   {
//     type: 'category',
//       label: 'System Code',
//       link: {
//           type: 'generated-index',
//       },
//       items: [
//     'Open API/System Code/System Codes',
//     ]
//   },
//   {
//     type: 'category',
//       label: 'User Management',
//       link: {
//           type: 'generated-index',
//       },
//       items: [
//     'Open API/User Management/Users',
//     ]
//   },
//   {
//     type: 'category',
//       label: 'Identity Authentication',
//       link: {
//           type: 'generated-index',
//       },
//       items: [
//     'Open API/Identity Authentication/oauth2',
//     ]
//   },
  
//       ]
//     },
      
//   ],
  demo: [ 
    'demo/Dashboard/Dashboard Development Step by Step',
    {
      type: 'category',
      label: 'Data Collection',
      link: {
          type: 'generated-index',
      },
      items: [
        'demo/class series/Data Collection/Collecting Data through Modbus',
         'demo/class series/Data Collection/Collecting Data through OPC DA',
        'demo/class series/Data Collection/Collecting Video Data through RTSP',
        'demo/class series/Data Collection/Collecting Data from External Database',
        // 'class series/Data Collection/Collecting Data through MQTT',
      
      ]
    },
    {
      type: 'category',
      label: 'Factory Modeling',
      link: {
          type: 'generated-index',
      },
      items: [
        'demo/class series/Factory Modeling/Object Model Introduction',
        'demo/class series/Factory Modeling/Object Model Introduction_2',
        'demo/class series/Factory Modeling/Embedded Service Video',
        'demo/class series/Factory Modeling/JSQL',
      
      ]
    },
    {
      type: 'category',
      label: 'Low Code Development',
      link: {
          type: 'generated-index',
      },
      items: [
        'demo/class series/Low Code Development/Sales Order Workflow',
        'demo/class series/Low Code Development/Staff Information Demo',
      
      ]
    },
    {
      type: 'category',
      label: 'Open API',
      link: {
          type: 'generated-index',
      },
      items: [
        // 'class series/Low Code Development/Sales Order Workflow',
        'demo/class series/Open API/OpenAPI Internal Usage',
        'demo/class series/Open API/OpenAPI External Usage',
        'demo/class series/Open API/Global API',
      
      ]
    },
  ],
  textDemo: [ 
    {
      type: 'category',
      label: 'Data Connection Demo',
      link: {
          type: 'generated-index',
      },
      items: [
        'demo/X-Collector Connection Demo/OPC DA',
        'demo/X-Collector Connection Demo/Modbus',
        'demo/X-Collector Connection Demo/Third-party Database Connection',
        'demo/X-Collector Connection Demo/MQTT',
      ]
    },
    {
      type: 'category',
      label: 'Digital Factory Demo',
      link: {
          type: 'generated-index',
      },
      items: [
        'demo/Digital Factory Demo/Global APIs',
        'demo/Digital Factory Demo/Jsql Guide',
        'demo/Digital Factory Demo/Call OpenAPI in Service',
      ]
    },
    {
      type: 'category',
      label: 'Low Code Development',
      link: {
          type: 'generated-index',
      },
      items: [
        'demo/Low Code Development/Gas Monitoring Process Demo',
        'demo/Low Code Development/Sales Order Demo',
        'demo/Low Code Development/Sales Order Approval Workflow Demo',
        'demo/Low Code Development/Sales Order Dashboard Demo',
        'demo/Low Code Development/Sales Order Report Demo',
        'demo/Low Code Development/Data Write Back',
        'demo/Low Code Development/Data Linkage in Free Layout',
        'demo/Low Code Development/Data Linkage in Grid Layout', 
        'demo/Low Code Development/Operations on Report',
        'demo/Low Code Development/Programmable Component',

      ]
    },
    
    {
      type: 'category',
      label: 'Open API Demo',
      link: {
          type: 'generated-index',
      },
      items: [
        'demo/OpenAPI demo/OpenAPI Internal Usage Demo',
        'demo/OpenAPI demo/OpenAPI External Usage Demo',
      
      ]
    },
  ],
  dataIntegration: [ 
    {
      type: 'category',
      label: 'MQTT Integration',
      link: {
          type: 'generated-index',
      },
      items: [
        'Data Integration/MQTT Integration',
        'Data Integration/MQTT Data Protocol',
      ]
    },
    {
      type: 'category',
      label: 'GRPC Integration',
      link: {
          type: 'generated-index',
      },
      items: [
        'Data Integration/GRPC Integration',
        'Data Integration/GRPC Data Protocol',
      ]
    },
  ],
  supCollector: [
    'Using X-Collector/System Requirements sc',
        'Using X-Collector/Installing X-Collector',  
        
      {type: 'category',
        label: 'Connecting X-Collector',
        link: {
          type: 'generated-index',
        },
        items: [
          'Using X-Collector/Collector Type',
          'Using X-Collector/Configuring X-Collector',
          // 'Using X-Collector/Connecting Simulate Collector',
          'Using X-Collector/Connecting TSD Collector',
          // 'Using X-Collector/Connecting Cascading Collector',
          // 'Using X-Collector/Connecting Third-party Collector',
          // 'Using X-Collector/Supported Driver',
        ]
        },
        {type: 'category',
        label: 'Appendix',
        link: {
          type: 'generated-index',
        },
        items: [
          'Using X-Collector/Appendix/Disable Windows Update Service',
          'Using X-Collector/Appendix/Migrate Authorization',
        'Using X-Collector/Appendix/Update Error Solution',
        'Using X-Collector/Appendix/Net Program Installation',
        'Using X-Collector/Appendix/Change Login Port',
        ],
      },
  ],
  supETL: [
    
    'Using supETL/System Requirements se',
    'Using supETL/Installing X-ETL',

    {
      type: 'category',
      label: 'Using X-ETL',
      link: {
          type: 'generated-index',
      },
      items: [
        // 'Using supETL/Process Diagram',
        {
          type: 'category',
          label: 'Data Connection',
          link: {
              type: 'generated-index',
          },
          items: [
            'Using supETL/Overview',
            'Using supETL/Connecting Data',
            'Using supETL/Data Source Description',
          ]
        },
        {
          type: 'category',
          label: 'Task Configuration',
          link: {
              type: 'generated-index',
          },
          items: [
        'Using supETL/Adding Data Task',
        'Using supETL/Configuring Data Task',
        'Using supETL/Publishing Data Task',
        'Using supETL/Task Node Description',
          ]
        },
        'Using supETL/Task Overview',
        'Using supETL/Task O&M',
        'Using supETL/Task Kinship',
      ]
    },
    {
      type: 'category',
      label: 'Data Migration',
      link: {
          type: 'generated-index',
      },
      items: [
        'Using supETL/Enabling CDC',
        'Using supETL/Migrating Database',
      ]
    },
  ],
  supDAM: [
    
    'Using supDAM/System Requirements sd',
    'Using supDAM/Installing X-DAM',
    {
      type: 'category',
      label: 'Using X-DAM',
      link: {
          type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Data Asset',
          link: {
              type: 'generated-index',
          },
          items: [
            'Using supDAM/Data Asset/Data Asset Directory',
            'Using supDAM/Data Asset/Metadata Collection',
            'Using supDAM/Data Asset/Metadata Center',
            'Using supDAM/Data Asset/Data Resource Overview',
            'Using supDAM/Data Asset/Data Resource Statistics',
          ]
        },
        {
          type: 'category',
          label: 'Data Governance',
          link: {
              type: 'generated-index',
          },
          items: [
            {
              type: 'category',
              label: 'Data Standard',
              link: {
                  type: 'generated-index',
              },
              items: [
                'Using supDAM/Data Standard/Creating Standards',
                'Using supDAM/Data Standard/Executing Standards',
                'Using supDAM/Data Standard/Standards Overview',
              ]
            },
            {
              type: 'category',
              label: 'Data Quality',
              link: {
                  type: 'generated-index',
              },
              items: [
                'Using supDAM/Data Quality/Creating QC Rule',
                'Using supDAM/Data Quality/Creating QC Task',
                'Using supDAM/Data Quality/Execution Records',
                'Using supDAM/Data Quality/Quality Analysis',
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Data Workshop',
          link: {
              type: 'generated-index',
          },
          items: [
            'Using supDAM/Data Workshop/Creating Business Distribution',
            'Using supDAM/Data Workshop/Designing Model',
            'Using supDAM/Data Workshop/Creating Indicator',
            'Using supDAM/Data Workshop/Model Overview',
          ]
        },
        {
          type: 'category',
          label: 'Data Service',
          link: {
              type: 'generated-index',
          },
          items: [
            'Using supDAM/Data Service/Developing Service',
            'Using supDAM/Data Service/Service Management',
            'Using supDAM/Data Service/Service Overview',
          ]
        },
        
        'Using supDAM/Maintenance Center',
        
      ]
    },
    // {
    //   type: 'category',
    //   label: 'StarRocks Deployment',
    //   link: {
    //       type: 'generated-index',
    //   },
    //   items: [
    //     'Using supDAM/StarRocks Deployment/System Requirements',
    //     'Using supDAM/StarRocks Deployment/Deploying StarRocks',
    //   ]
    // },
  ],
  supEdge: [
    
    'Using supEdge/System Requirements sedge',
    'Using supEdge/Installing X-Edge',
    {
      type: 'category',
      label: 'Using X-Edge',
      link: {
          type: 'generated-index',
      },
      items: [
        // 'Using supEdge/Process Diagram',
        'Using supEdge/Connecting Video Source',
        'Using supEdge/Configuring Algorithm',
        'Using supEdge/Configuring Monitoring Design',
        'Using supEdge/Assigning Permission',
        'Using supEdge/Video Monitoring',
      
      ]
    },
    'Using supEdge/Integrating Third-party Algorithms in X-Edge',
    'Using supEdge/Algorithm Description',

      
  ],
  supBD: [
    
    'Using supBD/System Requirements sb',
    'Using supBD/Installing X-BD',
    {
      type: 'category',
      label: 'Using X-BD',
      link: {
          type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Experiment Model Creation',
          link: {
              type: 'generated-index',
          },
          items: [
            'Using supBD/Creating Sample Set',
            'Using supBD/Designing Experiment',
            'Using supBD/Creating Experiment Model',
            'Using supBD/Component Description',
          ]
        },
        {
          type: 'category',
          label: 'Rule Model Creation',
          link: {
              type: 'generated-index',
          },
          items: [
            'Using supBD/Creating Data Object',
            'Using supBD/Designing Rule Model',
          ]
        },
        {
          type: 'category',
          label: 'Model Calling',
          link: {
              type: 'generated-index',
          },
          items: [
            'Using supBD/Using Single Model',
            'Using supBD/Using Multiple Models',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Third-party Algorithm',
      link: {
          type: 'generated-index',
      },
      items: [
        'Using supBD/Developing Third-party Algorithm',
        'Using supBD/Developing Third-party Algorithm Model',
        'Using supBD/Uploading Algorithm Dependency',
      ]
    },
    
  ],
  supLink: [
    
    'Using supLink/System Requirements sl',
    'Using supLink/Installing supLink',
    'Using supLink/Configuring External Kafka',
    {
      type: 'category',
      label: 'Using supLink',
      link: {
          type: 'generated-index',
      },
      items: [
        'Using supLink/System Settings',
        'Using supLink/Managing App Group',
        'Using supLink/Authorizing Mobile User',
        {
          type: 'category',
          label: 'Configuring Base Apps',
          link: {
              type: 'generated-index',
          },
          items: [
            'Using supLink/Flowchart',
            'Using supLink/Alarm',
            'Using supLink/Trend',
            'Using supLink/Monitor',
            'Using supLink/Workflow',
            'Using supLink/Report',
            'Using supLink/Notice',
            'Using supLink/Tag Overview',
            'Using supLink/Object Overview',
          ]
        },
        'Using supLink/Configuring supOS App',
        'Using supLink/Configuring LCDP App',
        'Using supLink/Configuring Custom App',
        'Using supLink/App Statistics',
        'Using supLink/Viewing Messages',
        'Using supLink/General Functions on Mobile',
        
      ]
    },
    'Using supLink/supLink SDK',
    {
      type: 'category',
      label: 'Privacy Policy',
      link: {
          type: 'generated-index',
      },
      items: [
        'Using supLink/supLink Privacy Policy',
        'Using supLink/Application Permission Description',
        'Using supLink/Third-party SDK', 
      ]
    },
  ], 

  threeD: [
    '3D Designer/System Requirements',
    '3D Designer/Installing 3D Designer',
    {
      type: 'category',
      label: 'Using 3D Designer',
      link: {
          type: 'generated-index',
      },
      items: [
        '3D Designer/Designing Particles',
        '3D Designer/Designing Models',
        '3D Designer/Binding Objects',
        '3D Designer/Designing Scenes', 
        '3D Designer/Applying Projects',
      ]
    }, 
  ], 
};

module.exports = sidebars;
