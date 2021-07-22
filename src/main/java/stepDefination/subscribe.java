package stepDefination;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;

import java.util.concurrent.TimeUnit;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotInteractableException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import com.relevantcodes.extentreports.LogStatus;
import com.utility.Baseclass;

public class subscribe extends Baseclass {

	@Then("^validate the linkdin button$")
	public void validate_the_linkdin_button() throws Throwable {
		String bank = elementProperties.getProperty("homepage_title");
		System.out.println(bank);
		switch (bank) {
		case "RBS":
		case "Ulster NI":
		case "Ulster ROI":
			JavascriptExecutor js = (JavascriptExecutor) driver;
	        js.executeScript("javascript:window.scrollBy(250,350)");
	        System.out.println("click the article now..");
           /*try {
        	   Baseclass.driver.findElement(By.xpath("/html/body/div[1]/div/div/main/div[3]/div/div[2]/div/div/div/div[1]/article/a/div[2]/div[1]/p")).click();
           }
           catch (StaleElementReferenceException | ElementNotInteractableException e) {
   			test.log(LogStatus.INFO,"not required to click article here");
   			e.printStackTrace();
   		}*/
           Baseclass.explicitlyWait(Baseclass.timeout);

			Baseclass.scrollDown();
			String Title = Baseclass
					.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("Subscribe_Title"))).getText();
			String Para = Baseclass
					.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("Subscribe_Para"))).getText();
			System.out.println("Title :" + Title);
			if ((Title.equals("Never miss an update on Cyber Security"))
					&& (Para.contains("subscribe to your favourite topics and to hear about our business events"))) {
				test.log(LogStatus.PASS, "Title and Para in the popup are populating fine as expected");
			} else {
				test.log(LogStatus.FAIL, "Title and Para in the popup are not populating as expected");
			}
			System.out.println("Para :" + Para);

			test.log(LogStatus.INFO, Para);
			break;

		case "RBS Premier":
			JavascriptExecutor jse = (JavascriptExecutor) driver;
	        jse.executeScript("javascript:window.scrollBy(250,350)");
	        System.out.println("Check");
            Baseclass.driver.findElement(By.xpath("/html/body/div[1]/div/div/main/div[3]/div/div[2]/div/div/div/div[1]/article/a/div[2]/div[1]/p")).click();
			Baseclass.explicitlyWait(Baseclass.timeout);
            System.out.println("Premier button");
			/*Baseclass.driver.findElement(By.xpath(
					"/html/body/div[1]/div/div/main/div[1]/div[2]/div/div/div/div/div[2]/ul/li[1]/article/a/div[2]/div[2]/div"))
					.click();*/
			Baseclass.explicitlyWait(Baseclass.timeout);
			Baseclass.scrollDown();

			WebElement Subscribes = Baseclass.driver
					.findElement(By.xpath("/html/body/div[1]/div/div/main/div/section/div[1]/div/div/button/span[1]"));
			String text1 = Subscribes.getText();
			String color1 = Subscribes.getCssValue("color");
			System.out.println(text1 + "" + color1);
			break;

		}
	}

	@Then("^Click Linkden for logging in from the article$")
	public void click_Linkden_for_logging_in_from_the_article() throws Throwable {
		try {
			System.out.println("click linkdin button...now");
			
		WebElement lkdn=Baseclass.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("Linkedn_Click2")));
			driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			
			Actions actions = new Actions(driver);
			actions.moveToElement(lkdn).click().build().perform();
			Baseclass.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("Linkden_Poup"))).click();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

			Baseclass.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("Linkden_Username")))
					.sendKeys(elementProperties.getProperty("Linkden_User_name"));
			Baseclass.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("Linkden_Password")))
					.sendKeys(elementProperties.getProperty("Linkden_password"));
			Baseclass.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("Linkden_Signup"))).click();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			Baseclass.explicitlyWait(10);
			String Url = Baseclass.get_Url();
			System.out.println("Url  :" + Url);
			if (Url.equalsIgnoreCase(elementProperties.getProperty("Profile_Page"))) {
				test.log(LogStatus.PASS, "Site is getting re-directing to User profile page after login");
			} else {
				test.log(LogStatus.FAIL, "Site is not getting re-directing to User profile page after login");
			}
			Baseclass.explicitlyWait(2);
			Baseclass.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("Header_Logo"))).click();

		} catch (StaleElementReferenceException | ElementNotInteractableException e) {
			test.log(LogStatus.FAIL, "Unable to automate next button due to exception");
			e.printStackTrace();
		}

	}

	@Then("^validate the linkdin button after login$")
	public void validate_the_linkdin_button_after_login() throws Throwable {
		try {
			System.out.println("before clicking the article");
			WebElement article=Baseclass.driver.findElement(By.xpath("//p[contains(text(),'est article')]"));
			driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
            article.click();
			Baseclass.explicitlyWait(Baseclass.timeout);
			System.out.println("After clicking the article");
			String after_Login = Baseclass.driver
					.findElement(By.xpath("//span[text()='Subscribe']"))
					.getText();

			test.log(LogStatus.INFO,
					"After login throgh linkdin in place of linkdin we are viewing the option " + after_Login);
			System.out.println(after_Login);
		} catch (Exception e) {
			// String after_Login=Baseclass.WaitElementVisible(driver,
			// By.xpath(elementProperties.getProperty("After_login"))).getText();
		/*	String after_Login = Baseclass.driver
					.findElement(By.xpath("/html/body/div[1]/div/div/main/div/section/div[1]/div/div/button"))
					.getText();
*/
			//test.log(LogStatus.INFO,
				//	"After login throgh linkdin in place of linkdin we are viewing the option " + after_Login);
			//System.out.println(after_Login);
		}
	}

}