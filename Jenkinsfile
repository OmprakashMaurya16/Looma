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
        bat 'docker build -t looma-app .'
      }
    }

    stage('Deploy Container') {
      steps {
        bat 'docker stop looma || true'
        bat 'docker rm looma || true'
        bat 'docker run -d -p 8080:8080 --name looma looma-app'
      }
    }

  }
}