const docusaurusData = require("./config/docusaurus/index.json");

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const getDocId = (doc) => {
  return doc
    .replace(/\.mdx?$/, "")
    .split("/")
    .slice(1)
    .join("/");
};

const getPageRoute = (page) => {
  return page
    .replace(/\.mdx?$/, "")
    .split("/")
    .slice(2)
    .join("/");
};

const getPath = (page) => {
  return page.replace(/\.mdx?$/, "");
};

const formatFooterItem = (item) => {
  if (item.title) {
    return {
      title: item.title,
      items: item.items.map((subItem) => {
        return formatFooterItem(subItem);
      }),
    };
  } else {
    let linkObject = {
      label: item.label,
    };

    if (item.to) {
      linkObject.to = getPath(item.to);
    } else if (item.href) {
      linkObject.href = item.href;
    } else {
      linkObject.to = "/";
    }

    return linkObject;
  }
};

const formatNavbarItem = (item, subnav = false) => {
  let navItem = {
    label: item.label,
    ...item
  };

  if (!subnav) {
    navItem.position = item.position;
  }

  if (item.link === "external" && item.externalLink) {
    navItem.href = item.externalLink;
  }

  if (item.link === "blog") {
    navItem.to = "/";
  }

  if (item.link === "page" && item.pageLink) {
    navItem.to = getPageRoute(item.pageLink);
  }

  if (item.link === "doc" && item.docLink) {
    navItem.type = "doc";
    navItem.docId = getDocId(item.docLink);
  }

  if (item.items) {
    navItem.type = "dropdown";
    navItem.items = item.items.map((subItem) => {
      return formatNavbarItem(subItem, true);
    });
  }

  return navItem;
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: docusaurusData.title || "Blogasaurus",
  tagline: docusaurusData.tagline || "A Blog by Palash Shrivastava",
  url: docusaurusData.url || "https://blog.palashsh.me/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: 'battleofplassey', // Usually your GitHub org/user name.
  projectName: 'blogasaurus',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl: docusaurusData.url + "/admin/#/collections/doc",
        },
        blog: {
          // editUrl: docusaurusData.url + "/admin/#/collections/post",
            showReadingTime: true,
            // Please change this to your repo.
            routeBasePath: '/',
            blogTitle: 'Blogasaurus',
            blogDescription: 'A blog by Palash Shrivastava',
            path: 'blog',
            blogSidebarCount: 'ALL',
            blogSidebarTitle: 'All Blog Posts',
            feedOptions: {
              type: 'all',
              copyright: `Copyright © ${new Date().getFullYear()} Blogasaurus by Palash Shrivastava`,
            }
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-R5V7R63B0J",
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
    
      metadata: [
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
      },
      navbar: {
        title: docusaurusData.title || "",
        hideOnScroll: true,
        logo: {
          alt: docusaurusData?.logo?.alt
            ? docusaurusData?.logo?.alt
            : "My Logo",
          src: docusaurusData?.logo?.src
            ? docusaurusData?.logo?.src
            : "img/logo.svg",
        },
        items: docusaurusData.navbar.map((item) => {
          return formatNavbarItem(item);
        }),
      },
      footer: {
        style: docusaurusData.footer?.style || "dark",
        logo: {
          alt: 'Blogasaurus Logo',
          src: 'img/blogasaurus_secondary.svg'
        },
        links: docusaurusData.footer?.links.map((item) => {
          return formatFooterItem(item);
        }),
        copyright:
          `Copyright © ${new Date().getFullYear()} ` +
          (docusaurusData.footer?.copyright || docusaurusData.title),
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
    }),
};

module.exports = config;
