const users = require('../Data/users.json');

module.exports = {
   '@tags': ['shopping'],
   'Shopping test' : function (browser) {

   const firstUsername = users.user.username1;
   const firstPassword = users.user.password;
   const login = browser.page.pageLogSwagLabs();
   const products = browser.page.pageProductsSwagLabs();
   const shoppingCart = browser.page.pageShoppingCartSwagLabs();
   const firstName = users.name.firstName;
   const lastName = users.name.lastName;
   const zip = users.name.postalCode;
   const userinfo = browser.page.pageUserInformationSwagLabs();
   const checkout = browser.page.pageCheckoutSwagLabs();

   login.navigate()
        .maximizeWindow() 
        .addUserName(firstUsername)
        .addPassword(firstPassword)
        .clickLogIn()
   products.addToCart()
           .clickOnShoppingCart()
   shoppingCart.verifyHeder()
               .verifyThatItemIsinTheCart()
               .clickOnCheckOutButton()
   userinfo.addFirstName(firstName)
   userinfo.addLastName(lastName)
   userinfo.addZip(zip)
           .clickContinueButton()
   checkout.clickFinish()
           .verifyFinish()
    browser.end();
      }
};
