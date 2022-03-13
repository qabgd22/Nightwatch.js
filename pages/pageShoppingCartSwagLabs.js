module.exports = {
//url:'https://www.saucedemo.com',


elements: {
header:{selector:'div.header_secondary_container'},
item:{selector:'div.inventory_item_name'},
checkoutbutton:{selector:'#checkout'}
},


commands: [
  {
verifyHeder:function(){
  return this.assert.elementPresent('@header', "Header is present");
},

  verifyThatItemIsinTheCart: function(){
    return this.assert.elementPresent('@item', "Item is present");
  },

clickOnCheckOutButton: function(){
  return this.click('@checkoutbutton')
             .pause(2000);
}


}]
};
