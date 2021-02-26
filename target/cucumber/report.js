$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Account_Preference_Link.feature");
formatter.feature({
  "line": 2,
  "name": "Verify once the user is logged in the footer should display Account preferences link jira ticket No OD-3353",
  "description": "",
  "id": "verify-once-the-user-is-logged-in-the-footer-should-display-account-preferences-link-jira-ticket-no-od-3353",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Account_Preference_Link"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Feature: JIRA LINK (https://progressivecontent.atlassian.net/browse/OD-3353)"
    }
  ],
  "line": 4,
  "name": "Verify the Preference link(TC ID-64)",
  "description": "",
  "id": "verify-once-the-user-is-logged-in-the-footer-should-display-account-preferences-link-jira-ticket-no-od-3353;verify-the-preference-link(tc-id-64)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "The user is able to see the account preferences link in the footer",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "verify-once-the-user-is-logged-in-the-footer-should-display-account-preferences-link-jira-ticket-no-od-3353;verify-the-preference-link(tc-id-64);",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 12,
      "id": "verify-once-the-user-is-logged-in-the-footer-should-display-account-preferences-link-jira-ticket-no-od-3353;verify-the-preference-link(tc-id-64);;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 13,
      "id": "verify-once-the-user-is-logged-in-the-footer-should-display-account-preferences-link-jira-ticket-no-od-3353;verify-the-preference-link(tc-id-64);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 609253200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify the Preference link(TC ID-64)",
  "description": "",
  "id": "verify-once-the-user-is-logged-in-the-footer-should-display-account-preferences-link-jira-ticket-no-od-3353;verify-the-preference-link(tc-id-64);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Account_Preference_Link"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "The user is able to see the account preferences link in the footer",
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
  "duration": 3610948100,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 6662336300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21045369000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 173579400,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
