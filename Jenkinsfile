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
	 stage('DOCKER-PUSH') {
            steps {
                sh '''
                docker push harshhdockerhub/auction-frontend:latest
                docker push harshhdockerhub/auction-backend:latest
                '''
           }
	}
	stage('Deploy with Docker Compose') {
            steps {
                sh '''
                docker compose pull
                docker compose down
                docker compose up -d
                '''
            }
        }		

	}
}
