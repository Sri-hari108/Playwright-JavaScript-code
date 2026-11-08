const{test, expect}=require('@playwright/test');

test.only('ENd to END Web Automation',async({page})=>{
      const email="akashkr930487@gmail.com";
      const productName="iphone 13 pro";
      const productList=page.locator(".card-body");
      await page.goto("https://rahulshettyacademy.com/client/");
      await page.locator("#userEmail").fill(email);
      await page.locator("#userPassword").fill("Jai@108Jagnath");
      await page.locator("#login").click();
      await productList.first().waitFor();
      const productTitle=await productList.locator("b").allTextContents();
      console.log(productTitle);

      const count=await productList.count();
      let productFound=false;
      for(let i=0;i<count;i++){
            const title=(await productList.nth(i).locator('b').textContent())?.trim();
            console.log(title);
            if(title?.toLowerCase()===productName.toLowerCase()){
                console.log(title);
                await productList.nth(i).locator("button:has-text('Add To Cart')").click();
                productFound=true;
                break;
            }
      }

      expect(productFound).toBeTruthy();
      await page.locator("[routerlink*='cart']").click();
      await page.locator("div li h3").first().waitFor();
      const isProductVisible=await page.locator("h3:has-text('iphone 13 pro')").isVisible();
      expect(isProductVisible).toBeTruthy();
      await page.locator("text=Checkout").click();
      await page.locator("[placeholder*='Country']").pressSequentially("ind");
      const dropDownValue=await page.locator(".ta-results .ta-item");
      await dropDownValue.first().waitFor();
      const count1=await dropDownValue.count();
       const placeName="India";
      for(let i=0;i<count1;i++){
        const text = (await dropDownValue.nth(i).textContent())?.trim();
        console.log(text);
        if(text?.toLowerCase()===placeName.toLowerCase()){
                  await dropDownValue.nth(i).click();
                  
                break;
        }
      }
      
      expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
      await page.locator(".action__submit ").click();
      expect(page.locator(".hero-primary")).toContainText(" Thankyou for the order. ");
      const orderID=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
      console.log(orderID);
      const extractedId = orderID.split('|')[1].trim();

      console.log(extractedId); 
      


      // order page 
      await page.locator("[routerlink*='myorders']").first().click();
      await page.locator("tbody").first().waitFor();
      const orderHeaders=await page.locator("tbody tr");
      const orderCount=await orderHeaders.count();
      for(let i=0;i<orderCount;i++){
        const orderIDText=await page.locator("tbody tr th").nth(i).textContent();
        console.log(orderIDText);
        if(orderIDText?.trim()===extractedId){
            await orderHeaders.nth(i).locator("button").first().click();
            break;
        }
      }
      
      //view order page
      await page.locator(".artwork-card-info .title").first().waitFor();
      const productText=await page.locator(".artwork-card-info .title").textContent();
      expect(productText?.trim()).toEqual(productName);
    

})


test('ENd to END Web Automation2',async({page})=>{
      const productName="Blackberry";
     const  productList=  page.locator(".card-body");
       await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator("[name='password']").fill('Learning@830$3mK2');
    await page.locator('#signInBtn').click();
      
      await page.locator(".card-body a").first().waitFor();
      const productTitle=await page.locator(".card-body a").allTextContents();
      console.log(productTitle);

      const counts= productList.count();
       for(let i=0;i<counts;i++){
            if(await page.locator('.card-body a').nth(i).textContent()===productName){
                console.log(await page.locator('.card-body a').nth(i).textContent());
                await page.locator('.card-footer button').nth(i).click();
                break;
            }
       }
      await page.locator("text= checkout").click();
      await page.locator(".media-body h4").first().waitFor();
      const isProductVisible=await page.locator("h3:has-text('Blackberry')").isVisible();
        expect(isProductVisible).toBeTruthy();

})