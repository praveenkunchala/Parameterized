@Account_Preference_Link
Feature: Verify once the user is logged in the footer should display Account preferences link jira ticket No OD-3353
#Feature: JIRA LINK (https://progressivecontent.atlassian.net/browse/OD-3353)
Scenario Outline: Verify the Preference link(TC ID-64)
	Given Open site in "<browser>" 
	Then navigate to the site 
	Then verify the home page title 
	And Accept the cookies
	Then Click Linkden for logging in 
	Then The user is able to see the account preferences link in the footer
	Examples: 
		|browser	|
		|chrome		|
		
		
