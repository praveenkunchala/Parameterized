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
				tags = {"@deleting_Profile,@PCC_All_Article_Page"}
)
		public class TestRunner {
			
		}
		