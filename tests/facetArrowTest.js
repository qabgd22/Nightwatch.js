module.exports = {

   'Check slider' : function (browser) {
      const wp = browser.page.facetHelpPage();
      const arr = browser.page.facetArrowPage();

           arr.navigate()
       browser.windowMaximize()
            wp.verifyhomepage()
           arr.gof()
           arr.gob()
       browser.getText('div#testo_slider1066', function(result) {
       console.log(result.value + "--" + 
       "is the title of the first slide. Slider buttons are functional.");
    })
       browser.end()

      }
};
