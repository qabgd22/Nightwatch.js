module.exports = {
url:'https://catalogo.facet.eu/EN',


elements: {
  cat: {selector: 'div.templateTitle'},
  buttonh: {selector:'img#HeaderMenu_DXI8_Img.dxm-image.dx-vam'},
  headerMan: {selector: 'td.headerManuale'},
  closep: {selector: 'img[onclick="functionManualeClose()"]'}


},

commands: [{
    verifyhomepage: function(){
      return this.waitForElementPresent('@cat', 3000, "Catalog is opened");
    },

    clickonhelp: function(){
      return this.click('@buttonh')
                 .waitForElementPresent('@headerMan',3000,"User manual is present");
    },

    clickloop: function(){
      for (let i=1; i<=7; i++){
        this.click('div#pulsante'+i)
            .waitForElementPresent('div#manuale_'+i, 3000, "Manual"+i+" is visible")
            .pause(1000);
      }
    }


}]
};
