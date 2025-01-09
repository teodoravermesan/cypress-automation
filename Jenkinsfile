
pipeline {
	agent any
	stages {
             stage('Build'){
				steps{
					bat 'npm install'
				}
		}
		stage('Run Tests'){
				steps{
					bat 'npx cypress run'
				}
		}
		stage('Publish HTML Report'){
				steps{
				publishHTML (target : [allowMissing: false,
 alwaysLinkToLastBuild: true,
 keepAll: true,
 reportDir: 'cypress/reports/html',
 reportFiles: 'index.html',
 reportName: 'My Reports',
 reportTitles: 'The Report'])
				}
		}
	}
}
