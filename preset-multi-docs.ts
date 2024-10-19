// @ts-nocheck
// this doesn't seem to work...
export default function preset(context, opts = {}) {
  return {
    plugins: [
      // Using three docs plugins at the same time!
      // Assigning a unique ID for each without asking the user to do it
      [
        "@docusaurus/plugin-content-docs",
        { ...opts.docs1, id: "docs1", path: "docs" },
      ],
      [
        "@docusaurus/plugin-content-docs",
        { ...opts.docs2, id: "docs2", path: "docs2" },
      ],
    ],
  };
}

// https://docusaurus.io/docs/using-plugins#docusauruspreset-classic
