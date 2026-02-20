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
        bat 'cd Backend && npm install'
      }
    }

    stage('Frontend Install') {
      steps {
        bat 'cd Frontend && npm install'
      }
    }

    stage('Frontend Build') {
      steps {
        bat 'cd Frontend && npm run build'
      }
    }

    stage('Start Server') {
      steps {
        bat 'cd Backend && node server/index.js &'
      }
    }
  }
}
