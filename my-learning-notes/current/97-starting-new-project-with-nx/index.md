---
title: Start new project with Nx
sidebar_position: 97
---

## Starting Nx project for next and react app

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

## 2. Starting Nx project for Next, React and Hardhat

### 2-1. Setting up hardhat and frontend app

It's better to start with hardhat as it will install all the dependencies.

```bash
yarn add hardhat -D
# initialise hardhat in the current directory
npx hardhat init
# move the code and config (including tsconfig) into a temp folder, temp-hardhat

# Add nx lib
yarn add nx@latest -D
yarn nx init
# Node - create project and move code from temp-hardhat
yarn nx add @nx/node
yarn nx g @nx/node:application apps/hardhat

# Next js
yarn nx add @nx/next
yarn nx g @nx/next:app apps/next-auth
# Add react lib - need to configure tailwind and next ui because no option to add automatically with this command
nx g @nx/next:library libs/utils-wagmi
nx g @nx/next:library libs/ui-components
```

### 2-2 Setting up Wagmi, adding Next UI

```bash
yarn add wagmi viem@2.x @tanstack/react-query

# https://nextui.org/docs/guide/installation
yarn @nextui-org/react framer-motion
```

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

Original

```js
const nx = require("@nx/eslint-plugin");

module.exports = [
  ...nx.configs["flat/base"],
  ...nx.configs["flat/typescript"],
  ...nx.configs["flat/javascript"],
  {
    ignores: ["**/dist"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          enforceBuildableLibDependency: true,
          allow: ["^.*/eslint(\\.base)?\\.config\\.[cm]?js$"],
          depConstraints: [
            {
              sourceTag: "*",
              onlyDependOnLibsWithTags: ["*"],
            },
          ],
        },
      ],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    // Override or add rules here
    rules: {},
  },
];
```
