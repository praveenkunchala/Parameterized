$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Business_Preferences_Saving.feature");
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
  "duration": 628338200,
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
  "duration": 3101929000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2402939700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21040481900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 278753100,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 24378848700,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10278435900,
  "status": "passed"
});
formatter.match({
  "location": "Business_Preferences_Saving.select_preferences_for_your_business_section()"
});
formatter.result({
  "duration": 21185368300,
  "status": "passed"
});
formatter.match({
  "location": "Business_Preferences_Saving.click_save_preferences()"
});
formatter.result({
  "duration": 138532300,
  "status": "passed"
});
formatter.match({
  "location": "Mobile_Automation_Appium.verify_the_Mobile_page_displays_an_successfully_saved_message()"
});
formatter.result({
  "duration": 10463553600,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 1191159000,
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
  "duration": 17875800,
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
  "duration": 1331358700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2593592700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21035683900,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 199075100,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 25526490700,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10299243000,
  "status": "passed"
});
formatter.match({
  "location": "Business_Location_Saving.select_your_business_section()"
});
formatter.result({
  "duration": 243030900,
  "status": "passed"
});
formatter.match({
  "location": "Business_Location_Saving.select_a_business_location_from_the_drop_down_menu()"
});
formatter.result({
  "duration": 7277675800,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 833140900,
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
  "duration": 16228700,
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
  "duration": 1411336700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2515646800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21043947000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 201563700,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 25139443700,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10323231500,
  "status": "passed"
});
formatter.match({
  "location": "Business_Location_Saving.select_your_business_section()"
});
formatter.result({
  "duration": 265911200,
  "status": "passed"
});
formatter.match({
  "location": "Business_Type_Saving.select_business_type_from_the_drop_down_menu()"
});
formatter.result({
  "duration": 2788608200,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 809762100,
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
  "duration": 16872400,
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
  "duration": 1395637800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2479687100,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21015228700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 169553000,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 24714827100,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10289680500,
  "status": "passed"
});
formatter.match({
  "location": "Business_Location_Saving.select_your_business_section()"
});
formatter.result({
  "duration": 239043700,
  "status": "passed"
});
formatter.match({
  "location": "Business_Turn_Over.select_a_business_turn_over_from_the_drop_down_menu()"
});
formatter.result({
  "duration": 4066558800,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 853762300,
  "status": "passed"
});
});