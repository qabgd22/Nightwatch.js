module.exports = {
url:'https://the-internet.herokuapp.com/context_menu',


elements: {
  title:{selector: 'div.example h3'}

},

commands: [
  {

  checkHead: function(){
    return this.waitForElementPresent('@title', 3000)
               .assert.textContains('@title',"Context Menu");         

  }



}]
};
