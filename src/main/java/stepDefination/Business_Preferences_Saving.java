package stepDefination;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotInteractableException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.relevantcodes.extentreports.LogStatus;
import com.utility.Baseclass;

public class Business_Preferences_Saving extends Baseclass {

	@Then("^Select preferences for 'your business' section$")
	public void select_preferences_for_your_business_section() throws Throwable {
		//jenkin
	//	String bank= System.getProperty("homepage_title");
		//switch (title) {
		 String bank=elementProperties.getProperty("homepage_title");
		 System.out.println(bank);
		switch(bank)
		{
		case "RBS":
		case "Ulster NI":
				try {
				System.out.println("1");
				WebElement flag = Baseclass.driver
						.findElement(By.xpath(elementProperties.getProperty("Delete_button")));
				Baseclass.explicitlyWait(Baseclass.timeout);
				((JavascriptExecutor) (Baseclass.driver)).executeScript("arguments[0].scrollIntoView();", flag);
				Baseclass.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("Business_Tab"))).click();
				Baseclass.explicitlyWait(Baseclass.timeout);
				WebElement bt = Baseclass.WaitElementVisible(driver,
						By.xpath(elementProperties.getProperty("Business_Type")));
				System.out.println("2");
				Select s = new Select(bt);
				System.out.println("3");
				s.selectByIndex(4);
				System.out.println("4");
				WebElement bto = Baseclass.WaitElementVisible(driver,
						By.xpath(elementProperties.getProperty("Business_turnover")));
				Select t = new Select(bto);
                System.out.println("5");
				t.selectByIndex(2);
				WebElement bl = Baseclass.WaitElementVisible(driver,
						By.xpath(elementProperties.getProperty("Business_location")));
				Select r = new Select(bl);
				r.selectByIndex(3);
				System.out.println("6");
				Baseclass.scrollDownFull();
				}
				catch (StaleElementReferenceException | ElementNotInteractableException | TimeoutException e) {
					System.out.println(e.getMessage());
					e.printStackTrace();
				}
				
                break;
			
		case "RBS Premier":
			System.out.println("RBS premier");
			Baseclass.RefreshPage();
			WebElement flag22 = Baseclass.driver.findElement(By.xpath(elementProperties.getProperty("Delete_button")));
			((JavascriptExecutor) (Baseclass.driver)).executeScript("arguments[0].scrollIntoView();", flag22);
			Baseclass.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("Business_Tab"))).click();

			WebElement b1 = Baseclass.WaitElementVisible(driver,
					By.xpath(elementProperties.getProperty("premier_age")));
			Select r1 = new Select(b1);

			int tt = r1.getOptions().size() - 1;
			for (int i = 0; i <= tt; i++) {

				for (int ii = 0; ii < 3; ii++) {
					try {
						WebElement b = Baseclass.WaitElementVisible(driver,
								By.xpath(elementProperties.getProperty("premier_age")));
						Select rt = new Select(b);
						rt.selectByIndex(i);
						test.log(LogStatus.PASS, "" + rt.getFirstSelectedOption().getText()
								+ " option in Age drop Down are able to Select");
						Baseclass.RefreshPage();
						WebElement flag2 = Baseclass.driver.findElement(By.xpath(elementProperties.getProperty("Delete_button")));
						((JavascriptExecutor) (Baseclass.driver)).executeScript("arguments[0].scrollIntoView();", flag2);
						Baseclass.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("Business_Tab"))).click();
					    WebElement bl2=Baseclass.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("location")));
					    Select rr=new Select(bl2);
					    rr.selectByIndex(3);
					    
						WebElement b2 = Baseclass.WaitElementVisible(driver,
								By.xpath(elementProperties.getProperty("premier_age")));
						Select r2 = new Select(b2);
						r2.selectByIndex(2);
						//extra
						WebElement location= Baseclass.WaitElementVisible(driver,
								By.xpath(elementProperties.getProperty("location")));
						Select ron = new Select(location);
						ron.selectByIndex(1);
						System.out.println("3 option");
						Baseclass.scrollDownFull();
						
					} catch (StaleElementReferenceException | ElementNotInteractableException | TimeoutException e) {
						System.out.println(e.getMessage());
						e.printStackTrace();
					}}}
					break;
				case "Ulster ROI":
					for(int i=0;i<=3;i++)
					{
						Baseclass.RefreshPage();
				try {
					
					System.out.println("1");
					WebElement flags1 = Baseclass.driver
							.findElement(By.xpath(elementProperties.getProperty("Delete_button")));
					Baseclass.explicitlyWait(Baseclass.timeout);
					((JavascriptExecutor) (Baseclass.driver)).executeScript("arguments[0].scrollIntoView();", flags1);
					Baseclass.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("Business_Tab"))).click();
					Baseclass.explicitlyWait(Baseclass.timeout);
					WebElement bp= Baseclass.WaitElementVisible(driver,
							By.xpath(elementProperties.getProperty("Business_Type")));
					System.out.println("2");
					Select s1 = new Select(bp);
					System.out.println("3");
					s1.selectByIndex(1);
					System.out.println("4");
					WebElement bto1 = Baseclass.WaitElementVisible(driver,
							By.xpath(elementProperties.getProperty("Turn_over")));
					Select t1 = new Select(bto1);
	                System.out.println("5");
					t1.selectByIndex(1);
					WebElement bln = Baseclass.WaitElementVisible(driver,
							By.xpath(elementProperties.getProperty("Business_location1")));
					Select rj = new Select(bln);
					rj.selectByIndex(1);
					System.out.println("6");
					Baseclass.scrollDownFull();
					break;
				}
				catch (StaleElementReferenceException | ElementNotInteractableException | TimeoutException er) {
					System.out.println(er.getMessage());
					er.printStackTrace();
				}}
				
	                break;
		}
			
		
	}
		


	@Then("^Click save preferences$")
	public static void click_save_preferences() throws Throwable {
		Baseclass.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("Save_Preferences"))).click();
	}

	@Then("^Verify The page displays an 'successfully saved' message$")
	public void verify_the_page_displays_an_successfully_saved_message() throws Throwable {
		try {
			String success_msg = Baseclass
					.WaitElementVisible(driver, By.xpath(elementProperties.getProperty("Successfull_Msg"))).getText();
			Baseclass.explicitlyWait(Baseclass.timeout);

			if (success_msg.equals(elementProperties.getProperty("Msg_text"))) {
				test.log(LogStatus.PASS, "Successfully saved Message is not Displayed after selecting Business Preferences");
			} else {
				test.log(LogStatus.FAIL, "Successfully saved Message is not Displayed after selecting Business Preferences");

			}

		} catch (StaleElementReferenceException | ElementNotInteractableException | TimeoutException e) {
			test.log(LogStatus.FAIL, "Successfully saved Message is not Displayed after selecting Business Preferences");
			e.printStackTrace();
		}
	}

}
