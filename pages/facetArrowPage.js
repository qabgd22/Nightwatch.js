module.exports = {
url:'https://catalogo.facet.eu/EN',


elements: {
  forward:{selector: 'div#imageSlider_nbf'},
  back: {selector: 'div#imageSlider_nbb'}

},

commands: [{

    gof: function(){
      for (let i=1; i<=2; i++){
        this.waitForElementPresent('@forward', 3000, "Forward arrow clicked " + i +".")
            .click('@forward')
            .pause(1000);
      }
    },

    gob: function(){
      for (let i=2; i>=1; i--){
        this.waitForElementPresent('@back', 3000, "Back arrow clicked " + i +".")
        this.click('@back')
            .pause(1000);
      }

    }


}]
};
