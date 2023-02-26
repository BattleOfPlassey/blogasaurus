const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Blogasaurus',
  tagline: 'A blog by Palash Shrivastava',
  url: 'https://blog.palashsh.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'battleofplassey', // Usually your GitHub org/user name.
  projectName: 'blogasaurus', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    gtag: {
      trackingID: "G-R5V7R63B0J",
    },
    metadatas: [
      {
        property: 'og:image',
        content: 'https://avatars.githubusercontent.com/u/35087196?v=4',
      },
      {name: 'twitter:card', content: 'https://avatars.githubusercontent.com/u/35087196?v=4'},
      {
        name: 'twitter:image',
        content: 'https://avatars.githubusercontent.com/u/35087196?v=4',
      },
      {name: 'twitter:site', content: '@battleofplassey'},
    ],
    announcementBar: {
      id: "support_us",
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
     content: `If you like what you see, follow me on <a href="https://twitter.com/intent/follow?screen_name=battleofplassey&amp;region=follow_link" class="twitter-follow-button"><div class="icon"></div>@battleofplassey</a>`
      // content: `⭐️  &nbsp; If you like this blog, follow me on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/battleofplassey">Twitter</a>! &nbsp; ⭐️`,
    },
    navbar: {
      hideOnScroll: true,
      // title: 'Blogasaurus',
      logo: {
        alt: 'Blogasaurus Logo',
        src: 'img/blogasaurus_primary.svg',
      },
      items: [
        // {to: '/', label: 'Blog', position: 'left'},

        {
          type: 'doc',
          docId: 'whoami',
          position: 'left',
          label: 'Articles',
        },
        {
          href: 'https://github.com/battleofplassey',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        }
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'My Site Logo',
        src: 'img/blogasaurus_secondary.svg'
      },
      links: [
      
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/battleofplassey',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/battleofplassey',
            }
          ],
        },
        {
          title: 'Navigation',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Articles',
              to: '/docs/whoami',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/battleofplassey',
            },
          ]},
          {
            title: 'other Projects',
            items: [
              {
                label: 'SidToons.com',
                href: 'https://sidtoons.com',
              },
              {
                label: 'vocab.js.org',
                href: 'https://vocab.js.org',
              },
              {
                label: 'TL;DR News',
                href: 'https://tldr.palashsh.me/'
              },
              {
                label : "<hacker's chat>",
                href : 'http://chat.palashsh.me/',
                icon: ''
              }
            ],
          },
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Blogasaurus by Palash Shrivastava`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      apiKey: '3534e2d1d881a10081025373d8f2375c',
      indexName: 'dev-blog',
      appId: '2KDKKFPT4A',
      placeholder: 'Search...'
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
               },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          routeBasePath: '/',
          blogTitle: 'Blogasaurus',
          blogDescription: 'A blog by Palash Shrivastava',
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
          path: 'blog',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Blog Posts',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Blogasaurus by Palash Shrivastava`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
