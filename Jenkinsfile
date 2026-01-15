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
	}
}
