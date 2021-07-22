@subscribe
Feature: Verify the Subscribe button 
@Subscribe_before_Login
Scenario Outline: verify functionality of linkdin without login with linkdin from article page
    Given Open site in "<browser>" 
	Then navigate to the site 
	Then verify the home page title 
	And  Accept the cookies 
	Then Click Required Article in the Home page
	Then validate the linkdin button
	Examples: 
		|browser	|
		|chrome		|
@subscribe_After_Loging
Scenario Outline: verify functionality of login with linkdin from article page
    Given Open site in "<browser>" 
	Then navigate to the site 
	Then verify the home page title 
	And  Accept the cookies 
	Then Click Required Article in the Home page
	Then validate the linkdin button
	Then Click Linkden for logging in from the article
	Then Click on Bank logo
	Then Click Required Article in the Home page
	Then validate the linkdin button after login
	Examples: 
		|browser	|
		|chrome		|
@premier
@premier_Subscribe_before_Login
Scenario Outline: verify functionality of linkdin without login with linkdin from article page
    Given Open site in "<browser>" 
	Then navigate to the site 
	Then verify the home page title 
	And  Accept the cookies 
	Then Click Required Article in the Home page
	Then validate the linkdin button
	Examples: 
		|browser	|
		|chrome		|

@Premier_Subscribe
Scenario Outline: verify functionality of login with linkdin from article page
 Given Open site in "<browser>" 
	Then navigate to the site 
	Then verify the home page title 
	And  Accept the cookies 
	Then Click Required Article in the Home page
	Then validate the linkdin button
	Then Click Linkden for logging in from the article
	Then Click on Bank logo
	Then Click Required Article in the Home page
	Then validate the linkdin button after login
	Examples: 
		|browser	|
		|chrome		|