class loginPage{
    constructor(page){
        this.page=page,
        this.userName=page.locator("#userEmail"),
        this.password=page.locator("#userPassword"),
        this.login=page.locator("#login")
    }

   async goTO(){
        await this.page.goto("https://rahulshettyacademy.com/client/");
    }
    async validLogin(UserName,password){

      await this.userName.fill(UserName);
      await this.password.fill(password);
      await this.login.click();
      await this.page.waitForLoadState('networkidle');
    }
}
module.exports={loginPage};