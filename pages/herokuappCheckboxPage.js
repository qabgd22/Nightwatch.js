module.exports = {
url:'https://the-internet.herokuapp.com/checkboxes',


elements: {
  headline:{selector: 'div.example h3'},
  box1:{selector:'form#checkboxes input[type="checkbox"]'},
  box2:{selector:'form#checkboxes input[type="checkbox"]:nth-child(3)'}

},

commands: [
  {

  checkHeadline: function(){
    return this.waitForElementPresent('@headline', 3000)
      .assert.textContains('@headline',"Checkboxes")
      .pause(1000);
  },

  clickBox1:function(){
    return this.click('@box1')
      .pause(1000);
  },

  checkBox1:function(){
    return this.expect.element('@box1').to.be.selected;
  },

  checkBox2:function(){
    return this.expect.element('@box2').to.be.selected;
  }




}]
};
