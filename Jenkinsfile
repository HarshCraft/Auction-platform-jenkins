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
		cd backend
        	npm install
        	npm run build
        	'''
    		}
	}
	}
}
