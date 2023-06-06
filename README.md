# Waku.org

## Description

Content of https://waku.org website.

## Practical notes

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

This will automatically install a git hook to format and check spelling at commit time.
You can also trigger the commands manually:

Fix format:

```shell
yarn fix
```

Check spelling and format:

```shell
yarn check
```

## Change Process

1. Create a new working branch from `develop`: `git checkout develop; git checkout -b my-changes`,
2. Proceed with changes, push to `origin` and open a Pull Request against `develop`,
3. Once approved, merge pull request, check changes on [dev.waku.org](https://dev.waku.org),
4. Once ready to promote to live website, rebase master on develop: `git checkout master; git pull master; git rebase origin/develop; git push`.
