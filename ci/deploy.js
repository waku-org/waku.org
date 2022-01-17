const { promisify } = require('util')
const { publish } = require('gh-pages')
const ghpublish = promisify(publish)

/* fix for "Unhandled promise rejections" */
process.on('unhandledRejection', err => { throw err })

const distDir = 'dist'
const branch = 'gh-pages'
const org = 'vacp2p'
const repo = 'waku.vac.dev'
const repoUrl = `git@github.com:${org}/${repo}.git`

const main = async (url, branch)=> {
  console.log(`Pushing to: ${url}`)
  console.log(`On branch: ${branch}`)
  await ghpublish(distDir, {
    repo: url,
    branch: branch,
    dotfiles: true,
    silent: false
  })
}

main(repoUrl, branch)
