import {test,chromium} from 'playwright/test';

 test("Login test demo",async()=>{
    const browser=await chromium.launch({
        headless:false,
    })
    const context= await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://greenbowl.onrender.com/menu");
    await page.click('.person.bi.bi-person.btnpress');
    await page.click("//button[text()='Login']");
    await page.fill("#textbox4","nambirajam21112003@gmail.com");
    await page.fill("#textbox5","2021");
    await page.click(".otpbtn");
    await page.waitForTimeout(5000);
});