$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("All_Article_Validations.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Article listing and individual Pages",
  "description": "",
  "id": "validate-article-listing-and-individual-pages",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@PCC_Article_Validations"
    }
  ]
});
formatter.scenarioOutline({
  "line": 50,
  "name": "Verify Individual Article Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages;verify-individual-article-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@PCC_Verify_All_Article_Pagenation"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Click View All Article Button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Verify PageNation",
  "keyword": "Then "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "validate-article-listing-and-individual-pages;verify-individual-article-page;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 59,
      "id": "validate-article-listing-and-individual-pages;verify-individual-article-page;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 60,
      "id": "validate-article-listing-and-individual-pages;verify-individual-article-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 339680100,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Verify Individual Article Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages;verify-individual-article-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@PCC_Verify_All_Article_Pagenation"
    },
    {
      "line": 1,
      "name": "@PCC_Article_Validations"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Click View All Article Button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Verify PageNation",
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
  "duration": 1918606700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2696561200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11024690100,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 90900500,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_View_All_Article_Button()"
});
formatter.result({
  "duration": 10089647600,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.verify_Pagenation()"
});
formatter.result({
  "duration": 21709044600,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 818775600,
  "status": "passed"
});
});