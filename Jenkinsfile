pipeline {
  agent any

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t looma-app .'
      }
    }

    stage('Deploy Container') {
      steps {
        sh 'docker stop looma || true'
        sh 'docker rm looma || true'
        sh 'docker run -d -p 8080:8080 --name looma looma-app'
      }
    }

  }
}