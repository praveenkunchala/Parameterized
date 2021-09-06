package stepDefination;

import java.net.MalformedURLException;

import com.utility.Baseclass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	public Scenario scenario;
	@Before({"@RBS_Natwest_Lombard,@PCC_All_Article_Page,@Account_Preference_Link.RNL,@Clicking_Articles"})
	public void ExtentReport(Scenario scenario) throws NullPointerException, MalformedURLException, NoClassDefFoundError
	{
		System.out.println("hooks1");
		this.scenario= scenario;
		Baseclass.testSetup(scenario);
	}
	
	
	@After({"@RBS_Natwest_Lombard,@Clicking_Articles"})
	public void afterScenario(Scenario scenario) {
		System.out.println("hooks2");
		Baseclass.tearDown(scenario);
		Baseclass.closeAllBrowsers();
	}
	
}
