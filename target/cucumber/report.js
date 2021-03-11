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
  "duration": 731423200,
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
  "duration": 3941078000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2757747300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21027844200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 235032400,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 25565892500,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10339772700,
  "status": "passed"
});
formatter.match({
  "location": "Business_Preferences_Saving.select_preferences_for_your_business_section()"
});
formatter.result({
  "duration": 21359354500,
  "status": "passed"
});
formatter.match({
  "location": "Business_Preferences_Saving.click_save_preferences()"
});
formatter.result({
  "duration": 176184200,
  "status": "passed"
});
formatter.match({
  "location": "Mobile_Automation_Appium.verify_the_Mobile_page_displays_an_successfully_saved_message()"
});
formatter.result({
  "duration": 10704731600,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 1318401500,
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
  "duration": 10470400,
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
  "duration": 1356242800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2356048700,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21030231400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 185712700,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 25680705700,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10334766300,
  "status": "passed"
});
formatter.match({
  "location": "Business_Location_Saving.select_your_business_section()"
});
formatter.result({
  "duration": 269967400,
  "status": "passed"
});
formatter.match({
  "location": "Business_Location_Saving.select_a_business_location_from_the_drop_down_menu()"
});
formatter.result({
  "duration": 7140182200,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 929885700,
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
  "duration": 24698700,
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
  "duration": 1547406200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 2449138300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21056051100,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 183013600,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 25143440800,
  "status": "passed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "duration": 10298034500,
  "status": "passed"
});
formatter.match({
  "location": "Business_Location_Saving.select_your_business_section()"
});
formatter.result({
  "duration": 187628400,
  "status": "passed"
});
formatter.match({
  "location": "Business_Type_Saving.select_business_type_from_the_drop_down_menu()"
});
formatter.result({
  "duration": 2596037500,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 882199300,
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
  "duration": 12886200,
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
  "duration": 1811385000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 4239245500,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 21032318300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 200201300,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 26665566000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: ((//*[@id\u003d\"username\"])) (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.utility.Baseclass.WaitElementVisible(Baseclass.java:196)\r\n\tat stepDefination.Article_Page_Validations.Linkden_login(Article_Page_Validations.java:216)\r\n\tat ✽.Then Click Linkden for logging in(Dropdowns_Selection.feature:37)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"((//*[@id\u003d\"username\"]))\"}\n  (Session info: chrome\u003d88.0.4324.190)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LT-5CD03610PH\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\VENKAT~1.KUN\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:58301}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 090fce5688e382915b15187c5a6fad87\n*** Element info: {Using\u003dxpath, value\u003d((//*[@id\u003d\"username\"]))}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.utility.Baseclass.WaitElementVisible(Baseclass.java:196)\r\n\tat stepDefination.Article_Page_Validations.Linkden_login(Article_Page_Validations.java:216)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Preference_Page_View.click_on_the_profile_icon_at_the_top_right_of_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Business_Location_Saving.select_your_business_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Business_Turn_Over.select_a_business_turn_over_from_the_drop_down_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Finished scenario");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1306725600,
  "status": "passed"
});
});