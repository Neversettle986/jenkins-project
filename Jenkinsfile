pipeline {
  agent any

  environment {
    // customize if needed
    NODE_ENV = "production"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      when {
        expression { fileExists('package.json') }
      }
      steps {
        echo "Installing dependencies..."
        // sh 'npm ci'         // on Linux/macOS agents
        bat 'npm ci'     // use this on Windows agents
      }
    }

    stage('Build') {
      when {
        anyOf {
          expression { fileExists('package.json') && readFile('package.json').contains('"build"') }
          expression { fileExists('Makefile') }
        }
      }
      steps {
        echo "Running build..."
        // sh 'npm run build'   // adjust for your project
        bat 'npm run build' // windows agent
      }
    }

    stage('Archive') {
      steps {
        archiveArtifacts artifacts: '**/dist/**, **/build/**, **/*.war, **/*.jar', allowEmptyArchive: true
      }
    }

    stage('Clean') {
      steps {
        cleanWs()
      }
    }
  }

  post {
    success { echo 'Build succeeded' }
    failure { echo 'Build failed' }
  }
}
