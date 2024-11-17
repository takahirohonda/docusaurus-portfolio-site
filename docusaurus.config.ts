import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: "Art is the sublimation of shitty experiences.",
  // tagline: "Art is the sublimation of shitty experiences.",
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
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "my-projects",
        path: "my-projects",
        routeBasePath: "my-projects",
        sidebarPath: "./sidebars2.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "morbid-curiosity",
        path: "morbid-curiosity",
        routeBasePath: "morbid-curiosity",
        sidebarPath: "./sidebars3.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "music-practice",
        path: "music-practice",
        routeBasePath: "music-practice",
        sidebarPath: "./sidebars3.ts",
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          path: "docs",
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
          label: "My Projects",
          to: "my-projects/intro",
          position: "left",
          docsPluginId: "my-projects",
          activeBasePath: "my-projects",
        },
        {
          label: "Morbid Curiosity",
          to: "morbid-curiosity/intro",
          position: "left",
          docsPluginId: "morbid-curiosity",
          activeBasePath: "morbid-curiosity",
        },
        {
          label: "Music Practice",
          to: "music-practice/intro",
          position: "left",
          docsPluginId: "music-practice",
          activeBasePath: "music-practice",
        },
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
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
