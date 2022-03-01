const users = require ('../Data/users.json')
module.exports = {
  '@tags': ['loginS'],
   'Login as standard user' : function (browser) {
const firstUsername = users.user.username1;
const firstPassword = users.user.password;
        browser
        .url('https://www.saucedemo.com/')
        .waitForElementVisible('div.login_logo', 3000, "Login page is opened")
        .click('input#user-name')
        .setValue('input#user-name',firstUsername)
        .click('input#password')
        .setValue('input#password',firstPassword)
        .click('input.btn_action')
        .waitForElementPresent('span.title', 3000, "Products appears")
        .windowMaximize()
        .pause(1000)
        .end();
      }
};
