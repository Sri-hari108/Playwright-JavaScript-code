const{test, expect}=require('@playwright/test');

test('browser context Playwright test',async({browser})=>{
             const Context=await browser.newContext();
             const page=await Context.newPage();
             await page.goto('https://www.google.com/');
             
});
test('page Playwright test',async({page})=>{
            
             await page.goto('https://rahulshettyacademy.com/practice');
           console.log(await page.title());
             await expect(page).toHaveTitle("QA Automation Practice Sites | Playwright, Selenium & API Testing");
});

test('Start Basic Validation',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator("[name='password']").fill('earning@830$3mK2');
    await page.locator('#signInBtn').click();
    console.log(await page.locator('[style*="block"]').textContent());
    await expect(page.locator('[style*="block"]')).toContainText('Incorrect')

    // swipe out existing input --- fill("")
     await page.locator("[name='password']").fill('');
      await page.locator("[name='password']").fill('Learning@830$3mK2');
      await page.locator('#signInBtn').click();
    //   console.log(await page.locator('.card-body a').first().textContent());
    //   console.log(await page.locator('.card-body a').last().textContent());

    // wait for the element to be visible before interacting with it specially in case of if all items need to be loaded in the page and then we can interact with it.
    
       //await page.waitForLoadState('networkidle');
      await page.locator('.card-body a').first().waitFor();
      console.log(await page.locator('.card-body a').allTextContents())

})
//1. Staticdropdown
//2. Radio Button and checked both check and uncheck condition
test.only('UI Validation',async({page})=>{
  //test timeout
  test.setTimeout(40000);
  const slowTimeoutexpect=expect.configure({timeout:35000})

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const Staticdropdown=await page.locator('select.form-control');
    await Staticdropdown.selectOption('Teacher');
    await page.locator("[value='user']").click();
    console.log(await page.locator("[value='user']").isChecked());
    await expect(page.locator("[value='user']")).toBeChecked();
    await page.locator('#okayBtn').click();
    await page.locator("#terms").click();
    //steptimeout
    await expect(page.locator("#terms")).toBeChecked({timeout:45000});
    await page.locator("#terms").uncheck();
   // expect(await page.locator("#terms").isChecked()).toBeFalsy();
    slowTimeoutexpect(await page.locator("#terms").isChecked()).toBeFalsy();
})