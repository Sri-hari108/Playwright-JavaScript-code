//import { expect } from '@playwright/test';
class dashboardPage{
    
    constructor(page){
        this.page=page,
        this.productList=page.locator(".card-body");
        this.productTitle=page.locator(".card-body b");
        this.cartButton=page.locator("[routerlink*='cart']");
        console.log(this.productTitle);
    }

    async searchProduct(productName){
            const productTitles=await this.productTitle.allTextContents();
              console.log(productTitles);
        const count=await this.productList.count();
              //let productFound=false;
              for(let i=0;i<count;i++){
                    const title=(await this.productList.nth(i).locator('b').textContent())?.trim();
                    console.log(title);
                    if(title?.toLowerCase()===productName.toLowerCase()){
                        console.log(title);
                        await this.productList.nth(i).locator("button:has-text('Add To Cart')").click();
                       // productFound=true;
                        break;
                    }
              }
        
             // expect(productFound).toBeTruthy();
    }

   async goToCart(){
        await this.cartButton.click();
    }

}
module.exports={dashboardPage};