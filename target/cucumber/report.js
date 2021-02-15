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
  "line": 20,
  "name": "Verify Individual Article Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages;verify-individual-article-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@PCC_Verify_individual_Article_page"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click View All Article Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify Header Title and Text",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Verify individual article page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Verify fields in the bottom of the page",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "validate-article-listing-and-individual-pages;verify-individual-article-page;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 31,
      "id": "validate-article-listing-and-individual-pages;verify-individual-article-page;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 32,
      "id": "validate-article-listing-and-individual-pages;verify-individual-article-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 622728000,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify Individual Article Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages;verify-individual-article-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PCC_Article_Validations"
    },
    {
      "line": 19,
      "name": "@PCC_Verify_individual_Article_page"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click View All Article Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify Header Title and Text",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Verify individual article page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Verify fields in the bottom of the page",
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
  "duration": 4927457500,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 3273949800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11022548800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 278084700,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_View_All_Article_Button()"
});
formatter.result({
  "duration": 10245634900,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Verify_Header_Title_Text()"
});
formatter.result({
  "duration": 241712100,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Verify_Individual_Article_Page()"
});
formatter.result({
  "duration": 5268473100,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Verify_fields_bottom_page()"
});
formatter.result({
  "duration": 302625900,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 1260685400,
  "status": "passed"
});
});