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

    stage('Stop Old Container') {
      steps {
        bat '''
        docker ps -a -q --filter "name=looma" > container.txt
        set /p container=<container.txt
        if NOT "%container%"=="" docker stop looma
        if NOT "%container%"=="" docker rm looma
        '''
      }
    }

    stage('Run Container') {
      steps {
        bat 'docker run -d -p 8080:8080 --name looma looma-app'
      }
    }

  }
}