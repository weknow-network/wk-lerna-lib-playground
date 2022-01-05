All below commands are run from the root directory unless otherwise specified

## Initial setup

```bash
yarn install
```

This will install `lerna` and also install all dependencies for every project in the `packages` directory and place all shared dependencies in a `node_modules` folder in the root.

## Run the project in development mode (including component library)

```bash
yarn dev
```

This will run the `wk-lerna-lib-playground` in `rollup --watch` mode and run the other two applications on ports 3001 and 3002.

## Run the project in development mode (including component library)

```bash
yarn apps-1-and-2:dev
```

This will run the two Next apps but NOT run the `wk-lerna-lib-playground` watcher (faster reload and less memory overhead).

## Storybook

```bash
yarn storybook
```

This will run Storybook for the `wk-lerna-lib-playground` project. This is what you want to use when working on your components. Storybook will be available on port 6006.

## Build Components

```bash
yarn lib:build
```

Will build your component library to the `dist` folder so they are ready to be consumed by the Next apps. This will also prepare the `wk-lerna-lib-playground` library for publishing with the `publish` command.

## Run project in VSCode Debug mode

There is a `launch.json` file which controls the launching options for the app in VSCode. Go into "Run and Debug Mode" (Ctrl+cmd+D) and press the play button for the "Next.js Debug Full Stack" script.
