@Clicking_Articles
Feature: Verify weather user is able to open all articles
Scenario Outline:Verify the aricles
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then click view article link
Then click all Articles in home page
Examples: 
		|browser	|
		|chrome		|
