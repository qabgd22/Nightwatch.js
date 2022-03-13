module.exports = {


elements: {
firstName:{selector:'input.form_input'},
lastName:{selector:'input#last-name'},
zip:{selector:'input#postal-code'},
continue:{selector:'div.checkout_buttons input'}
},

commands: [
  {
addFirstName: function(firstName){
return this.waitForElementPresent('@firstName',3000,"First name field is present")
           .click('@firstName')
           .setValue('@firstName', firstName);

},
addLastName: function(lastName){
  return this.click('@lastName')
             .setValue('@lastName', lastName);
},
addZip: function(zip){
  return this.click('@zip')
             .setValue('@zip', zip)
             .pause(2000);
},

clickContinueButton: function(){
  return this.click('@continue')
             .pause(2000)
          
}

}]
};
