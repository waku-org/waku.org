#!/usr/bin/env groovy
library 'status-jenkins-lib@v1.8.8'

pipeline {
  agent { label 'linux' }

  options {
    disableRestartFromStage()
    disableConcurrentBuilds()
    /* manage how many builds we keep */
    buildDiscarder(logRotator(
      numToKeepStr: '20',
      daysToKeepStr: '30',
    ))
  }

  environment {
    GIT_COMMITTER_NAME = 'status-im-auto'
    GIT_COMMITTER_EMAIL = 'auto@status.im'
  }

  stages {
    stage('Install') {
      steps {
        sh 'yarn install'
      }
    }

    stage('Build') {
      steps { script {
        /* Issues from waku-org/bounties are fetched. */
        withCredentials([
          string(
            credentialsId: 'waku-org-bounties-access-gh-token',
            variable: 'GITHUB_ACCESS_TOKEN'
          ),
        ]) {
          sh 'yarn build'
        }
        jenkins.genBuildMetaJSON('build/build.json')
      } }
    }

    stage('Publish') {
      steps {
        sshagent(credentials: ['status-im-auto-ssh']) {
          sh """
            ghp-import \
              -b ${deployBranch()} \
              -c ${deployDomain()} \
              -p build
          """
        }
      }
    }
  }

  post {
    cleanup { cleanWs() }
  }
}

def isMasterBranch() { GIT_BRANCH ==~ /.*master/ }
def deployBranch() { isMasterBranch() ? 'deploy-master' : 'deploy-develop' }
def deployDomain() { isMasterBranch() ? 'waku.org' : 'dev.waku.org' }
