![superdry](https://user-images.githubusercontent.com/4060187/56918426-fc747600-6a8b-11e9-806d-2da0b49e89e4.png)

[![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://npm.im/superdry) [![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://npm.im/superdry) [![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://npm.im/superdry) [![CircleCI](https://circleci.com/gh/palmerhq/superdry.svg?style=svg)](https://circleci.com/gh/palmerhq/superdry)

Modern problems require modern solutions, yet modern bundlers have not risen up to the challenge. With the venture funded, media hyped rise of boot camp graduates flooding our industry, Clean Coding standards are gradually being eroded by the filthy paws of amateur hour keyboard monkeys. These impostors bang away at their laptops but entropy _increases_ with each tap. They cannot even print Hello World without importing a billion node_modules. They don't even know vim. Their odds of writing good, fast code are no higher than their combined hopes of producing the collected works of Shakespeare. This has to stop.

Many (more lenient) tech leads have resorted to using linting tools to keep this code clean and DRY. This approach is far too timid by half - linting tools can be easily bypassed by tweaking build scripts and so the guarantee of DRYness is weak. It is better to take a compiler/bundler approach to guarantee DRY code so that WET code doesn't even run.

Superdry projects don't merely _practice_ Best Practices, they _live_ it.

## Best Practices

Here are some of the battle tested best practices everybody should adopt.

**Single Responsibility Principles**

**Zero Dependencies**

## Quick Start

```bash
npx superdry init sourceFolder
```

That's it. You don't need to worry about setting up Typescript or Rollup or Jest or other plumbing. Just start editing `init` and go!

Below is a list of commands you will probably find useful:

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for your convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

<img src="https://user-images.githubusercontent.com/4060187/52168303-574d3a00-26f6-11e9-9f3b-71dbec9ebfcb.gif" width="600" />

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

<img src="https://user-images.githubusercontent.com/4060187/52168322-a98e5b00-26f6-11e9-8cf6-222d716b75ef.gif" width="600" />

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
