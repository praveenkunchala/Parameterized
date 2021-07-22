@pdf
Feature: verify PDF title and downloading pdf
Scenario Outline:Verify The PDF title and downloading pdf
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then verify PDF title
Examples: 
		|browser	|
		|chrome		|