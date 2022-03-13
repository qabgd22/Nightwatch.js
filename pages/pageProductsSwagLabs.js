module.exports = {
//url:'https://www.saucedemo.com',


elements: {
item1:{selector:'button.btn_primary.btn_inventory'},
shoppingCart:{selector:'div#shopping_cart_container'}

},


commands: [
  {
addToCart:function(){
  return this.click('@item1')
             .pause(2000);

},
clickOnShoppingCart:function(){
  return this.click('@shoppingCart')
              .pause(2000);

}


}]
};
