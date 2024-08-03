# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Adding Tailwind

1. Install dependencies

```bash
yarn add -D tailwindcss postcss autoprefixer
```

2. Create config and update it.

```bash
npx tailwindcss init # or just add tailwind.config.js
```

3. Follow the rest of the steps in this blog: https://medium.com/@bargadyahmed/docusaurus-a-guide-to-seamless-integration-with-tailwind-css-dd202211caac
