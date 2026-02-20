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

    stage('Admin Install') {
      steps {
        bat 'cd Admin && npm install'
      }
    }

    stage('Admin Build') {
      steps {
        bat 'cd Admin && npm run build'
      }
    }

  }
}
