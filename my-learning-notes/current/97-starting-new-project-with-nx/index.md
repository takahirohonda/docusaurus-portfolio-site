---
title: Start new project with Nx
sidebar_position: 97
---

Starting a new React project has been always confusing. I used to have a repo with all the webpack configs, eslint and jest set up and copy and paste the entire thing. I tried `create-react-app` as well.

Now I am using Nx to create a multiple projects in one repo. In this way, I can create multiple react apps and next apps along with libraries to be shared between these apps.

I first create a repo in GitHub and clone it. Then, I just run these nx commands and I'm ready to go in 5 minutes.

```bash
yarn add nx@latest -D
yarn nx init
yarn add nx add @nx/react
nx g @nx/react:app apps/react-app
# Add lib for react
nx g @nx/react:library libs/my-react-lib
# Or just add lib
nx g lib libs/my-lib
nx add @nx/next
nx g @nx/next:app apps/my-new-app
# Add lib for next
nx add @nx/next:lib
nx g @nx/next:lib libs/my-next-lib
```

Then, I update `.prettierrc` and `project.json` in the react app folder to support `yarn nx dev ...` command instead of using the default `serve` to align with next command. Additional eslint rules as well if necessary.

## In progress...

Being validated...

List of eslint and jest related libs.

```bash
# eslint
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-next eslint-config-prettier eslint-plugin-cypress eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @eslint/js eslint-plugin-prettier eslint-plugin-jest
# jest
yarn add -D @nx/jest @testing-library/react jest jest-environment-jsdom jest-environment-node
```

Delete `eslint.config.js` and add `.eslintrc.json` and `.eslintignore`. Update the import path in the app's `eslint.config.js` to use `.eslintrc.json`.

Add `jest.config.ts` at the root and the project folder.