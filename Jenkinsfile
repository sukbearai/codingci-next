pipeline {
  agent any
  environment {
    JENKINS_GIT_USERNAMEPASSWORD_CREDENTIALS='ba0d8034-23e8-41a1-b3e7-e3d6c295e91d'
    JENKINS_SSH_CREDENTIALS='90e00041-cbb2-49b8-a88a-7096e79f679f'
    REMOTE_HOST='yang@121.42.141.182'
    REMOTE_DIR='/usr/local/nginx/jzypm'
    APP_NAME='tempnext'
  }
  stages {
    stage('检出') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: env.GIT_BUILD_REF]], userRemoteConfigs: [[url: env.GIT_REPO_URL, credentialsId: env.CREDENTIALS_ID]]])
      }
    }
    stage('安装依赖') {
      steps {
        sh 'yarn'
      }
    }
    stage('构建') {
      steps {
        sh 'yarn build'
      }
    }
    stage('发布') {
      steps {
          withCredentials([usernamePassword(credentialsId: env.JENKINS_GIT_USERNAMEPASSWORD_CREDENTIALS, passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
          sh "GIT_CREDENTIALS=$GIT_USERNAME:$GIT_PASSWORD yarn run release"
          }
       }
    }
    stage('部署') {
      steps {
        sshagent(credentials: [env.JENKINS_SSH_CREDENTIALS]) {
          sh "ssh ${env.REMOTE_HOST} rm -rf ${env.REMOTE_DIR}/*"
          sh "rsync -avz --delete --exclude '.git' --exclude 'node_modules' . ${env.REMOTE_HOST}:${env.REMOTE_DIR}"
          sh "ssh ${env.REMOTE_HOST} 'cd ${env.REMOTE_DIR} && yarn && pm2 delete ${env.APP_NAME} || true && yarn run start:pm2'"
        }
      }
    }
  }
}
