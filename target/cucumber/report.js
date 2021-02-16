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
  "line": 63,
  "name": "Validate Linkden Login Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages;validate-linkden-login-page",
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
  "id": "validate-article-listing-and-individual-pages;validate-linkden-login-page;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 72,
      "id": "validate-article-listing-and-individual-pages;validate-linkden-login-page;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 73,
      "id": "validate-article-listing-and-individual-pages;validate-linkden-login-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 724596000,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Validate Linkden Login Page",
  "description": "",
  "id": "validate-article-listing-and-individual-pages;validate-linkden-login-page;;2",
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
  "duration": 3412614200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.navigated_to_the_site()"
});
formatter.result({
  "duration": 3002875500,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.verify_the_home_page_title()"
});
formatter.result({
  "duration": 11019339200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateToSite.Accept_the_cookies()"
});
formatter.result({
  "duration": 214067200,
  "status": "passed"
});
formatter.match({
  "location": "Article_Page_Validations.Linkden_login()"
});
formatter.result({
  "duration": 35486520600,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: ((//*[@id\u003d\"main-header\"]/div[1]/a/img)) (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.utility.Baseclass.WaitElementVisible(Baseclass.java:200)\r\n\tat stepDefination.Article_Page_Validations.Linkden_login(Article_Page_Validations.java:262)\r\n\tat ✽.Then Click Linkden for logging in(All_Article_Validations.feature:68)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"((//*[@id\u003d\"main-header\"]/div[1]/a/img))\"}\n  (Session info: chrome\u003d88.0.4324.150)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LT-5CD03610PH\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\VENKAT~1.KUN\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:52329}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c32faca3b21a9e932eeefdde1bf87912\n*** Element info: {Using\u003dxpath, value\u003d((//*[@id\u003d\"main-header\"]/div[1]/a/img))}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.utility.Baseclass.WaitElementVisible(Baseclass.java:200)\r\n\tat stepDefination.Article_Page_Validations.Linkden_login(Article_Page_Validations.java:262)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Article_Page_Validations.Image_after_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Finished scenario");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1702310400,
  "status": "passed"
});
});