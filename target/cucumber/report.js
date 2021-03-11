$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Preference_Categories.feature");
formatter.feature({
  "line": 2,
  "name": "Verify all categories are displayed on Your interests tab",
  "description": "",
  "id": "verify-all-categories-are-displayed-on-your-interests-tab",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Preference_Categories"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify all categories",
  "description": "",
  "id": "verify-all-categories-are-displayed-on-your-interests-tab;verify-all-categories",
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
  "name": "Choose your interest tab",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify all categories are displayed on the page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "verify-all-categories-are-displayed-on-your-interests-tab;verify-all-categories;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 13,
      "id": "verify-all-categories-are-displayed-on-your-interests-tab;verify-all-categories;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 14,
      "id": "verify-all-categories-are-displayed-on-your-interests-tab;verify-all-categories;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 308541200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify all categories",
  "description": "",
  "id": "verify-all-categories-are-displayed-on-your-interests-tab;verify-all-categories;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Preference_Categories"
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
  "name": "Choose your interest tab",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify all categories are displayed on the page",
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
  "duration": 2005099300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2042095700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21033226600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 87416500,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 23985058900,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10158312700,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Categories.choose_your_interest_tab()"
});
formatter.result({
  "duration": 97956000,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Categories.verify_all_categories_are_displayed_on_the_page()"
});
formatter.result({
  "duration": 610132800,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 884217400,
  "status": "passed"
});
});