pipeline {
  agent any

  tools {
    nodejs 'node'
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Backend Install') {
      steps {
        sh 'cd Backend && npm install'
      }
    }

    stage('Frontend Install') {
      steps {
        sh 'cd Frontend && npm install'
      }
    }

    stage('Frontend Build') {
      steps {
        sh 'cd Frontend && npm run build'
      }
    }

    stage('Start Server') {
      steps {
        sh 'cd Backend && node server/index.js &'
      }
    }
  }
}