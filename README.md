- [Description](#description)
- [How to Run Locally](#how-to-run-locally)
- [Continuous Integration](#continuous-integration)
- [Format \& spelling checks](#format--spelling-checks)
- [Configuration](#configuration)
- [Customization](#customization)

## Description

This repository contains the content of your documentation website.

## How to Run Locally

- Please keep this repo clean and for markdown content ONLY
- In case you have any issue with rendering, how website looks, etc,
  please file an issue on [logos website builder](https://github.com/acid-info/logos-site-builder).

## Continuous Integration

- `master` branch is deployed to https://waku.org by [CI](https://ci.infra.status.im/job/website/job/waku.org/).
- `develop` branch is deployed to https:/dev.waku.org by [CI](https://ci.infra.status.im/job/website/job/dev.waku.org/).

## Format & spelling checks

Format and spelling checks are done via npm commands.

Installation:

```shell
yarn
```

## Configuration
Edit the `docusaurus.config.js` file in the repository's root directory, and update the value of the `businessUnit` field in presets section; below is a list of valid values:
- Logos
- Codex
- Waku

Example:
```js
presets: [
  [
    '@acid-info/logos-docusaurus-preset',
    {
      businessUnit: 'Codex',
    },
  ],
],
```

This is probably enough in most cases, as the Logos plugins will fill in other configurations related to the specified business unit. If you find any error in the information coming from Logos Plugins, please head over to [Logos Docusaurus Plugins](https://github.com/acid-info/logos-docusaurus-plugins) and create an issue.

## Customization

You can find the instructions on adding more documentation sections, localization, and versioning on the [Docusaurus](https://docusaurus.io/docs) website.

> Note that theme customization is limited; for further instructions on customizing your theme, head over to [Logos Docusaurus Theme](https://github.com/acid-info/logos-docusaurus-plugins/tree/main/packages/logos-docusaurus-theme/). 
