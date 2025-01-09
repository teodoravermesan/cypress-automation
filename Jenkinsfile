
pipeline {
	agent any
	stages {

		stage('Run Tests'){
				steps{
					bat 'npx cypress run'
				}
		}
		stage('Publish HTML Report'){
				steps{
					publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: false, reportDir: 'cypress/reports/html', reportFiles: 'report.html', reportName: 'HTML Report', reportTitles: ''])
				}
		}
	}
}
