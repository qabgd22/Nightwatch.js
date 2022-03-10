//Login with incorrect password

let password;
module.exports = {
    'Login with incorrect password': function (browser) {
        browser.url('https://the-internet.herokuapp.com/login')
               .waitForElementPresent('div.example h2', 3000, "Login Page is present") 
               .click('input#username')
               .setValue('input#username', 'tomsmith')
               .assert.valueEquals('input#username', 'tomsmith')
               .click('input#password')
               .getValue('input#username', function(result){
                   password = result.value
                   console.log('result', result);

               })

               .setValue('input#password', password)
               .pause(2000)
               .click('button.radius')
               .waitForElementPresent('div#flash.flash.error', 3000)
               .assert.textContains('div#flash.flash.error', 'Your password is invalid!')
               .pause(2000)
               .end();

    }

};