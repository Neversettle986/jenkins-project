pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Install') {
      steps {
        // Ensure NODE_ENV is not "production" while installing
        withEnv(["NODE_ENV=development"]) {
          echo "Installing (including devDependencies)..."
          bat 'npm ci'
        }
      }
    }

    stage('Build') {
      steps {
        echo "Running build (using npx if needed)..."
        // prefer npm script; use npx fallback in case directly calling vite fails
        bat '''
          npm run build || npx vite build
        '''
      }
    }
    
    stage('Archive') {
      steps {
        archiveArtifacts artifacts: '**/dist/**, **/build/**', allowEmptyArchive: true
      }
    }

    stage('Clean') {
      steps { cleanWs() }
    }
  }

  post {
    success { echo 'Build succeeded' }
    failure { echo 'Build failed' }
  }
}
