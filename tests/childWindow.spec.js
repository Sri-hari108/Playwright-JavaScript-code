const{test, expect}=require('@playwright/test');
const { promises } = require('node:dns');

test('Validating Attribute',async({page})=>{
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    // Understand Validating Attribute - In Case of blinking text.
   const documentText= await page.locator("[href*='documents-request']");
   await expect(documentText).toHaveAttribute('class','blinkingText');

   // 


})

test.only('Handling Child Window',async({browser})=>{
  
   const Context=await browser.newContext();
   const page=await Context.newPage();
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   const documentlink= await page.locator("[href*='documents-request']");

   // when we to open two 
   //const [newPage1,newPage2]=await Promise.all([
 // Wait for the new page to open
 const [newPage] =await Promise.all([
Context.waitForEvent('page'),
documentlink.click()
   ])
const text=await newPage.locator("[class*='red']").textContent();
const domain=text.split('@')[1].trim();
const cleanDomain=domain.split(' ')[0].trim();
//console.log(cleanDomain);
await page.locator('#username').fill(cleanDomain);
// using inputValue() to get the value of input field in place of textContent() which is used for other elements.

console.log(await page.locator("#username").inputValue());
   
})