const users =require('../Data/users.json')

module.exports = {
    '@tags': ['sorting'],
    'Sorting test': function (browser) {

    const firstUsername = users.user.username1;
    const firstPassword = users.user.password;
    const login = browser.page.pageLogSwagLabs();

    //Login to https://www.saucedemo.com/ with credentials from json file
    login.navigate()
         .maximizeWindow()
         .addUserName(firstUsername)
         .addPassword(firstPassword)
         .clickLogIn()

    //Check all sorting options from dropdown menu at the Products page
    for(let i = 1; i <= 4; ++i) {
        //use inverted commas
        browser.click(`.product_sort_container > option:nth-child(${i})`); 
        browser.pause(1 * 1000);
        }
    
    //Collect and print all product prices
    for(let i = 1; i <= 6; ++i) {
        browser.getText(`div.inventory_item:nth-child(${i}) > div:nth-child(2) 
        > div:nth-child(2) > div:nth-child(1)`, function(result) {
            price = result.value 
            console.log(price);
        })
    }


    browser.end();

    }

};