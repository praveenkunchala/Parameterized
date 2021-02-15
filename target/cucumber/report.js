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
  "duration": 310191500,
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
  "duration": 2372941600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2316847000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11007817000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 77776000,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 21526349400,
  "status": "passed"
});
formatter.match({
  "location": "Account_Preference_Link.the_user_is_able_to_see_the_account_preferences_link_in_the_footer()"
});
formatter.result({
  "duration": 56977200,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 869029600,
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
  "duration": 6335500,
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
  "duration": 1145215900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 4315438800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11010426800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 66619600,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 21439195300,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 2148812500,
  "status": "passed"
});
formatter.match({
  "location": "Business_Preferences_Saving.select_preferences_for_your_business_section()"
});
formatter.result({
  "duration": 362089000,
  "status": "passed"
});
formatter.match({
  "location": "Business_Preferences_Saving.click_save_preferences()"
});
formatter.result({
  "duration": 63348200,
  "status": "passed"
});
formatter.match({
  "location": "Mobile_Automation_Appium.verify_the_Mobile_page_displays_an_successfully_saved_message()"
});
formatter.result({
  "duration": 25025290300,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 701699700,
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
  "duration": 4628900,
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
  "duration": 1169226900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2264725100,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11009239900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 66762200,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 20899240700,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 2137861200,
  "status": "passed"
});
formatter.match({
  "location": "Clicking_On_Logo.click_on_bank_logo()"
});
formatter.result({
  "duration": 10199578000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11015064300,
  "status": "passed"
});
formatter.match({
  "location": "Clicking_On_Logo.verify_home_page_title_after_clicking_on_logo()"
});
formatter.result({
  "duration": 5275400,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 675364200,
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
  "duration": 3792400,
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
  "duration": 1198586100,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2131527500,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11017829000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 76445400,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 21586016600,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 2150409800,
  "status": "passed"
});
formatter.match({
  "location": "Business_Location_Saving.select_your_business_section()"
});
formatter.result({
  "duration": 81887700,
  "status": "passed"
});
formatter.match({
  "location": "Business_Location_Saving.select_a_business_location_from_the_drop_down_menu()"
});
formatter.result({
  "duration": 1806444700,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 686538400,
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
  "duration": 12010200,
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
  "duration": 1134748400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2284035200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11004774900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 54980100,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 21008724200,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 2204533800,
  "status": "passed"
});
formatter.match({
  "location": "Business_Location_Saving.select_your_business_section()"
});
formatter.result({
  "duration": 85809100,
  "status": "passed"
});
formatter.match({
  "location": "Business_Type_Saving.select_business_type_from_the_drop_down_menu()"
});
formatter.result({
  "duration": 1001898100,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 710548600,
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
  "duration": 2922700,
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
  "duration": 1176835900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 13689173000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11016555600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 76027500,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 20803988600,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 2134182200,
  "status": "passed"
});
formatter.match({
  "location": "Business_Location_Saving.select_your_business_section()"
});
formatter.result({
  "duration": 84252300,
  "status": "passed"
});
formatter.match({
  "location": "Business_Turn_Over.select_a_business_turn_over_from_the_drop_down_menu()"
});
formatter.result({
  "duration": 1051571800,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 675384800,
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
  "duration": 5390500,
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
  "duration": 1123839000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2426735600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11007857800,
  "status": "passed"
});
formatter.match({
  "location": "Login_Button.the_login_button_is_visible_with_login_with_linkedin_text()"
});
formatter.result({
  "duration": 10042452500,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 681440000,
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
  "duration": 2345300,
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
  "duration": 1159348200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2211441300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11008637100,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 54155000,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 21043603500,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 2145193400,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Categories.choose_your_interest_tab()"
});
formatter.result({
  "duration": 68221300,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Categories.verify_all_categories_are_displayed_on_the_page()"
});
formatter.result({
  "duration": 768331600,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 687931200,
  "status": "passed"
});
formatter.uri("Preference_Page.feature");
formatter.feature({
  "line": 2,
  "name": "Verify the preference page contents",
  "description": "",
  "id": "verify-the-preference-page-contents",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Preference_Page"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify all categories are displayed on Your interests tab",
  "description": "",
  "id": "verify-the-preference-page-contents;verify-all-categories-are-displayed-on-your-interests-tab",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Preference_Categories"
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
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on the profile icon at the top right of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Choose your interest tab",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify all categories are displayed on the page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "verify-the-preference-page-contents;verify-all-categories-are-displayed-on-your-interests-tab;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 15,
      "id": "verify-the-preference-page-contents;verify-all-categories-are-displayed-on-your-interests-tab;;1"
    },
    {
      "cells": [
        "edge"
      ],
      "line": 16,
      "id": "verify-the-preference-page-contents;verify-all-categories-are-displayed-on-your-interests-tab;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11091000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify all categories are displayed on Your interests tab",
  "description": "",
  "id": "verify-the-preference-page-contents;verify-all-categories-are-displayed-on-your-interests-tab;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Preference_Categories"
    },
    {
      "line": 1,
      "name": "@Preference_Page"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open site in \"edge\"",
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
  "name": "Click Linkden for logging in",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on the profile icon at the top right of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Choose your interest tab",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify all categories are displayed on the page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edge",
      "offset": 14
    }
  ],
  "location": "NavigateToSite.Open_site_in_browser(String)"
});
formatter.result({
  "duration": 182700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2117700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11000045000,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LT-5CD03610PH\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat com.utility.Baseclass.getPageTitle(Baseclass.java:220)\r\n\tat stepDefination.NavigateToSite.verify_the_home_page_title(NavigateToSite.java:106)\r\n\tat ✽.Then verify the home page title(Preference_Page.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
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
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Preference_Categories.choose_your_interest_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Preference_Categories.verify_all_categories_are_displayed_on_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 1983000,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LT-5CD03610PH\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.utility.Baseclass.tearDown(Baseclass.java:329)\r\n\tat stepDefination.Hooks.afterScenario(Hooks.java:24)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
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
  "duration": 2733000,
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
  "duration": 1177017600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2324752700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11016106500,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 78867200,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 20807364100,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 2164451400,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.once_logged_in_the_user_is_able_to_view_the_preference_page()"
});
formatter.result({
  "duration": 10044089900,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 672051700,
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
  "duration": 3948000,
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
  "duration": 1165968200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 4420903300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11017097200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 67843300,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_View_All_Article_Button()"
});
formatter.result({
  "duration": 10085972700,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_All_Article_Page.on_the_all_articles_page_click_on_filter_by_category()"
});
formatter.result({
  "duration": 141158600,
  "status": "passed"
});
formatter.match({
  "location": "Select_All_Filter_Pop_Up.click_on_all_select_all_button_and_verify_all_the_categories_are_selected_for_a_topic()"
});
formatter.result({
  "duration": 30356618800,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 674427700,
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
  "duration": 4860000,
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
  "duration": 1188147700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2313160400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11009506200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 59057800,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 21490744400,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 2159106800,
  "status": "passed"
});
formatter.match({
  "location": "User_Subscription.click_on_the_your_interests_tab()"
});
formatter.result({
  "duration": 88845600,
  "status": "passed"
});
formatter.match({
  "location": "User_Subscription.tick_the_check_box_to_be_updated_for_the_latest_emails()"
});
formatter.result({
  "duration": 505465600,
  "status": "passed"
});
formatter.match({
  "location": "Business_Preferences_Saving.click_save_preferences()"
});
formatter.result({
  "duration": 78543600,
  "status": "passed"
});
formatter.match({
  "location": "User_Subscription.verify_The_page_displays_an_successfully_saved_message_on_Your_Interest_screen()"
});
formatter.result({
  "duration": 11191824400,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 675544700,
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
  "duration": 3597600,
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
  "duration": 1172039900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2279198200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11016986400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 76162300,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_View_All_Article_Button()"
});
formatter.result({
  "duration": 10090517800,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_All_Article_Page.on_the_all_articles_page_click_on_filter_by_category()"
});
formatter.result({
  "duration": 143473600,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_All_Article_Page.select_the_category_by_checking_on_the_check_box_and_click_apply()"
});
formatter.result({
  "duration": 10270162900,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_All_Article_Page.verify_the_page_only_displays_the_selected_categories()"
});
formatter.result({
  "duration": 10030808900,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_All_Article_Page.now_click_on_clear_all_button_on_the_page()"
});
formatter.result({
  "duration": 10140489100,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_All_Article_Page.verify_the_text_appears_on_the_page_you_are_viewing_all_articles()"
});
formatter.result({
  "duration": 10043390100,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_All_Article_Page.verify_all_categories_are_now_displayed_on_the_view_all_articles_page()"
});
formatter.result({
  "duration": 30584200,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 684743600,
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
  "duration": 3471800,
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
  "duration": 1185451800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2211697400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11016667400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 86201400,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Click_View_All_Article_Button()"
});
formatter.result({
  "duration": 10069840000,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_All_Article_Page.on_the_all_articles_page_click_on_filter_by_category()"
});
formatter.result({
  "duration": 131347300,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_On_Pop_Up.click_on_select_all_button()"
});
formatter.result({
  "duration": 71221900,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_On_Pop_Up.click_clear_all_on_the_bottom_of_the_pop_up()"
});
formatter.result({
  "duration": 10094908500,
  "status": "passed"
});
formatter.match({
  "location": "Clear_All_Button_On_Pop_Up.verify_all_the_checkboxes_are_unchecked()"
});
formatter.result({
  "duration": 46392200,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 660877400,
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
  "duration": 3557900,
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
  "duration": 1133506500,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2255413100,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11016028300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 75952800,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 21182585300,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 2140312500,
  "status": "passed"
});
formatter.match({
  "location": "Deleting_Profile.click_on_delete_my_account_button()"
});
formatter.result({
  "duration": 10106184100,
  "status": "passed"
});
formatter.match({
  "location": "Deleting_Profile.click_confirm()"
});
formatter.result({
  "duration": 103252600,
  "status": "passed"
});
formatter.match({
  "location": "Deleting_Profile.verify_the_profile_icon_is_hidden_account_preferences_is_removed_from_footer()"
});
formatter.result({
  "duration": 10005351000,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 781783000,
  "status": "passed"
});
});