const {test,expect}=require("@playwright/test");
test("Validate visible and not Visible",async({page})=>{
      await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //   await page.goto("https://www.google.com/");
    //   await page.goBack();
    //   await page.goForward();
   await  expect(page.locator("[name='show-hide']")).toBeVisible();
   await page.locator("#hide-textbox").click();
   await  expect(page.locator("[name='show-hide']")).toBeHidden();
   // to handle pop-up 
   await page.on('dialog',dialog=>dialog.accept());
   await page.locator("#confirmbtn").click();

   // to handle mouse over
   await page.locator("#mousehover").hover();
   const option=await page.locator(".mouse-hover .mouse-hover-content a");
   const count=await option.count();
   for(let i=0;i<option;i++){
          const mouseoveroption= await option.nth(i).textContent();
    if(mouseoveroption==='Reload'){
         await option.nth(i).click();
         break;
    }
   }
   // to handle frame
   const framePage= await page.frameLocator("[name='iframe-name']");
     await framePage.locator("li a[href='lifetime-access']:visible").click();
     const text=await framePage.locator(".text h2").textContent();
     const Subscriber=text.split(" ")[1];
     console.log(Subscriber);



});