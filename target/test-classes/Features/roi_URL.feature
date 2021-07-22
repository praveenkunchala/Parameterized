@ROI
Feature: Testing cases related to QA Environment
@PCC_Article_Validations.QA
@PCC_All_Article_Page:-TC-ID-64/JIRA-Ticket-No:-OD-3353 
Scenario Outline: Validate All_Article page-TC-ID-64/JIRA-Ticket-No:-OD-3353
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title	
And Accept the cookies
And Click View All Article Button
Then Verify Page Title Text of All Article page
Then Verify Video option in the article
#Then Verify Filter option in the Articles Page

Examples: 
|browser	|
|chrome		|

@PCC_Verify_individual_Article_page.QA
Scenario Outline: Verify Individual Article Page
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
And Click View All Article Button
Then Verify Header Title and Text 
Then Verify individual article page
Then Verify fields in the bottom of the page

Examples: 
|browser	|
|chrome		|

@PCC_Verify_All_Article_design_and_Pagenation.QA
Scenario Outline: Verify Individual Article Page
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
And Click View All Article Button
Then Verify PageNation
Then Verify articles according to Pagenation
#Then Verify fields in the bottom of the page

Examples: 
|browser	|
|chrome		|

@PCC_Verify_All_Article_Pagenation.QA
Scenario Outline: Verify Individual Article Page
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
And Click View All Article Button
Then Verify PageNation

Examples: 
|browser	|
|chrome		|

@PCC_Linkden_Login.QA
Scenario Outline: Validate Linkden Login Page
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then Click Linkden for logging in
Then Verify image after logging in

Examples: 
|browser	|
|chrome		|

@PCC_toolkit.QA
Scenario Outline: Validate Toolkits Page
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then verify Toolkit cards in the Page
Then Verify the Toolkit article redirection feature

Examples: 
|browser	|
|chrome		|

@PCC_verify_Subscribe_Article_page.QA
Scenario Outline: Verify Subscribe float Button Article Page
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then Click Linkden for logging in
Then Check Preferences saved
Then Click Required Article in the Home page
Then get Subscribe button color and Click Subscribe
Then verify if other articles tagged to the same category are subscribed

Examples: 
|browser	|
|chrome		|

@PCC_verify_Subscribe_Article_page_linkdn_login.QA
Scenario Outline: Verify Subscribe float Button Article Page without logging in first
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then Click Required Article in the Home page
#Then Click subscribe button in the Article Page
#Then Click Required Article in the Home page
Then get Subscribe button color and Click Subscribe
Then verify if other articles tagged to the same category are subscribed

Examples: 
|browser	|
|chrome		|

@PCC_Events_Validations.ROI
Scenario Outline: Events Site Validations
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then go to Events Page and verify Cards
Then Verify Events Article Page

Examples: 
|browser	|
|chrome		|

#@PCC_Footer_Linkden_Login
#Scenario Outline: Validate Linkden Login Page
#Given Open site in "<browser>"  
#Then navigate to the site
#Then verify the home page title
#And Accept the cookies
#Then Login from footer section
#
#Examples: 
#|browser	|
#|chrome		|

@PCC_Validate_Subscribe_Preference.QA
Scenario Outline: Validate if articles subscribed from preference page
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then Click Linkden for logging in
Then Change a preference to subscribed
Then Verify if the subscribed categorie is changed to subscribe

Examples: 
|browser	|
|chrome		|
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


#@PCC_Social_links
#Scenario Outline: Validate Social Media Posts 
#Given Open site in "<browser>"  
#Then navigate to the site
#Then verify the home page title
#And Accept the cookies
#Then Navigate to first article
#Then Verify article share functionality on Facebook
#Then Check the post on Facebook
#Then Navigate to first article
#Then Verify article share functionality on Twitter
#Then Check the post on Twitter
#Then Click Linkden for logging in
#Then Navigate to first article
#Then Verify article share functionality on Linkden
#Then Check the post on Linkden


#Examples: 
#|browser	|
#|chrome		|
#|safari|
#|chrome		|
#|firefox	|

@PCC_Search_Validations.QA
Scenario Outline: Validate Search Functionality 
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then Validate Search Icon for non loggedin user
Then search any text
Then Validate the Results with Search results tabs results
Then Click Article sub field in search results Page and Validate Results "<Search_Result_count>" and "<Search_Page_Last>"
Then Click SpotLight sub field in search results Page and Validate Results "<Spotlight_Number>" and "<Search_Page_Last>"
Then Click Toolkits sub field in search results Page and Validate Results "<Toolkit_Number>" and "<Search_Page_Last>"
Then Click Events sub field in search results Page and Validate Results "<Event_Number>" and "<Search_Page_Last>"

Examples: 
|browser	|Search_Result_count			|Search_Page_Last|Spotlight_Number				|Toolkit_Number					|Event_Number				|
|chrome		|Search_Result_count_Articles	|Search_Page_Last|Search_Result_count_Spotlight	|Search_Result_count_toolkits	|Search_Result_count_Events	|

@PCC_Home_Page_Articles.QA
Scenario Outline: Verify Home Page Articles 
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then Validate Fields title in the home page "<Field_Title_Article>" and "<Actual_Field_Title_Article>"
Then Validate view all button in the Latest Articles field
Then Validate Page nation in Home page "<Latest_Article>" and "<PageNation_Webelement>"
Then Validate Fields title in the home page "<Field_Title>" and "<Actual_Field_Title>"
Then Validate Page nation in Home page "<SpotLight>" and "<PageNation_Spotlight>"
Then Validate Fields title in the home page "<Discover_Title>" and "<Actual_Discover_Title>"
Then Validate Page nation in Home page "<Discover_our_content_cards>" and "<PageNation_Discover>"

Examples: 
|browser	|Latest_Article		|PageNation_Webelement|Field_Title_Article			|Actual_Field_Title_Article			|Field_Title				|Actual_Field_Title			|SpotLight				|PageNation_Spotlight		|Discover_Title			|Actual_Discover_Title	|Discover_our_content_cards	|PageNation_Discover|
|chrome		|Latest_Count_Home	|PageNation_count_Home|get_Latest_Article_Title_home|Actual_Latest_Article_Title_home	|get_Spotlight_Title_home	|Actual_Spotlight_Title_home|Spotlight_count_Home	|Spotlight_Pagenation_Count	|Discover_Title_Home	|Actual_Discover_Title	|Discover_our_content		|PageNation_Discover|
@subscribe.QA
@Subscribe_before_Login.QA
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
@subscribe_After_Loging.ROI
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
@Account_Preference_Link.QA
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
@Business_Preferences_Saving.QA
Scenario Outline:Saving Business Prferencess
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then Click Linkden for logging in
Then Click on the profile icon at the top right of the page
Then Select preferences for 'your business' section
Then Click save preferences
Then Verify The Mobile page displays an 'successfully saved' message
Examples: 
|browser	|
|chrome		|
@clear_All_Button_All_Article_Page.QA
Scenario Outline:Verifying Clear All buton on all article page
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
And Click View All Article Button
Then On the all articles page click on filter by category
Then Select the category by checking on the check box and click apply
Then Verify the page only displays the selected categories
Then Now click on clear all button on the page
Then verify the text appears on the page' you are viewing all articles'
Then Verify all categories are now displayed on the view all articles page

Examples: 
		|browser	|
		|chrome		|		
@clear_All_Button_On_Pop_Up.QA
Scenario Outline:Verifying Clear All button on pop up
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
And Click View All Article Button
Then On the all articles page click on filter by category
Then Click on select all button
Then Click clear all on the bottom of the pop up
Then Verify all the checkboxes are unchecked
Examples: 
		|browser	|
		|chrome		|		
@Clicking_On_Logo.ROI
Scenario Outline:Verify Natwest logo is as per design and when clicked directs the user back to the homepage
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then Click Linkden for logging in
Then Click on the profile icon at the top right of the page
Then Click on Bank logo
Then verify the home page title
Then verify home page title after clicking on logo
Examples: 
		|browser	|
		|chrome		|
@deleting_Profile.QA
Scenario Outline:check for Profile deletion
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then Click Linkden for logging in
Then Click on the profile icon at the top right of the page
Then click on delete my account button
And click confirm
Then verify The profile icon is hidden 'Account preferences' is removed from footer
Examples: 
		|browser	|
		|chrome		|
@Dropdowns_Selection.QA
@Business_location_Saving.QA
Scenario Outline: Verify the user is able to select an option
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then Click Linkden for logging in
Then Click on the profile icon at the top right of the page
Then Select 'your business' section
Then Select a 'business location' from the drop down menu
Examples: 
		|browser	|
		|chrome		|
		
@Business_Type_Saving.QA		
Scenario Outline: Verify the user is able to select an option
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then Click Linkden for logging in
Then Click on the profile icon at the top right of the page
Then Select 'your business' section
Then Select a 'business type' from the drop down menu
Examples: 
		|browser	|
		|chrome		|

@Business_Turn_Over_Saving.QA		
Scenario Outline: Verify the user is able to select an option
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then Click Linkden for logging in
Then Click on the profile icon at the top right of the page
Then Select 'your business' section
Then Select a 'business turn over' from the drop down menu
Examples: 
		|browser	|
		|chrome		|
@Login_Button.QA
Scenario Outline:Verify Login Button
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
Then login Button is visible with login with linkedin Text
Examples: 
		|browser	|
		|chrome		|
@pdf.QA
Scenario Outline:Verify The PDF title and downloading pdf
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then verify PDF title
Examples: 
		|browser	|
		|chrome		|
@Preference_Categories.QA
Scenario Outline: Verify all categories are displayed on Your interests tab
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
@Preference_Page_Validations.QA
Scenario Outline: Verify the preference page contains: First name Last name etc
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then Click Linkden for logging in
Then Click on the profile icon at the top right of the page
Then validate preference Page Objects
Examples: 
		|browser	|
		|chrome		|
@Preference_Page_View.QA
Scenario Outline: Verify the user is able to access the preference page by clicking on the profile icon, top right of the screen.
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then Click Linkden for logging in
Then Click on the profile icon at the top right of the page
Then Once logged in the user is able to view the preference page
Examples: 
		|browser	|
		|chrome		|
@Select_All_Filter_Pop_Up.QA  
Scenario Outline: Verifying Clear All buton on pop up
	Given Open site in "<browser>" 
	Then navigate to the site 
	Then verify the home page title 
	And Accept the cookies 
	And Click View All Article Button 
	Then On the all articles page click on filter by category 
	Then Click on all select all button and Verify all the categories are selected for a topic 
	Examples: 
		|browser	|
		|chrome		|
@Selection_Of_Cookies.QA
Scenario Outline: Verifying Clear All buton 
	Given Open site in "<browser>" 
	Then navigate to the site 
	Then verify the home page title 
	And Accept the cookies 
	Then The options are displayed for cookie selection and can be changed from the cookies option at the footer
Examples: 
		|browser	|
		|chrome		|
				
@Spot_Light_Article.QA
Scenario Outline: Verify the spotlight campaigns appear on the search results page 
	Given Open site in "<browser>" 
	Then navigate to the site 
	Then verify the home page title 
	And Accept the cookies 
	Then Search for a word from the campaign list on the searchbox in the front end 
	Then On the search results page, notice the result being displayed on the spotlight section eg:SPOTLIGHT 
	Then On the spotlight tab, verify the campaign is displayed 
	Then Also clicking on the spotlight result, the page can be verified 
	Examples: 
		|browser	|
		|chrome		|
@User_Subscription.QA
Scenario Outline:the user is able to subscribe to emails on my preference page
Given Open site in "<browser>"  
Then navigate to the site
Then verify the home page title
And Accept the cookies
Then Click Linkden for logging in
Then Click on the profile icon at the top right of the page
Then Click on the your interests tab 
Then Tick the check box to be updated for the latest emails 
Then Click save preferences
Then Verify The page displays an 'successfully saved' message on Your Interest screen
Examples: 
		|browser	|
		|chrome		|
		
		
		
		
		
		