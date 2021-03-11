package runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

		@RunWith(Cucumber.class)
		@CucumberOptions(
				features ="src/test/resources/Features",
				glue = { "stepDefination" }, 
				monochrome = true, 
				plugin = {"pretty","html:target/cucumber", "json:target/cucumber.json"},
				tags = {"@Business_location_Saving,@Business_Preferences_Saving,@Dropdowns_Selection"}
)
		public class TestRunner {
			
		}
		