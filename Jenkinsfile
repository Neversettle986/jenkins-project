pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        // Checkout your repo
        git branch: 'main', url: 'https://github.com/Neversettle986/jenkins-project.git'
      }
    }

    stage('Install dependencies') {
      steps {
        // Install node modules
        sh 'npm ci'
      }
    }

    stage('Build') {
      steps {
        // Run your React build (for Vite or CRA)
        sh 'npm run build'
      }
    }

    stage('Archive build output') {
      steps {
        // Adjust folder depending on your setup:
        //   - For Vite → dist/
        //   - For Create React App → build/
        archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
      }
    }
  }

  post {
    success {
      // This adds a "Build Artifacts" link in Jenkins UI
      echo "✅ Build complete. Check the 'Artifacts' section for your React build."
    }
  }
}
