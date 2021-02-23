@Preference_Page
Feature: Verify the preference page contents

@Preference_Categories
Scenario Outline:  Verify all categories are displayed on Your interests tab
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then Click Linkden for logging in
Then Click on the profile icon at the top right of the page
Then Choose your interest tab
Then Verify all categories are displayed on the page
Examples: 
		|browser	|
		|chrome		|