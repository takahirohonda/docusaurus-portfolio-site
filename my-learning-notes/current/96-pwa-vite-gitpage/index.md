---
title: Deploying PWA to GitPage with React and Vite
sidebar_position: 97
---

There are a few things we need to do if you want to get a react app working in the git page as PWA if the base path is not the root.

1. `BrowserRouter` needs a basename. Use `import.meta.env.MODE` to add basename when it's build with `vite build` during deployment.

```ts
 <BrowserRouter
      basename={
        import.meta.env.MODE === 'development' ? '/' : '/voice-recorder'
      }
    >
```

2. Make sure too add base property in `vite.config.ts`. We can use the `GIT_PAGE_DEPLOY` env variable to add the base path during deployment.

```ts
const isGitPageDeploy = Boolean(process.env.GIT_PAGE_DEPLOY)

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/react-voice-recorder',
  base: isGitPageDeploy ? '/voice-recorder' : '',
```

3. Configure `VitePWA` plugin.

```ts
import { VitePWA } from 'vite-plugin-pwa'
import manifestObj from './public/manifest.json'

...
 plugins: [
    ...,
    VitePWA({
      registerType: 'autoUpdate',
      manifest: manifestObj as any,
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
```

4. `manifest.json` in the public folder needs to have the `start_url`. Shouldn't include the index.html in the path.

✅ `"start_url": "/voice-recorder",`

❌ `"start_url": "/voice-recorder/index.html",`
