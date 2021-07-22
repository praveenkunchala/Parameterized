$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("testing_URL.feature");
formatter.feature({
  "line": 2,
  "name": "Testing cases related to QA Environment",
  "description": "",
  "id": "testing-cases-related-to-qa-environment",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RBS_Natwest_Lombard"
    }
  ]
});
formatter.scenarioOutline({
  "line": 327,
  "name": "Verify Natwest logo is as per design and when clicked directs the user back to the homepage",
  "description": "",
  "id": "testing-cases-related-to-qa-environment;verify-natwest-logo-is-as-per-design-and-when-clicked-directs-the-user-back-to-the-homepage",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 326,
      "name": "@Clicking_On_Logo.RNL"
    }
  ]
});
formatter.step({
  "line": 328,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 329,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 330,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 331,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 332,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 333,
  "name": "Click on the profile icon at the top right of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 334,
  "name": "Click on Bank logo",
  "keyword": "Then "
});
formatter.step({
  "line": 335,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 336,
  "name": "verify home page title after clicking on logo",
  "keyword": "Then "
});
formatter.examples({
  "line": 337,
  "name": "",
  "description": "",
  "id": "testing-cases-related-to-qa-environment;verify-natwest-logo-is-as-per-design-and-when-clicked-directs-the-user-back-to-the-homepage;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 338,
      "id": "testing-cases-related-to-qa-environment;verify-natwest-logo-is-as-per-design-and-when-clicked-directs-the-user-back-to-the-homepage;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 339,
      "id": "testing-cases-related-to-qa-environment;verify-natwest-logo-is-as-per-design-and-when-clicked-directs-the-user-back-to-the-homepage;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 573156100,
  "status": "passed"
});
formatter.scenario({
  "line": 339,
  "name": "Verify Natwest logo is as per design and when clicked directs the user back to the homepage",
  "description": "",
  "id": "testing-cases-related-to-qa-environment;verify-natwest-logo-is-as-per-design-and-when-clicked-directs-the-user-back-to-the-homepage;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 326,
      "name": "@Clicking_On_Logo.RNL"
    },
    {
      "line": 1,
      "name": "@RBS_Natwest_Lombard"
    }
  ]
});
formatter.step({
  "line": 328,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 329,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 330,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 331,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 332,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 333,
  "name": "Click on the profile icon at the top right of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 334,
  "name": "Click on Bank logo",
  "keyword": "Then "
});
formatter.step({
  "line": 335,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 336,
  "name": "verify home page title after clicking on logo",
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
  "duration": 3722182300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 3008334300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21026014600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 81974400,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 30147586300,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10255737200,
  "status": "passed"
});
formatter.match({
  "location": "Clicking_On_Logo.click_on_bank_logo()"
});
formatter.result({
  "duration": 10154852700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21024267400,
  "status": "passed"
});
formatter.match({
  "location": "Clicking_On_Logo.verify_home_page_title_after_clicking_on_logo()"
});
formatter.result({
  "duration": 4408800,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 957934600,
  "status": "passed"
});
});