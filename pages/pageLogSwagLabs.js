module.exports = {
//url:'https://www.saucedemo.com',

url:function(){
return 'https://www.saucedemo.com';
},


elements: {
  userNameField:{selector: 'input#user-name'},
  passwordField: {selector: 'input#password'},
  logInButton: {selector: 'input.btn_action'}

},

commands: [
  {

  addUserName: function(username){
    return this.waitForElementPresent('@userNameField', 3000)
               .click('@userNameField')
               .setValue('@userNameField', username);
  },

  addPassword: function(password){
    return this.click('@passwordField')
               .setValue('@passwordField', password)
               .pause(2000)
  },

  clickLogIn: function(){
    return this.click('@logInButton')       

  }

}]
};
