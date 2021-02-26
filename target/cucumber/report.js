$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("All_Article_Validations.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Article listing and individual Pages--jira ticket No OD-3353",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@PCC_Article_Validations"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate All_Article page--(TC ID-64)",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-all-article-page--(tc-id-64)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@PCC_All_Article_Page"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click View All Article Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify Page Title Text of All Article page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify Video option in the article",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 13,
      "value": "#Then Verify Filter option in the Articles Page"
    }
  ],
  "line": 15,
  "name": "",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-all-article-page--(tc-id-64);",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 16,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-all-article-page--(tc-id-64);;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 17,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-all-article-page--(tc-id-64);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 653949500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate All_Article page--(TC ID-64)",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-all-article-page--(tc-id-64);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@PCC_All_Article_Page"
    },
    {
      "line": 1,
      "name": "@PCC_Article_Validations"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click View All Article Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify Page Title Text of All Article page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify Video option in the article",
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
  "duration": 3038327500,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 4357551200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21042980000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 160836000,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_View_All_Article_Button()"
});
formatter.result({
  "duration": 10487431300,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Verify_Page_Title_Text()"
});
formatter.result({
  "duration": 249980500,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Video_option_article()"
});
formatter.result({
  "duration": 1606267400,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 1229618900,
  "status": "passed"
});
});