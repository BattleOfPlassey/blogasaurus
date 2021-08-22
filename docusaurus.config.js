const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Blogasaurus',
  tagline: 'A blog by Palash Shrivastava',
  url: 'https://blog.palashsh.me/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'battleofplassey', // Usually your GitHub org/user name.
  projectName: 'blogasaurus', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'BLOGASAURUS',
      logo: {
        alt: 'My Site Logo',
        src: 'img/rex-03.svg',
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/battleofplassey',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'rex-03.png'
      // },
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/battleofplassey',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/palash_alphas',
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
              label: 'GitHub',
              href: 'https://github.com/battleofplassey',
            },
          ]},
          {
            title: 'Projects',
            items: [
              {
                label: 'SidToons',
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
                label : "<hacker's chat'>",
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/',
        // },
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
