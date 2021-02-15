$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Account_Preference_Link.feature");
formatter.feature({
  "line": 2,
  "name": "Verify once the user is logged in the footer should display Account preferences link",
  "description": "",
  "id": "verify-once-the-user-is-logged-in-the-footer-should-display-account-preferences-link",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Account_Preference_Link"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify the Preference link",
  "description": "",
  "id": "verify-once-the-user-is-logged-in-the-footer-should-display-account-preferences-link;verify-the-preference-link",
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
  "name": "The user is able to see the account preferences link in the footer",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "verify-once-the-user-is-logged-in-the-footer-should-display-account-preferences-link;verify-the-preference-link;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 11,
      "id": "verify-once-the-user-is-logged-in-the-footer-should-display-account-preferences-link;verify-the-preference-link;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 12,
      "id": "verify-once-the-user-is-logged-in-the-footer-should-display-account-preferences-link;verify-the-preference-link;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 315570000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify the Preference link",
  "description": "",
  "id": "verify-once-the-user-is-logged-in-the-footer-should-display-account-preferences-link;verify-the-preference-link;;2",
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
  "duration": 2076105500,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2231727900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11008315900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 75467800,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 12636411100,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: ((//*[@id\u003d\"auth0-lock-container-1\"]/div/div[2]/form/div/div/div/div/div[2]/div[2]/span/div/div/div/div/div/div/div/div/div/div/div[1]/a)) (tried for 10 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LT-5CD03610PH\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\VENKAT~1.KUN\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:50324}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 34d946a61db7ceece8ebc278485109f6\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.utility.Baseclass.WaitElementVisible(Baseclass.java:200)\r\n\tat stepDefination.Article_Page_Validations.Linkden_login(Article_Page_Validations.java:243)\r\n\tat ✽.Then Click Linkden for logging in(Account_Preference_Link.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Account_Preference_Link.the_user_is_able_to_see_the_account_preferences_link_in_the_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Finished scenario");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1525778900,
  "status": "passed"
});
formatter.uri("All_Article_Validations.feature");
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
  "line": 5,
  "name": "Validate All_Article page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages;validate-all-article-page",
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
  "id": "validate-article-listing-and-individual-pages;validate-all-article-page;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 16,
      "id": "validate-article-listing-and-individual-pages;validate-all-article-page;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 17,
      "id": "validate-article-listing-and-individual-pages;validate-all-article-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7862000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate All_Article page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages;validate-all-article-page;;2",
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
  "duration": 1186649800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2163942800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11020672100,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 75620000,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_View_All_Article_Button()"
});
formatter.result({
  "duration": 10065537000,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Verify_Page_Title_Text()"
});
formatter.result({
  "duration": 78164100,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Video_option_article()"
});
formatter.result({
  "duration": 466118300,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 654272300,
  "status": "passed"
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
  "duration": 4999900,
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
  "duration": 1168904300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2253284600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
