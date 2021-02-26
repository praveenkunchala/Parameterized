package stepDefination;

import java.util.Iterator;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.relevantcodes.extentreports.LogStatus;
import com.utility.Baseclass;

import cucumber.api.java.en.Then;

public class Pdf extends Baseclass {
	@Then("^verify PDF title$")
	public void verify_PDF_title() throws Throwable {
		Baseclass.WaitElementVisible(Baseclass.driver, By.xpath(elementProperties.getProperty("All_Article_Button")))
				.click();
		Baseclass.explicitlyWait(Baseclass.timeout);
		Baseclass.WaitElementVisible(Baseclass.driver, By.xpath(elementProperties.getProperty("Search"))).click();
		Baseclass.explicitlyWait(Baseclass.timeout);
		Baseclass.WaitElementVisible(Baseclass.driver, By.xpath(elementProperties.getProperty("Input_Text")))
				.sendKeys(elementProperties.getProperty("Input_Text1") + Keys.ENTER);
		Baseclass.explicitlyWait(Baseclass.timeout);
		Baseclass.WaitElementVisible(Baseclass.driver, By.xpath(elementProperties.getProperty("Technical_Text")))
				.click();
		Baseclass.explicitlyWait(Baseclass.timeout);
		WebElement pdflink = Baseclass.WaitElementVisible(Baseclass.driver,
				By.xpath(elementProperties.getProperty("pdflink")));
		Baseclass.explicitlyWait(Baseclass.timeout);
		JavascriptExecutor js = (JavascriptExecutor) Baseclass.driver;
		js.executeScript("arguments[0].scrollIntoView();", pdflink);

		if (pdflink.isDisplayed()) {
			test.log(LogStatus.PASS, "PDF title is displayed");

			String MainWindow = Baseclass.driver.getWindowHandle();
			// Click on PDF link to download
			js.executeScript("arguments[0].click()", pdflink);
			
			Set<String> windows = Baseclass.driver.getWindowHandles();
			Iterator<String> i1 = windows.iterator();
			while (i1.hasNext()) {
				String ChildWindow = i1.next();
				if (!MainWindow.equalsIgnoreCase(ChildWindow)) {
					Baseclass.driver.switchTo().window(ChildWindow);
					String url = Baseclass.driver.getCurrentUrl();
					if (url.contains("0sUb7NDoRtenGAEnzYiO")||url.contains("WJWWYsZSQJ2W0Pv2tJYU")) {
						test.log(LogStatus.PASS, "PDF downloaded successfully");

					}

					else {
						test.log(LogStatus.FAIL, "PDF failed to download");
					}

				}
			}

		}

	}
	
	
}
