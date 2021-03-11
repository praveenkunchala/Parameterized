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
  "duration": 1193479600,
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
  "duration": 17717590800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 3201912800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21020376400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 331377300,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 24497824000,
  "status": "passed"
});
formatter.match({
  "location": "Account_Preference_Link.the_user_is_able_to_see_the_account_preferences_link_in_the_footer()"
});
formatter.result({
  "duration": 116930400,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 1105339100,
  "status": "passed"
});
formatter.uri("All_Article_Validations.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Article listing and individual Pages--Jira ticket No OD-3353",
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
  "name": "Validate All_Article page-TC-ID-64/JIRA-Ticket-No:-OD-3353",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-all-article-page-tc-id-64/jira-ticket-no:-od-3353",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@PCC_All_Article_Page:-TC-ID-64/JIRA-Ticket-No:-OD-3353"
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
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-all-article-page-tc-id-64/jira-ticket-no:-od-3353;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 16,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-all-article-page-tc-id-64/jira-ticket-no:-od-3353;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 17,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-all-article-page-tc-id-64/jira-ticket-no:-od-3353;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7526400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate All_Article page-TC-ID-64/JIRA-Ticket-No:-OD-3353",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-all-article-page-tc-id-64/jira-ticket-no:-od-3353;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@PCC_All_Article_Page:-TC-ID-64/JIRA-Ticket-No:-OD-3353"
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
  "duration": 1716194800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 6864294000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21025797900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 151198100,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_View_All_Article_Button()"
});
formatter.result({
  "duration": 10505525500,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Verify_Page_Title_Text()"
});
formatter.result({
  "duration": 236773500,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Video_option_article()"
});
formatter.result({
  "duration": 27288029200,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 849900200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Verify Individual Article Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-individual-article-page",
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
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-individual-article-page;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 31,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-individual-article-page;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 32,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-individual-article-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8783500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify Individual Article Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-individual-article-page;;2",
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
  "duration": 1480841500,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2341872400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21024952900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 193463500,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_View_All_Article_Button()"
});
formatter.result({
  "duration": 10463540400,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Verify_Header_Title_Text()"
});
formatter.result({
  "duration": 259020700,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Verify_Individual_Article_Page()"
});
formatter.result({
  "duration": 15769581800,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Verify_fields_bottom_page()"
});
formatter.result({
  "duration": 626217100,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 806418500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Verify Individual Article Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-individual-article-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@PCC_Verify_All_Article_design_and_Pagenation"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Click View All Article Button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Verify PageNation",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Verify articles according to Pagenation",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 43,
      "value": "#Then Verify fields in the bottom of the page"
    }
  ],
  "line": 45,
  "name": "",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-individual-article-page;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 46,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-individual-article-page;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 47,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-individual-article-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15243100,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Verify Individual Article Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-individual-article-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@PCC_Verify_All_Article_design_and_Pagenation"
    },
    {
      "line": 1,
      "name": "@PCC_Article_Validations"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Click View All Article Button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Verify PageNation",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Verify articles according to Pagenation",
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
  "duration": 1313354000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2272520800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21025299900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 184912600,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_View_All_Article_Button()"
});
formatter.result({
  "duration": 10488472200,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.verify_Pagenation()"
});
formatter.result({
  "duration": 23119902800,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Verify_articles_Pagenation()"
});
formatter.result({
  "duration": 13532603100,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 939582000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 50,
  "name": "Verify Individual Article Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-individual-article-page",
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
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-individual-article-page;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 59,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-individual-article-page;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 60,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-individual-article-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18531500,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Verify Individual Article Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-individual-article-page;;2",
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
  "duration": 1517443400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2425010000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21031942500,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 217070400,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_View_All_Article_Button()"
});
formatter.result({
  "duration": 10477222500,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.verify_Pagenation()"
});
formatter.result({
  "duration": 22551061500,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 826633500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "Validate Linkden Login Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-linkden-login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@PCC_Linkden_Login"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "Verify image after logging in",
  "keyword": "Then "
});
formatter.examples({
  "line": 71,
  "name": "",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-linkden-login-page;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 72,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-linkden-login-page;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 73,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-linkden-login-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8186400,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Validate Linkden Login Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-linkden-login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@PCC_Linkden_Login"
    },
    {
      "line": 1,
      "name": "@PCC_Article_Validations"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "Verify image after logging in",
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
  "duration": 2043173200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 9652278300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21029551600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 163146800,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 29602493900,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Image_after_login()"
});
formatter.result({
  "duration": 5649139100,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 886706600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 76,
  "name": "Validate Toolkits Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-toolkits-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@PCC_toolkit"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "verify Toolkit cards in the Page",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "Verify the Toolkit article redirection feature",
  "keyword": "Then "
});
formatter.examples({
  "line": 84,
  "name": "",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-toolkits-page;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 85,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-toolkits-page;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 86,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-toolkits-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16156500,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "Validate Toolkits Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-toolkits-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@PCC_toolkit"
    },
    {
      "line": 1,
      "name": "@PCC_Article_Validations"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "verify Toolkit cards in the Page",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "Verify the Toolkit article redirection feature",
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
  "duration": 1688433300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2647955700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21037661600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 198078400,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Toolkit_cards()"
});
formatter.result({
  "duration": 35307385700,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Toolkit_article()"
});
formatter.result({
  "duration": 10395739200,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 806935600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 89,
  "name": "Verify Subscribe float Button Article Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-subscribe-float-button-article-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 88,
      "name": "@PCC_verify_Subscribe_Article_page"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "Check Preferences saved",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "Click Required Article in the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "get Subscribe button color and Click Subscribe",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "verify if other articles tagged to the same category are subscribed",
  "keyword": "Then "
});
formatter.examples({
  "line": 100,
  "name": "",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-subscribe-float-button-article-page;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 101,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-subscribe-float-button-article-page;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 102,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-subscribe-float-button-article-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13347600,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "Verify Subscribe float Button Article Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-subscribe-float-button-article-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 88,
      "name": "@PCC_verify_Subscribe_Article_page"
    },
    {
      "line": 1,
      "name": "@PCC_Article_Validations"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "Check Preferences saved",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "Click Required Article in the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "get Subscribe button color and Click Subscribe",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "verify if other articles tagged to the same category are subscribed",
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
  "duration": 1635063100,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 3483121600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21021855400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 177745200,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 25789853700,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Check_Preferences_saved()"
});
formatter.result({
  "duration": 8833746200,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_Required_Article()"
});
formatter.result({
  "duration": 11277232700,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_Subscribe_Button()"
});
formatter.result({
  "duration": 10076302300,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Verify_Subscribed()"
});
formatter.result({
  "duration": 12240831900,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 1033287100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 105,
  "name": "Verify Subscribe float Button Article Page without logging in first",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-subscribe-float-button-article-page-without-logging-in-first",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 104,
      "name": "@PCC_verify_Subscribe_Article_page_linkdn_login"
    }
  ]
});
formatter.step({
  "line": 106,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 107,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Click Required Article in the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "Click subscribe button in the Article Page",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "Click Required Article in the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "get Subscribe button color and Click Subscribe",
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "verify if other articles tagged to the same category are subscribed",
  "keyword": "Then "
});
formatter.examples({
  "line": 116,
  "name": "",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-subscribe-float-button-article-page-without-logging-in-first;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 117,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-subscribe-float-button-article-page-without-logging-in-first;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 118,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-subscribe-float-button-article-page-without-logging-in-first;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15438500,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "Verify Subscribe float Button Article Page without logging in first",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;verify-subscribe-float-button-article-page-without-logging-in-first;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PCC_Article_Validations"
    },
    {
      "line": 104,
      "name": "@PCC_verify_Subscribe_Article_page_linkdn_login"
    }
  ]
});
formatter.step({
  "line": 106,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 107,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Click Required Article in the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "Click subscribe button in the Article Page",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "Click Required Article in the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "get Subscribe button color and Click Subscribe",
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "verify if other articles tagged to the same category are subscribed",
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
  "duration": 1763470000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2873380300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21029935300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 193010900,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_Required_Article()"
});
formatter.result({
  "duration": 12531642100,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_Subscribe_Button_Article_Page()"
});
formatter.result({
  "duration": 31571042100,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_Required_Article()"
});
formatter.result({
  "duration": 11770484000,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_Subscribe_Button()"
});
formatter.result({
  "duration": 13250957400,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Verify_Subscribed()"
});
formatter.result({
  "duration": 12296066700,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 996292000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 121,
  "name": "Events Site Validations",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;events-site-validations",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 120,
      "name": "@PCC_Events_Validations"
    }
  ]
});
formatter.step({
  "line": 122,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 125,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "go to Events Page and verify Cards",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "Verify Events Article Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 129,
  "name": "",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;events-site-validations;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 130,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;events-site-validations;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 131,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;events-site-validations;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5368400,
  "status": "passed"
});
formatter.scenario({
  "line": 131,
  "name": "Events Site Validations",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;events-site-validations;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 120,
      "name": "@PCC_Events_Validations"
    },
    {
      "line": 1,
      "name": "@PCC_Article_Validations"
    }
  ]
});
formatter.step({
  "line": 122,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 125,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "go to Events Page and verify Cards",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "Verify Events Article Page",
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
  "duration": 1734593800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 7001867200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21030989300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 209437300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Events_Page_cards()"
});
formatter.result({
  "duration": 3793540700,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Verify_Events_Article_Page()"
});
formatter.result({
  "duration": 21702039500,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 824946400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 133,
      "value": "#@PCC_Footer_Linkden_Login"
    },
    {
      "line": 134,
      "value": "#Scenario Outline: Validate Linkden Login Page"
    },
    {
      "line": 135,
      "value": "#Given Open site in \"\u003cbrowser\u003e\""
    },
    {
      "line": 136,
      "value": "#Then navigate to the site"
    },
    {
      "line": 137,
      "value": "#Then verify the home page title"
    },
    {
      "line": 138,
      "value": "#And Accept the cookies"
    },
    {
      "line": 139,
      "value": "#Then Login from footer section"
    },
    {
      "line": 140,
      "value": "#"
    },
    {
      "line": 141,
      "value": "#Examples:"
    },
    {
      "line": 142,
      "value": "#|browser\t|"
    },
    {
      "line": 143,
      "value": "#|chrome\t\t|"
    }
  ],
  "line": 146,
  "name": "Validate if articles subscribed from preference page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-if-articles-subscribed-from-preference-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 145,
      "name": "@PCC_Validate_Subscribe_Preference"
    }
  ]
});
formatter.step({
  "line": 147,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 148,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "Change a preference to subscribed",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "Verify if the subscribed categorie is changed to subscribe",
  "keyword": "Then "
});
formatter.examples({
  "line": 155,
  "name": "",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-if-articles-subscribed-from-preference-page;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 156,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-if-articles-subscribed-from-preference-page;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 157,
      "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-if-articles-subscribed-from-preference-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14029500,
  "status": "passed"
});
formatter.scenario({
  "line": 157,
  "name": "Validate if articles subscribed from preference page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages--jira-ticket-no-od-3353;validate-if-articles-subscribed-from-preference-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PCC_Article_Validations"
    },
    {
      "line": 145,
      "name": "@PCC_Validate_Subscribe_Preference"
    }
  ]
});
formatter.step({
  "line": 147,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 148,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "Change a preference to subscribed",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "Verify if the subscribed categorie is changed to subscribe",
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
  "duration": 1426860600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2904702400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21021709800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 169500400,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 27464493000,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Change_Preferences()"
});
formatter.result({
  "duration": 13259540200,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Verify_Subscribed_Market_Trends()"
});
formatter.result({
  "duration": 11137021100,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 875235000,
  "status": "passed"
});
formatter.uri("Business_Preferences_Saving.feature");
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
  "duration": 15084800,
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
  "duration": 1481306100,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 9448107800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21031866200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 212223300,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 27088239400,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10321166900,
  "status": "passed"
});
formatter.match({
  "location": "Business_Preferences_Saving.select_preferences_for_your_business_section()"
});
formatter.result({
  "duration": 21302745000,
  "status": "passed"
});
formatter.match({
  "location": "Business_Preferences_Saving.click_save_preferences()"
});
formatter.result({
  "duration": 234462400,
  "status": "passed"
});
formatter.match({
  "location": "Mobile_Automation_Appium.verify_the_Mobile_page_displays_an_successfully_saved_message()"
});
formatter.result({
  "duration": 27029052100,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 867108800,
  "status": "passed"
});
formatter.uri("Clicking_On_Logo.feature");
formatter.feature({
  "line": 2,
  "name": "Verify Natwest logo is as per design and when clicked directs the user back to the homepage",
  "description": "",
  "id": "verify-natwest-logo-is-as-per-design-and-when-clicked-directs-the-user-back-to-the-homepage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Clicking_On_Logo"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify Logo Button",
  "description": "",
  "id": "verify-natwest-logo-is-as-per-design-and-when-clicked-directs-the-user-back-to-the-homepage;verify-logo-button",
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
  "name": "Click on Bank logo",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "verify home page title after clicking on logo",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "verify-natwest-logo-is-as-per-design-and-when-clicked-directs-the-user-back-to-the-homepage;verify-logo-button;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 14,
      "id": "verify-natwest-logo-is-as-per-design-and-when-clicked-directs-the-user-back-to-the-homepage;verify-logo-button;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 15,
      "id": "verify-natwest-logo-is-as-per-design-and-when-clicked-directs-the-user-back-to-the-homepage;verify-logo-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11842100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify Logo Button",
  "description": "",
  "id": "verify-natwest-logo-is-as-per-design-and-when-clicked-directs-the-user-back-to-the-homepage;verify-logo-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Clicking_On_Logo"
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
  "name": "Click on Bank logo",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
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
  "duration": 1496416000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 4846187000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21028069000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 128777400,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 25647152100,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10327456800,
  "status": "passed"
});
formatter.match({
  "location": "Clicking_On_Logo.click_on_bank_logo()"
});
formatter.result({
  "duration": 10481153200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21023857600,
  "status": "passed"
});
formatter.match({
  "location": "Clicking_On_Logo.verify_home_page_title_after_clicking_on_logo()"
});
formatter.result({
  "duration": 7661200,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 834604600,
  "status": "passed"
});
formatter.uri("Dropdowns_Selection.feature");
formatter.feature({
  "line": 2,
  "name": "Verify the user is able to select an option from the drop downs",
  "description": "",
  "id": "verify-the-user-is-able-to-select-an-option-from-the-drop-downs",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Dropdowns_Selection"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify the user is able to select an option",
  "description": "",
  "id": "verify-the-user-is-able-to-select-an-option-from-the-drop-downs;verify-the-user-is-able-to-select-an-option",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Business_location_Saving"
    }
  ]
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
  "name": "Click on the profile icon at the top right of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select \u0027your business\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Select a \u0027business location\u0027 from the drop down menu",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "verify-the-user-is-able-to-select-an-option-from-the-drop-downs;verify-the-user-is-able-to-select-an-option;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 14,
      "id": "verify-the-user-is-able-to-select-an-option-from-the-drop-downs;verify-the-user-is-able-to-select-an-option;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 15,
      "id": "verify-the-user-is-able-to-select-an-option-from-the-drop-downs;verify-the-user-is-able-to-select-an-option;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15808300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify the user is able to select an option",
  "description": "",
  "id": "verify-the-user-is-able-to-select-an-option-from-the-drop-downs;verify-the-user-is-able-to-select-an-option;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Business_location_Saving"
    },
    {
      "line": 1,
      "name": "@Dropdowns_Selection"
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
  "name": "Click on the profile icon at the top right of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select \u0027your business\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Select a \u0027business location\u0027 from the drop down menu",
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
  "duration": 1764950900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2621714000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21023022800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 210523700,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 24886905500,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10356832000,
  "status": "passed"
});
formatter.match({
  "location": "Business_Location_Saving.select_your_business_section()"
});
formatter.result({
  "duration": 264765100,
  "status": "passed"
});
formatter.match({
  "location": "Business_Location_Saving.select_a_business_location_from_the_drop_down_menu()"
});
formatter.result({
  "duration": 7443298900,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 869202300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Verify the user is able to select an option",
  "description": "",
  "id": "verify-the-user-is-able-to-select-an-option-from-the-drop-downs;verify-the-user-is-able-to-select-an-option",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Business_Type_Saving"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click on the profile icon at the top right of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Select \u0027your business\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Select a \u0027business type\u0027 from the drop down menu",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "verify-the-user-is-able-to-select-an-option-from-the-drop-downs;verify-the-user-is-able-to-select-an-option;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 28,
      "id": "verify-the-user-is-able-to-select-an-option-from-the-drop-downs;verify-the-user-is-able-to-select-an-option;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 29,
      "id": "verify-the-user-is-able-to-select-an-option-from-the-drop-downs;verify-the-user-is-able-to-select-an-option;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7410500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify the user is able to select an option",
  "description": "",
  "id": "verify-the-user-is-able-to-select-an-option-from-the-drop-downs;verify-the-user-is-able-to-select-an-option;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Dropdowns_Selection"
    },
    {
      "line": 17,
      "name": "@Business_Type_Saving"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click on the profile icon at the top right of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Select \u0027your business\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Select a \u0027business type\u0027 from the drop down menu",
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
  "duration": 1562902400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 5809836300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21034421200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 154457600,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 26051752100,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10349357600,
  "status": "passed"
});
formatter.match({
  "location": "Business_Location_Saving.select_your_business_section()"
});
formatter.result({
  "duration": 227079500,
  "status": "passed"
});
formatter.match({
  "location": "Business_Type_Saving.select_business_type_from_the_drop_down_menu()"
});
formatter.result({
  "duration": 3281611600,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 874057700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Verify the user is able to select an option",
  "description": "",
  "id": "verify-the-user-is-able-to-select-an-option-from-the-drop-downs;verify-the-user-is-able-to-select-an-option",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@Business_Turn_Over_Saving"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Click on the profile icon at the top right of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Select \u0027your business\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Select a \u0027business turn over\u0027 from the drop down menu",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "verify-the-user-is-able-to-select-an-option-from-the-drop-downs;verify-the-user-is-able-to-select-an-option;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 42,
      "id": "verify-the-user-is-able-to-select-an-option-from-the-drop-downs;verify-the-user-is-able-to-select-an-option;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 43,
      "id": "verify-the-user-is-able-to-select-an-option-from-the-drop-downs;verify-the-user-is-able-to-select-an-option;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13139700,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify the user is able to select an option",
  "description": "",
  "id": "verify-the-user-is-able-to-select-an-option-from-the-drop-downs;verify-the-user-is-able-to-select-an-option;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Dropdowns_Selection"
    },
    {
      "line": 31,
      "name": "@Business_Turn_Over_Saving"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Click on the profile icon at the top right of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Select \u0027your business\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Select a \u0027business turn over\u0027 from the drop down menu",
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
  "duration": 1499273600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2626422300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21049413700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 184760000,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 26918487400,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10329074500,
  "status": "passed"
});
formatter.match({
  "location": "Business_Location_Saving.select_your_business_section()"
});
formatter.result({
  "duration": 237540000,
  "status": "passed"
});
formatter.match({
  "location": "Business_Turn_Over.select_a_business_turn_over_from_the_drop_down_menu()"
});
formatter.result({
  "duration": 3731290600,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 890072700,
  "status": "passed"
});
formatter.uri("Login_Button.feature");
formatter.feature({
  "line": 2,
  "name": "Verify the styling for the Login button",
  "description": "",
  "id": "verify-the-styling-for-the-login-button",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login_Button"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify Login Button",
  "description": "",
  "id": "verify-the-styling-for-the-login-button;verify-login-button",
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
  "name": "login Button is visible with login with linkedin Text",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "verify-the-styling-for-the-login-button;verify-login-button;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 9,
      "id": "verify-the-styling-for-the-login-button;verify-login-button;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 10,
      "id": "verify-the-styling-for-the-login-button;verify-login-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6442300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify Login Button",
  "description": "",
  "id": "verify-the-styling-for-the-login-button;verify-login-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login_Button"
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
  "name": "login Button is visible with login with linkedin Text",
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
  "duration": 1454736400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 4013121900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21030874700,
  "status": "passed"
});
formatter.match({
  "location": "Login_Button.the_login_button_is_visible_with_login_with_linkedin_text()"
});
formatter.result({
  "duration": 10161828400,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 809634700,
  "status": "passed"
});
formatter.uri("Preference_Categories.feature");
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
  "duration": 13143400,
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
  "duration": 1652955300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 5288867600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21042815600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 104290900,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 31052846300,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10319915400,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Categories.choose_your_interest_tab()"
});
formatter.result({
  "duration": 168617200,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Categories.verify_all_categories_are_displayed_on_the_page()"
});
formatter.result({
  "duration": 910539100,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 835658000,
  "status": "passed"
});
formatter.uri("Preference_Page_View.feature");
formatter.feature({
  "line": 2,
  "name": "Verify the user is able to access the preference page by clicking on the profile icon, top right of the screen.",
  "description": "",
  "id": "verify-the-user-is-able-to-access-the-preference-page-by-clicking-on-the-profile-icon,-top-right-of-the-screen.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Preference_Page_View"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Preference page Access After clicking on profile icon",
  "description": "",
  "id": "verify-the-user-is-able-to-access-the-preference-page-by-clicking-on-the-profile-icon,-top-right-of-the-screen.;preference-page-access-after-clicking-on-profile-icon",
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
  "name": "Once logged in the user is able to view the preference page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "verify-the-user-is-able-to-access-the-preference-page-by-clicking-on-the-profile-icon,-top-right-of-the-screen.;preference-page-access-after-clicking-on-profile-icon;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 12,
      "id": "verify-the-user-is-able-to-access-the-preference-page-by-clicking-on-the-profile-icon,-top-right-of-the-screen.;preference-page-access-after-clicking-on-profile-icon;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 13,
      "id": "verify-the-user-is-able-to-access-the-preference-page-by-clicking-on-the-profile-icon,-top-right-of-the-screen.;preference-page-access-after-clicking-on-profile-icon;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12616100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Preference page Access After clicking on profile icon",
  "description": "",
  "id": "verify-the-user-is-able-to-access-the-preference-page-by-clicking-on-the-profile-icon,-top-right-of-the-screen.;preference-page-access-after-clicking-on-profile-icon;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Preference_Page_View"
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
  "name": "Once logged in the user is able to view the preference page",
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
  "duration": 1866963900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 6674530700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21047720000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 222067500,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 30439112900,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10332510900,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.once_logged_in_the_user_is_able_to_view_the_preference_page()"
});
formatter.result({
  "duration": 10152371200,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 865194600,
  "status": "passed"
});
formatter.uri("Select_All_Filter_Pop_Up.feature");
formatter.feature({
  "line": 2,
  "name": "Verify clear all button on Pop Up",
  "description": "",
  "id": "verify-clear-all-button-on-pop-up",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Select_All_Filter_Pop_Up"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verifying Clear All buton",
  "description": "",
  "id": "verify-clear-all-button-on-pop-up;verifying-clear-all-buton",
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
  "name": "Click View All Article Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "On the all articles page click on filter by category",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on all select all button and Verify all the categories are selected for a topic",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "verify-clear-all-button-on-pop-up;verifying-clear-all-buton;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 12,
      "id": "verify-clear-all-button-on-pop-up;verifying-clear-all-buton;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 13,
      "id": "verify-clear-all-button-on-pop-up;verifying-clear-all-buton;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6113000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verifying Clear All buton",
  "description": "",
  "id": "verify-clear-all-button-on-pop-up;verifying-clear-all-buton;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Select_All_Filter_Pop_Up"
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
  "name": "Click View All Article Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "On the all articles page click on filter by category",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on all select all button and Verify all the categories are selected for a topic",
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
  "duration": 1465936000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2373349400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21013167400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 185385200,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_View_All_Article_Button()"
});
formatter.result({
  "duration": 10489150000,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_All_Article_Page.on_the_all_articles_page_click_on_filter_by_category()"
});
formatter.result({
  "duration": 240314900,
  "status": "passed"
});
formatter.match({
  "location": "Select_All_Filter_Pop_Up.click_on_all_select_all_button_and_verify_all_the_categories_are_selected_for_a_topic()"
});
formatter.result({
  "duration": 30868059000,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 792769900,
  "status": "passed"
});
formatter.uri("User_Subscription.feature");
formatter.feature({
  "line": 2,
  "name": "Verify the user is able to subscribe to emails on the my preference page",
  "description": "",
  "id": "verify-the-user-is-able-to-subscribe-to-emails-on-the-my-preference-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@User_Subscription"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "the user is able to subscribe to emails",
  "description": "",
  "id": "verify-the-user-is-able-to-subscribe-to-emails-on-the-my-preference-page;the-user-is-able-to-subscribe-to-emails",
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
  "name": "Click on the your interests tab",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Tick the check box to be updated for the latest emails",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click save preferences",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify The page displays an \u0027successfully saved\u0027 message on Your Interest screen",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "verify-the-user-is-able-to-subscribe-to-emails-on-the-my-preference-page;the-user-is-able-to-subscribe-to-emails;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 15,
      "id": "verify-the-user-is-able-to-subscribe-to-emails-on-the-my-preference-page;the-user-is-able-to-subscribe-to-emails;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 16,
      "id": "verify-the-user-is-able-to-subscribe-to-emails-on-the-my-preference-page;the-user-is-able-to-subscribe-to-emails;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26868300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "the user is able to subscribe to emails",
  "description": "",
  "id": "verify-the-user-is-able-to-subscribe-to-emails-on-the-my-preference-page;the-user-is-able-to-subscribe-to-emails;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@User_Subscription"
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
  "name": "Click on the your interests tab",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Tick the check box to be updated for the latest emails",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click save preferences",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify The page displays an \u0027successfully saved\u0027 message on Your Interest screen",
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
  "duration": 1505999200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 14600362800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21019314800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 225760800,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 26305980500,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10339617300,
  "status": "passed"
});
formatter.match({
  "location": "User_Subscription.click_on_the_your_interests_tab()"
});
formatter.result({
  "duration": 242894800,
  "status": "passed"
});
formatter.match({
  "location": "User_Subscription.tick_the_check_box_to_be_updated_for_the_latest_emails()"
});
formatter.result({
  "duration": 643829200,
  "status": "passed"
});
formatter.match({
  "location": "Business_Preferences_Saving.click_save_preferences()"
});
formatter.result({
  "duration": 188325400,
  "status": "passed"
});
formatter.match({
  "location": "User_Subscription.verify_The_page_displays_an_successfully_saved_message_on_Your_Interest_screen()"
});
formatter.result({
  "duration": 10686368600,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 853134300,
  "status": "passed"
});
formatter.uri("clear_All_Button_All_Article_Page.feature");
formatter.feature({
  "line": 2,
  "name": "Verify clear all button on the all articles page",
  "description": "",
  "id": "verify-clear-all-button-on-the-all-articles-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@clear_All_Button_All_Article_Page"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verifying Clear All buton",
  "description": "",
  "id": "verify-clear-all-button-on-the-all-articles-page;verifying-clear-all-buton",
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
  "name": "Click View All Article Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "On the all articles page click on filter by category",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Select the category by checking on the check box and click apply",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify the page only displays the selected categories",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Now click on clear all button on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify the text appears on the page\u0027 you are viewing all articles\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify all categories are now displayed on the view all articles page",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "verify-clear-all-button-on-the-all-articles-page;verifying-clear-all-buton;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 17,
      "id": "verify-clear-all-button-on-the-all-articles-page;verifying-clear-all-buton;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 18,
      "id": "verify-clear-all-button-on-the-all-articles-page;verifying-clear-all-buton;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12694200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verifying Clear All buton",
  "description": "",
  "id": "verify-clear-all-button-on-the-all-articles-page;verifying-clear-all-buton;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@clear_All_Button_All_Article_Page"
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
  "name": "Click View All Article Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "On the all articles page click on filter by category",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Select the category by checking on the check box and click apply",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify the page only displays the selected categories",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Now click on clear all button on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify the text appears on the page\u0027 you are viewing all articles\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify all categories are now displayed on the view all articles page",
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
  "duration": 1446008500,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2518956100,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21027662800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 151860800,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_View_All_Article_Button()"
});
formatter.result({
  "duration": 10503018200,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_All_Article_Page.on_the_all_articles_page_click_on_filter_by_category()"
});
formatter.result({
  "duration": 234580800,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_All_Article_Page.select_the_category_by_checking_on_the_check_box_and_click_apply()"
});
formatter.result({
  "duration": 10665851100,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_All_Article_Page.verify_the_page_only_displays_the_selected_categories()"
});
formatter.result({
  "duration": 10129841000,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_All_Article_Page.now_click_on_clear_all_button_on_the_page()"
});
formatter.result({
  "duration": 10258868000,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_All_Article_Page.verify_the_text_appears_on_the_page_you_are_viewing_all_articles()"
});
formatter.result({
  "duration": 10137091900,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_All_Article_Page.verify_all_categories_are_now_displayed_on_the_view_all_articles_page()"
});
formatter.result({
  "duration": 108809300,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 830621300,
  "status": "passed"
});
formatter.uri("clear_All_Button_On_Pop_Up.feature");
formatter.feature({
  "line": 2,
  "name": "Verify clear all button on Pop Up",
  "description": "",
  "id": "verify-clear-all-button-on-pop-up",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@clear_All_Button_On_Pop_Up"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verifying Clear All buton",
  "description": "",
  "id": "verify-clear-all-button-on-pop-up;verifying-clear-all-buton",
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
  "name": "Click View All Article Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "On the all articles page click on filter by category",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on select all button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click clear all on the bottom of the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify all the checkboxes are unchecked",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "verify-clear-all-button-on-pop-up;verifying-clear-all-buton;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 14,
      "id": "verify-clear-all-button-on-pop-up;verifying-clear-all-buton;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 15,
      "id": "verify-clear-all-button-on-pop-up;verifying-clear-all-buton;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13222200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verifying Clear All buton",
  "description": "",
  "id": "verify-clear-all-button-on-pop-up;verifying-clear-all-buton;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@clear_All_Button_On_Pop_Up"
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
  "name": "Click View All Article Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "On the all articles page click on filter by category",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on select all button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click clear all on the bottom of the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify all the checkboxes are unchecked",
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
  "duration": 1727499500,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 5794935200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21015763000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 211532700,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_View_All_Article_Button()"
});
formatter.result({
  "duration": 10459207600,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_All_Article_Page.on_the_all_articles_page_click_on_filter_by_category()"
});
formatter.result({
  "duration": 301957400,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_On_Pop_Up.click_on_select_all_button()"
});
formatter.result({
  "duration": 140586900,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_On_Pop_Up.click_clear_all_on_the_bottom_of_the_pop_up()"
});
formatter.result({
  "duration": 10171611600,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_On_Pop_Up.verify_all_the_checkboxes_are_unchecked()"
});
formatter.result({
  "duration": 113794300,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 805304500,
  "status": "passed"
});
formatter.uri("deleting_Profile.feature");
formatter.feature({
  "line": 2,
  "name": "Verify deleting Profile",
  "description": "",
  "id": "verify-deleting-profile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@deleting_Profile"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "check for Profile deletion",
  "description": "",
  "id": "verify-deleting-profile;check-for-profile-deletion",
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
  "name": "click on delete my account button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click confirm",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify The profile icon is hidden \u0027Account preferences\u0027 is removed from footer",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "verify-deleting-profile;check-for-profile-deletion;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 14,
      "id": "verify-deleting-profile;check-for-profile-deletion;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 15,
      "id": "verify-deleting-profile;check-for-profile-deletion;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8135800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "check for Profile deletion",
  "description": "",
  "id": "verify-deleting-profile;check-for-profile-deletion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@deleting_Profile"
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
  "name": "click on delete my account button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click confirm",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify The profile icon is hidden \u0027Account preferences\u0027 is removed from footer",
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
  "duration": 1437807100,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 5284748600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21028387500,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 130930200,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 26743557400,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10324122900,
  "status": "passed"
});
formatter.match({
  "location": "Deleting_Profile.click_on_delete_my_account_button()"
});
formatter.result({
  "duration": 10304095500,
  "status": "passed"
});
formatter.match({
  "location": "Deleting_Profile.click_confirm()"
});
formatter.result({
  "duration": 219035600,
  "status": "passed"
});
formatter.match({
  "location": "Deleting_Profile.verify_the_profile_icon_is_hidden_account_preferences_is_removed_from_footer()"
});
formatter.result({
  "duration": 10022272700,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 929722800,
  "status": "passed"
});
formatter.uri("home_page.feature");
formatter.feature({
  "line": 2,
  "name": "Navigate to the Royal Bank of Scotland site",
  "description": "",
  "id": "navigate-to-the-royal-bank-of-scotland-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@PCC_Home_page"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Open the browser and navigate to the site",
  "description": "",
  "id": "navigate-to-the-royal-bank-of-scotland-site;open-the-browser-and-navigate-to-the-site",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@PCC_Footer\u0026MenuOptions"
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
  "comments": [
    {
      "line": 10,
      "value": "#And click view all article button"
    }
  ],
  "line": 11,
  "name": "Verify the Followon links - Linkedin, Twitter",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify the Footer links - Accessibility, Privacy, Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify RBS Logo",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Validate Menu Options \"Business Guidence\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Validate Menu Options \"Market Trends\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Validate Menu Options \"Sectors\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Validate Menu Toolkits or Events Options \"Toolkits\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Validate Menu Toolkits or Events Options \"Events\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "Different browser parameter",
  "description": "",
  "id": "navigate-to-the-royal-bank-of-scotland-site;open-the-browser-and-navigate-to-the-site;different-browser-parameter",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 22,
      "id": "navigate-to-the-royal-bank-of-scotland-site;open-the-browser-and-navigate-to-the-site;different-browser-parameter;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 23,
      "id": "navigate-to-the-royal-bank-of-scotland-site;open-the-browser-and-navigate-to-the-site;different-browser-parameter;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13300700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Open the browser and navigate to the site",
  "description": "",
  "id": "navigate-to-the-royal-bank-of-scotland-site;open-the-browser-and-navigate-to-the-site;different-browser-parameter;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@PCC_Footer\u0026MenuOptions"
    },
    {
      "line": 1,
      "name": "@PCC_Home_page"
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
  "comments": [
    {
      "line": 10,
      "value": "#And click view all article button"
    }
  ],
  "line": 11,
  "name": "Verify the Followon links - Linkedin, Twitter",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify the Footer links - Accessibility, Privacy, Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify RBS Logo",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Validate Menu Options \"Business Guidence\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Validate Menu Options \"Market Trends\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Validate Menu Options \"Sectors\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Validate Menu Toolkits or Events Options \"Toolkits\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Validate Menu Toolkits or Events Options \"Events\"",
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
  "duration": 1513994700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2300627800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21027481000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 211900000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Verify_the_Followon_links_Linkedin_Twitter()"
});
formatter.result({
  "duration": 45566602600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Verify_the_Footer_links_Accessibility_Privacy_Terms_and_Conditions()"
});
formatter.result({
  "duration": 28328881200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Verify_RBS_Logo()"
});
formatter.result({
  "duration": 3725668300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Guidence",
      "offset": 23
    }
  ],
  "location": "NavigateToSite.Validate_Menu_Options(String)"
});
formatter.result({
  "duration": 33385650800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Market Trends",
      "offset": 23
    }
  ],
  "location": "NavigateToSite.Validate_Menu_Options(String)"
});
formatter.result({
  "duration": 31959977600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sectors",
      "offset": 23
    }
  ],
  "location": "NavigateToSite.Validate_Menu_Options(String)"
});
formatter.result({
  "duration": 51256138200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toolkits",
      "offset": 42
    }
  ],
  "location": "NavigateToSite.Validate_Toolkits_Options(String)"
});
formatter.result({
  "duration": 122689539700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Events",
      "offset": 42
    }
  ],
  "location": "NavigateToSite.Validate_Toolkits_Options(String)"
});
formatter.result({
  "duration": 10651956800,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 1357667700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 24,
      "value": "#|safari\t|"
    },
    {
      "line": 25,
      "value": "#|chrome\t\t|"
    },
    {
      "line": 26,
      "value": "#|firefox\t|"
    }
  ],
  "line": 29,
  "name": "Validate Social Media Posts",
  "description": "",
  "id": "navigate-to-the-royal-bank-of-scotland-site;validate-social-media-posts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@PCC_Social_links"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Navigate to first article",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Verify article share functionality on Facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Check the post on Facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Navigate to first article",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Verify article share functionality on Twitter",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Check the post on Twitter",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Navigate to first article",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Verify article share functionality on Linkden",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Check the post on Linkden",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "navigate-to-the-royal-bank-of-scotland-site;validate-social-media-posts;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 47,
      "id": "navigate-to-the-royal-bank-of-scotland-site;validate-social-media-posts;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 48,
      "id": "navigate-to-the-royal-bank-of-scotland-site;validate-social-media-posts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11012000,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Validate Social Media Posts",
  "description": "",
  "id": "navigate-to-the-royal-bank-of-scotland-site;validate-social-media-posts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@PCC_Social_links"
    },
    {
      "line": 1,
      "name": "@PCC_Home_page"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Navigate to first article",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Verify article share functionality on Facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Check the post on Facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Navigate to first article",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Verify article share functionality on Twitter",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Check the post on Twitter",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Navigate to first article",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Verify article share functionality on Linkden",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Check the post on Linkden",
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
  "duration": 1492492600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 5416844800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21015820900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 217731700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Navigate_Article()"
});
formatter.result({
  "duration": 10680150000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Verify_Facebook_Share()"
});
formatter.result({
  "duration": 21441399900,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: ((//*[@id\u003d\"u_0_0\"])) (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.utility.Baseclass.WaitElementVisible(Baseclass.java:194)\r\n\tat stepDefination.NavigateToSite.Verify_Facebook_Share(NavigateToSite.java:610)\r\n\tat ✽.Then Verify article share functionality on Facebook(home_page.feature:35)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"((//*[@id\u003d\"u_0_0\"]))\"}\n  (Session info: chrome\u003d88.0.4324.190)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LT-5CD03610PH\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\VENKAT~1.KUN\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:54443}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2c70d3716e8efda22a070466cb7b5130\n*** Element info: {Using\u003dxpath, value\u003d((//*[@id\u003d\"u_0_0\"]))}\r\n\tat sun.reflect.GeneratedConstructorAccessor14.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.utility.Baseclass.WaitElementVisible(Baseclass.java:194)\r\n\tat stepDefination.NavigateToSite.Verify_Facebook_Share(NavigateToSite.java:610)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NavigateToSite.Check_post_Facebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigateToSite.Navigate_Article()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigateToSite.Verify_Twitter_Share()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigateToSite.Check_post_Twitter()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigateToSite.Navigate_Article()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigateToSite.Verify_Linkden_Share()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigateToSite.Check_Linkden_post()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Finished scenario");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1193704200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 49,
      "value": "#|safari|"
    },
    {
      "line": 50,
      "value": "#|chrome\t\t|"
    },
    {
      "line": 51,
      "value": "#|firefox\t|"
    }
  ],
  "line": 54,
  "name": "Validate Search Functionality",
  "description": "",
  "id": "navigate-to-the-royal-bank-of-scotland-site;validate-search-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@PCC_Search_Validations"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Validate Search Icon for non loggedin user",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "search any text",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "Validate the Results with Search results tabs results",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Click Article sub field in search results Page and Validate Results \"\u003cSearch_Result_count\u003e\" and \"\u003cSearch_Page_Last\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Click SpotLight sub field in search results Page and Validate Results \"\u003cSpotlight_Number\u003e\" and \"\u003cSearch_Page_Last\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Click Toolkits sub field in search results Page and Validate Results \"\u003cToolkit_Number\u003e\" and \"\u003cSearch_Page_Last\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "Click Events sub field in search results Page and Validate Results \"\u003cEvent_Number\u003e\" and \"\u003cSearch_Page_Last\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 67,
  "name": "",
  "description": "",
  "id": "navigate-to-the-royal-bank-of-scotland-site;validate-search-functionality;",
  "rows": [
    {
      "cells": [
        "browser",
        "Search_Result_count",
        "Search_Page_Last",
        "Spotlight_Number",
        "Toolkit_Number",
        "Event_Number"
      ],
      "line": 68,
      "id": "navigate-to-the-royal-bank-of-scotland-site;validate-search-functionality;;1"
    },
    {
      "cells": [
        "chrome",
        "Search_Result_count_Articles",
        "Search_Page_Last",
        "Search_Result_count_Spotlight",
        "Search_Result_count_toolkits",
        "Search_Result_count_Events"
      ],
      "line": 69,
      "id": "navigate-to-the-royal-bank-of-scotland-site;validate-search-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12212600,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Validate Search Functionality",
  "description": "",
  "id": "navigate-to-the-royal-bank-of-scotland-site;validate-search-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@PCC_Search_Validations"
    },
    {
      "line": 1,
      "name": "@PCC_Home_page"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Validate Search Icon for non loggedin user",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "search any text",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "Validate the Results with Search results tabs results",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Click Article sub field in search results Page and Validate Results \"Search_Result_count_Articles\" and \"Search_Page_Last\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Click SpotLight sub field in search results Page and Validate Results \"Search_Result_count_Spotlight\" and \"Search_Page_Last\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Click Toolkits sub field in search results Page and Validate Results \"Search_Result_count_toolkits\" and \"Search_Page_Last\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "Click Events sub field in search results Page and Validate Results \"Search_Result_count_Events\" and \"Search_Page_Last\"",
  "matchedColumns": [
    2,
    5
  ],
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
  "duration": 1763258100,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 10540971100,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21033860200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 180051200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Validate_Search_Icon()"
});
formatter.result({
  "duration": 10267119700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.search_any_text()"
});
formatter.result({
  "duration": 30515133100,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: ((//*[@id\u003d\"search\"])) (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.utility.Baseclass.WaitElementVisible(Baseclass.java:194)\r\n\tat stepDefination.NavigateToSite.search_any_text(NavigateToSite.java:849)\r\n\tat ✽.Then search any text(home_page.feature:60)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"((//*[@id\u003d\"search\"]))\"}\n  (Session info: chrome\u003d88.0.4324.190)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LT-5CD03610PH\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\VENKAT~1.KUN\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:54513}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 48587fb527c2020edcd2bf133e09afaf\n*** Element info: {Using\u003dxpath, value\u003d((//*[@id\u003d\"search\"]))}\r\n\tat sun.reflect.GeneratedConstructorAccessor14.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.utility.Baseclass.WaitElementVisible(Baseclass.java:194)\r\n\tat stepDefination.NavigateToSite.search_any_text(NavigateToSite.java:849)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NavigateToSite.Validate_Results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Search_Result_count_Articles",
      "offset": 69
    },
    {
      "val": "Search_Page_Last",
      "offset": 104
    }
  ],
  "location": "NavigateToSite.Click_Article_and_Validate(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Search_Result_count_Spotlight",
      "offset": 71
    },
    {
      "val": "Search_Page_Last",
      "offset": 107
    }
  ],
  "location": "NavigateToSite.Click_SpotLight_and_Validate(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Search_Result_count_toolkits",
      "offset": 70
    },
    {
      "val": "Search_Page_Last",
      "offset": 105
    }
  ],
  "location": "NavigateToSite.Click_Toolkits_and_Validate(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Search_Result_count_Events",
      "offset": 68
    },
    {
      "val": "Search_Page_Last",
      "offset": 101
    }
  ],
  "location": "NavigateToSite.Click_Events_and_Validate(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Finished scenario");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 3029529600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 72,
  "name": "Verify Home Page Articles",
  "description": "",
  "id": "navigate-to-the-royal-bank-of-scotland-site;verify-home-page-articles",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@PCC_Home_Page_Articles"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "Open site in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Validate Fields title in the home page \"\u003cField_Title_Article\u003e\" and \"\u003cActual_Field_Title_Article\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "Validate view all button in the Latest Articles field",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "Validate Page nation in Home page \"\u003cLatest_Article\u003e\" and \"\u003cPageNation_Webelement\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "Validate Fields title in the home page \"\u003cField_Title\u003e\" and \"\u003cActual_Field_Title\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "Validate Page nation in Home page \"\u003cSpotLight\u003e\" and \"\u003cPageNation_Spotlight\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "Validate Fields title in the home page \"\u003cDiscover_Title\u003e\" and \"\u003cActual_Discover_Title\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "Validate Page nation in Home page \"\u003cDiscover_our_content_cards\u003e\" and \"\u003cPageNation_Discover\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 85,
  "name": "",
  "description": "",
  "id": "navigate-to-the-royal-bank-of-scotland-site;verify-home-page-articles;",
  "rows": [
    {
      "cells": [
        "browser",
        "Latest_Article",
        "PageNation_Webelement",
        "Field_Title_Article",
        "Actual_Field_Title_Article",
        "Field_Title",
        "Actual_Field_Title",
        "SpotLight",
        "PageNation_Spotlight",
        "Discover_Title",
        "Actual_Discover_Title",
        "Discover_our_content_cards",
        "PageNation_Discover"
      ],
      "line": 86,
      "id": "navigate-to-the-royal-bank-of-scotland-site;verify-home-page-articles;;1"
    },
    {
      "cells": [
        "chrome",
        "Latest_Count_Home",
        "PageNation_count_Home",
        "get_Latest_Article_Title_home",
        "Actual_Latest_Article_Title_home",
        "get_Spotlight_Title_home",
        "Actual_Spotlight_Title_home",
        "Spotlight_count_Home",
        "Spotlight_Pagenation_Count",
        "Discover_Title_Home",
        "Actual_Discover_Title",
        "Discover_our_content",
        "PageNation_Discover"
      ],
      "line": 87,
      "id": "navigate-to-the-royal-bank-of-scotland-site;verify-home-page-articles;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9325400,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Verify Home Page Articles",
  "description": "",
  "id": "navigate-to-the-royal-bank-of-scotland-site;verify-home-page-articles;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@PCC_Home_Page_Articles"
    },
    {
      "line": 1,
      "name": "@PCC_Home_page"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "Open site in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "navigate to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "verify the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "Accept the cookies",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Validate Fields title in the home page \"get_Latest_Article_Title_home\" and \"Actual_Latest_Article_Title_home\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "Validate view all button in the Latest Articles field",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "Validate Page nation in Home page \"Latest_Count_Home\" and \"PageNation_count_Home\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "Validate Fields title in the home page \"get_Spotlight_Title_home\" and \"Actual_Spotlight_Title_home\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "Validate Page nation in Home page \"Spotlight_count_Home\" and \"Spotlight_Pagenation_Count\"",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "Validate Fields title in the home page \"Discover_Title_Home\" and \"Actual_Discover_Title\"",
  "matchedColumns": [
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "Validate Page nation in Home page \"Discover_our_content\" and \"PageNation_Discover\"",
  "matchedColumns": [
    11,
    12
  ],
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
  "duration": 9359927300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 4472451300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21034625500,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 206958500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get_Latest_Article_Title_home",
      "offset": 40
    },
    {
      "val": "Actual_Latest_Article_Title_home",
      "offset": 76
    }
  ],
  "location": "NavigateToSite.Validate_Latest_Articles_title_home_page(String,String)"
});
formatter.result({
  "duration": 75623300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Latest_Articles_View_all()"
});
formatter.result({
  "duration": 20708152200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Latest_Count_Home",
      "offset": 35
    },
    {
      "val": "PageNation_count_Home",
      "offset": 59
    }
  ],
  "location": "NavigateToSite.Validate_Page_nation_in_Home_page(String,String)"
});
formatter.result({
  "duration": 10092351500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get_Spotlight_Title_home",
      "offset": 40
    },
    {
      "val": "Actual_Spotlight_Title_home",
      "offset": 71
    }
  ],
  "location": "NavigateToSite.Validate_Latest_Articles_title_home_page(String,String)"
});
formatter.result({
  "duration": 90970500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spotlight_count_Home",
      "offset": 35
    },
    {
      "val": "Spotlight_Pagenation_Count",
      "offset": 62
    }
  ],
  "location": "NavigateToSite.Validate_Page_nation_in_Home_page(String,String)"
});
formatter.result({
  "duration": 10096668200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discover_Title_Home",
      "offset": 40
    },
    {
      "val": "Actual_Discover_Title",
      "offset": 66
    }
  ],
  "location": "NavigateToSite.Validate_Latest_Articles_title_home_page(String,String)"
});
formatter.result({
  "duration": 83301000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discover_our_content",
      "offset": 35
    },
    {
      "val": "PageNation_Discover",
      "offset": 62
    }
  ],
  "location": "NavigateToSite.Validate_Page_nation_in_Home_page(String,String)"
});
formatter.result({
  "duration": 10092627600,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 840219200,
  "status": "passed"
});
});