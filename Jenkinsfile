pipeline {
	agent any 
	
	stages {

	stage('PULL') {
		steps{
			git 'https://github.com/HarshCraft/Auction-platform-jenkins.git'
		}
	}
	stage('BUILD') {
             steps {
        	sh '''
		cd frontend
        	npm install
        	npm run build
        	'''
    		}
	}
	stage('BACKEND INSTALL') {
            steps {
                sh '''
                export PATH=$PATH:/usr/bin
                cd backend
                npm install
                '''
            }
        }
	stage('BACKEND TEST') {
	    steps {
        	echo "Test skipped"
    		}
	}
	stage('FRONTEND-DOCKER-BUILD') {
            steps {
                sh '''
                cd frontend
                docker build -t harshhdockerhub/auction-frontend:latest .
                '''
            }
        }

        stage('BACKEND-DOCKER-BUILD') {
            steps {
                sh '''
                cd backend
                docker build -t harshhdockerhub/auction-backend:latest .
                '''
            }
        }


	}
}
