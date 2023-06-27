import { Product, Resources, Company, Solutions } from "src/pages";

export const routes = [
  {
    name: "Product",
    path: "/product",
    element: <Product />,
  },
  {
    name: "Solutions",
    path: "/Solutions",
    element: <Solutions />,
  },
  {
    name: "Resources",
    path: "/resources",
    element: <Resources />,
  },
  {
    name: "Company",
    path: "/company",
    element: <Company />,
  },


  // Product
  {
    name: "Overview",
    path: "/product-overview",
  },
  {
    name: "UltimateGPT",
    path: "/ultimategpt-chatgpt-for-customer-service",
  },

];

export const routes_o = [
  {
    name: 'Product',
    main: {
      categories: [
        {
          name: 'Overview',
          link: ''
        },
        {
          name: 'UltimateGPT',
          link: ''
        },
        {
          name: 'Chat Automation',
          link: ''
        },
        {
          name: 'Ticket Automation',
          link: ''
        },
        {
          name: 'Our AI',
          link: ''
        },
        {
          name: 'Why Ultimate',
          link: ''
        },
      ],
      integrations: [
        {
          name: 'Zendesk',
          link: ''
        },
        {
          name: 'Salesforce',
          link: ''
        },
        {
          name: 'LiveChat',
          link: ''
        },
        {
          name: 'Freshworks',
          link: ''
        },
        {
          name: 'Intercom',
          link: ''
        },
        {
          name: 'Sunshine Conversations',
          link: ''
        },
        {
          name: 'Sunshine Conversations',
          link: ''
        },
      ]
    }
  },
  {
    name: 'Solution'
  },
  {
    name: 'Resource'
  },
  {
    name: 'Company'
  },
]

export default routes;