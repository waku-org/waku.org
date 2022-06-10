# Description

Website to Waku protocol developed by [Vac Team](https://vac.dev/).

# Development

Install the dependencies:
```bash
yarn install
```
Start the development server:
```bash
yarn run devel
```
Go to [http://localhost:4000](http://localhost:4000) to view the page.

# Continuous Integration

- `develop` branch is pushed to [dev.waku.org](https://dev.waku.org) via [this CI Job](https://ci.status.im/job/website/job/dev.waku.org/)
- `master` branch is pushed to [waku.org](https://waku.org) via [this CI Job](https://ci.status.im/job/website/job/waku.org/)

# Change Process

1. Create a new working branch from `develop`: `git checkout develop; git checkout -b my-changes`,
2. Proceed with changes, push to `origin` and open a Pull Request against `develop`,
3. Once approved, merge pull request, check changes on [dev.waku.org](https://dev.waku.org),
4. Once ready to promote to live website, rebase master on develop: `git checkout master; git pull master; git rebase origin/develop; git push`.
