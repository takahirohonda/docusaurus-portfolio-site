import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: "Takahiro Honda",
  tagline: "Art is the sublimation of shitty experiences.",
  favicon: "img/icon-circle.png",

  // Set the production url of your site here
  url: "https://takahirohonda.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/tk-blog",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mdh", // Usually your GitHub org/user name.
  projectName: "docusaurus-portfolio-site", // Usually your repo name.

  onBrokenLinks: "warn", // having trouble with gitpage...
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    tailwindPlugin,
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "second-blog",
        routeBasePath: "second-blog",
        path: "./blog2",
        showReadingTime: true,
      },
    ],
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "first-docs",
    //     path: "docs", // path to the first docs folder
    //     routeBasePath: "docs",
    //     sidebarPath: "./sidebars.ts",
    //   },
    // ],
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "second-docs",
    //     path: "docs2", // path to the second docs folder
    //     routeBasePath: "second-docs",
    //     sidebarPath: "./sidebars2.ts",
    //   },
    // ],
  ],

  presets: [
    [
      "./preset-multi-docs.ts",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // for gitpage
          routeBasePath: "/",
        },
        blog: {
          id: "1",
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Taka Honda",
      logo: {
        alt: "My Site Logo",
        src: "img/icon-circle.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "firstDocSidebar",
          position: "left",
          label: "Doc 1",
        },
        // {
        //   type: "docSidebar",
        //   sidebarId: "secondDocSidebar",
        //   position: "left",
        //   label: "Doc 2",
        // },

        { to: "/blog", label: "Blog", position: "left" },
        { to: "/second-blog", label: "Blog2", position: "left" },
        { to: "/100list", label: "100 List", position: "left" },
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "YouTube",
              href: "https://www.youtube.com/@takahondamusic",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/takahirohonda",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TH`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
