$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Business_Preferences_Saving.feature");
formatter.feature({
  "line": 2,
  "name": "Verify the user is able to save preferences",
  "description": "",
  "id": "verify-the-user-is-able-to-save-preferences",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Business_Preferences_Saving"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Saving Business Prferencess",
  "description": "",
  "id": "verify-the-user-is-able-to-save-preferences;saving-business-prferencess",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on the profile icon at the top right of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Select preferences for \u0027your business\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click save preferences",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify The Mobile page displays an \u0027successfully saved\u0027 message",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "verify-the-user-is-able-to-save-preferences;saving-business-prferencess;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 14,
      "id": "verify-the-user-is-able-to-save-preferences;saving-business-prferencess;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 15,
      "id": "verify-the-user-is-able-to-save-preferences;saving-business-prferencess;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 330421000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Saving Business Prferencess",
  "description": "",
  "id": "verify-the-user-is-able-to-save-preferences;saving-business-prferencess;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Business_Preferences_Saving"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on the profile icon at the top right of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Select preferences for \u0027your business\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click save preferences",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify The Mobile page displays an \u0027successfully saved\u0027 message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 14
    }
  ],
  "location": "NavigateToSite.Open_site_in_browser(String)"
});
formatter.result({
  "duration": 2084152300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2210278700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11007258600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 81290100,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 21581832800,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 2140306700,
  "status": "passed"
});
formatter.match({
  "location": "Business_Preferences_Saving.select_preferences_for_your_business_section()"
});
formatter.result({
  "duration": 317112000,
  "status": "passed"
});
formatter.match({
  "location": "Business_Preferences_Saving.click_save_preferences()"
});
formatter.result({
  "duration": 58992800,
  "status": "passed"
});
formatter.match({
  "location": "Mobile_Automation_Appium.verify_the_Mobile_page_displays_an_successfully_saved_message()"
});
formatter.result({
  "duration": 25121192400,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 836218400,
  "status": "passed"
});
});