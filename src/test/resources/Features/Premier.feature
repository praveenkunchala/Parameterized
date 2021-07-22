@Premier_code.1
Feature: validate premier features
@PCC_Footer&MenuOptions_Premier
Scenario Outline: Open the browser and navigate to the site
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
#And click view all article button
Then Verify the Followon links - Linkedin, Twitter
And Verify the Footer links - Accessibility, Privacy, Terms and Conditions
#Then Verify RBS Logo
Then Validate Menu Options "Money matters"
Then Validate Menu Options "Spending"
Then Validate Menu Options "At home"
Then Validate Menu Toolkits or Events Options "Life moments"
Then Validate Menu Toolkits or Events Options "Insight"
Then Validate Menu Toolkits or Events Options "Events1"


Examples: Different browser parameter
|browser	|
|chrome		|
@ROI_code
@PCC_Footer&MenuOptions_Roi
Scenario Outline: Open the browser and navigate to the site
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
#And click view all article button
Then Verify the Followon links - Linkedin, Twitter
And Verify the Footer links - Accessibility, Privacy, Terms and Conditions
#Then Verify RBS Logo
Then Validate Menu Options "Business Guidence"
Then Validate Menu Options "Sectors"
Then Validate Menu Toolkits or Events Options "Toolkits"


Examples: Different browser parameter
|browser	|
|chrome		|

