package stepDefination;

import static org.junit.Assert.assertTrue;

import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotInteractableException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebElement;

import com.relevantcodes.extentreports.LogStatus;
import com.utility.Baseclass;

import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class Selection_Of_Cookies extends Baseclass {
	@Then("^The options are displayed for cookie selection and can be changed from the cookies option at the footer$")
	public void the_options_are_displayed_for_cookie_selection_and_can_be_changed_from_the_cookies_option_at_the_footer() throws Throwable {
		String bank=elementProperties.getProperty("homepage_title");
		 System.out.println(bank);
		switch(bank)
		{
		case "RBS":
		case "Natwest":
		try {
			JavascriptExecutor js=(JavascriptExecutor)driver;
			
			WebElement element=driver.findElement(By.xpath("//*[@class='ot-cat-item']/descendant::h4[text()='Performance Cookies']"));
			//Navigate to performance cookies element
			js.executeScript("arguments[0].scrollIntoView();", element);
			//Scroll to the bottom of the page
			Thread.sleep(1000);
			js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
			//click on cookie preferences
			  WebElement link=driver.findElement(By.xpath("//*[@title='Cookie Preferences']"));
					  link.click();
			//scroll to first required element
			js.executeScript("arguments[0].scrollIntoView();", element);
			//click on the nod to enable/disable
			driver.findElement(By.xpath(elementProperties.getProperty("Performance_Cookies_Button"))).click();
			test.log(LogStatus.INFO,"Performance Cookies are able to change from bottom of the page");
			driver.findElement(By.xpath(elementProperties.getProperty("Targeting_Cookies"))).click();
			test.log(LogStatus.INFO,"Targeting Cookies are able to change from bottom of the page");
	   boolean w=link.isDisplayed();
	   Assert.assertTrue(w);
	   test.log(LogStatus.INFO,"Able to see cookies link in the bottom of the page");
		//Pop_UP.findElement(By.xpath(elementProperties.getProperty("Cookies_Button"))).click();
		WebElement  Pop_UP =Baseclass.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("Cookies_Pop_UP")));
	    Pop_UP.findElement(By.xpath(elementProperties.getProperty("Cookies_Submit"))).click();
	    test.log(LogStatus.PASS,"cookies are accepted");
		}
		catch (StaleElementReferenceException | ElementNotInteractableException | TimeoutException e) {
			test.log(LogStatus.FAIL, "Cookies are not accepted");
			e.printStackTrace();
		}
	    break;
		case "Lombard":
			Baseclass.scrollDownFull();
		 WebElement link1=Baseclass.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("Cookies")));
		    link1.click();
		    if(link1.isDisplayed())
		    {
		    	test.log(LogStatus.PASS, "Able to see cookies link");
		    }
		    else {
		    	test.log(LogStatus.FAIL,"Cookies link not displayed");
		    }
		  WebElement  Pop_UP1 =Baseclass.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("Cookies_Pop_UP")));
		 /* WebElement p=Pop_UP.findElement(By.xpath(elementProperties.getProperty("Performance_Cookies")));
		  ((JavascriptExecutor)Pop_UP).executeScript("arguments[0].scrollIntoView();", p);
		*/
		  
		  Robot robot1 = new Robot();
			for (int i = 0; i <= 1; i++) {

				robot1.keyPress(KeyEvent.VK_PAGE_DOWN);
				robot1.keyRelease(KeyEvent.VK_PAGE_DOWN);

			
	}
			try {
			 boolean s=Pop_UP1.findElement(By.xpath(elementProperties.getProperty("Performance_Cookies"))).isDisplayed();
			 Assert.assertTrue(s);
			 test.log(LogStatus.INFO,"Performance Cookies Displayed");
			 Pop_UP1.findElement(By.xpath(elementProperties.getProperty("Cookies_Submit"))).click();
			}
			catch (StaleElementReferenceException | ElementNotInteractableException | TimeoutException e) {
				test.log(LogStatus.FAIL, "Performance Cookies are not  Displayed");
				e.printStackTrace();
			}
			break;
		
}}}
