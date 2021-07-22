@Selection_Of_Cookies
Feature: Verify clear all button on Pop Up 
Scenario Outline: Verifying Clear All buton 
	Given Open site in "<browser>" 
	Then navigate to the site 
	Then verify the home page title 
	And Accept the cookies 
	Then The options are displayed for cookie selection and can be changed from the cookies option at the footer
Examples: 
		|browser	|
		|chrome		|
		