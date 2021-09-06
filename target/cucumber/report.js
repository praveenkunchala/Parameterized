$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ClickingArticles.feature");
formatter.feature({
  "line": 2,
  "name": "Verify weather user is able to open all articles",
  "description": "",
  "id": "verify-weather-user-is-able-to-open-all-articles",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Clicking_Articles"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify the aricles",
  "description": "",
  "id": "verify-weather-user-is-able-to-open-all-articles;verify-the-aricles",
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
  "name": "click view article link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click all Articles in home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "verify-weather-user-is-able-to-open-all-articles;verify-the-aricles;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 11,
      "id": "verify-weather-user-is-able-to-open-all-articles;verify-the-aricles;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 12,
      "id": "verify-weather-user-is-able-to-open-all-articles;verify-the-aricles;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 456058000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify the aricles",
  "description": "",
  "id": "verify-weather-user-is-able-to-open-all-articles;verify-the-aricles;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Clicking_Articles"
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
  "name": "click view article link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click all Articles in home page",
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
  "duration": 13914161300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2023326300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21016157600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 129017000,
  "status": "passed"
});
formatter.match({
  "location": "Clicking_Articles.click_view_article_link()"
});
formatter.result({
  "duration": 20067505400,
  "status": "passed"
});
formatter.match({
  "location": "Clicking_Articles.click_all_Articles_in_home_page()"
});
formatter.result({
  "duration": 201072877500,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 2199710300,
  "status": "passed"
});
});