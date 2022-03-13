module.exports = {
//url:'https://www.saucedemo.com',

//Defining the fields we test on the page 
elements: {
finishbutton:{selector:'div.cart_footer button#finish'},
finishheader:{selector:'div#checkout_complete_container h2.complete-header'}
},

//Defining the functions with which we enter values in the fields, click on the button, etc.
commands: [
  {
clickFinish:function(){
  return this.click('@finishbutton', "FINISH button is present");
},

verifyFinish:function(){
  return this.assert.textContains('@finishheader', "THANK YOU FOR YOUR ORDER")
                    .pause(2000);
}


}]
};
