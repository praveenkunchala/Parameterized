package stepDefination;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.util.Iterator;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.relevantcodes.extentreports.LogStatus;
import com.utility.Baseclass;

import cucumber.api.java.en.Then;

public class Clicking_Articles extends Baseclass {
	String url1 = "";
	HttpURLConnection huc = null;
	int respCode = 200;
	int count = 0;
	List<WebElement> links;

	@Then("^click view article link$")
	public void click_view_article_link() throws Throwable {

		WebElement element = driver.findElement(By.xpath("//a[text()='View all']"));
		((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
		Baseclass.explicitlyWait(Baseclass.timeout);

		WebElement ele = driver.findElement(By.xpath("//a[text()='View all']"));

		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click()", ele);
		Baseclass.explicitlyWait(Baseclass.timeout);

	}

	@Then("^click all Articles in home page$")
	public void click_all_Articles_in_home_page() throws Throwable {
		/*
		 * WebElement element = driver.findElement(By.xpath("//a[text()='View all']"));
		 * ((JavascriptExecutor)
		 * driver).executeScript("arguments[0].scrollIntoView(true);", element);
		 * Baseclass.explicitlyWait(Baseclass.timeout);
		 * 
		 * WebElement ele = driver.findElement(By.xpath("//a[text()='View all']"));
		 * 
		 * JavascriptExecutor js = (JavascriptExecutor) driver;
		 * js.executeScript("arguments[0].click()", ele);
		 * Baseclass.explicitlyWait(Baseclass.timeout); List<WebElement> links =
		 * driver.findElements(By.tagName("a")); System.out.println(links.size());
		 */
		Baseclass.explicitlyWait(Baseclass.timeout);
		links = Baseclass.driver.findElements(By.tagName("a"));
		Iterator<WebElement> it = links.iterator();

		while (it.hasNext()) {
			count++;
			String url1 = it.next().getAttribute("href");

			System.out.println(url1);

			if (url1 == null || url1.isEmpty()) {
				System.out.println("URL is either not configured for anchor tag or it is empty");
				continue;
			}
			try {
				huc = (HttpURLConnection) (new java.net.URL(url1).openConnection());

				huc.setRequestMethod("HEAD");

				huc.connect();

				respCode = huc.getResponseCode();
				test.log(LogStatus.INFO, "response Code is" + "" + " " + respCode);
				if (respCode >= 400) {

					System.out.println(url1 + " is a broken link");
					test.log(LogStatus.FAIL, "" + url1 + "" + " is a broken link");
				} else {
					System.out.println(url1 + " is a valid link");
					test.log(LogStatus.PASS, "" + url1 + "" + " is a valid link");
				}

			} catch (MalformedURLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		System.out.println(count);
		System.out.println("page no" + " " + PageNo++);
		//test.log(LogStatus.INFO, "page Number" + " " + PageNo++);

		if (count == links.size()) {
			Baseclass.explicitlyWait(Baseclass.timeout);
			Baseclass.scrollDownFull();
			boolean nextPage = Baseclass.driver.findElement(By.xpath("//span[text()='Next page']/parent::span"))
					.isEnabled();
			try {
			if (nextPage) {
				Baseclass.WaitElementVisible(driver, By.xpath("//span[text()='Next page']/parent::span")).click();
				Clicking_Articles k = new Clicking_Articles();
				k.click_all_Articles_in_home_page();

			} else {
				test.log(LogStatus.INFO, "all pages are validated ");
			}}
			catch(Exception e)
			{
				//button[contains(@aria-label,'Page')][last()-1]
			String k=driver.findElement(By.xpath("//button[contains(@aria-label,'Page')][last()-1]")).getText();
			int lastPage=Integer.parseInt(k);
			if(Page==lastPage)
				test.log(LogStatus.INFO, "all pages are validated ");
			else
				test.log(LogStatus.ERROR,"we didnt check the articles till last page");
			}

		}

	}
}
