//Check that the home pages in all languages are displayed correctly.

module.exports = {

   'Check languages' : function (browser) {

    browser.url('https://catalogo.facet.eu/IT')
           .maximizeWindow()
           .title(function(result) {
    console.log("IT"+" -- "+result.value);
    })
           .pause(2000)
           .url('https://catalogo.facet.eu/EN')
           .title(function(result) {
   console.log("ENG"+" -- "+result.value);
   })
           .pause(2000)
           .url('https://catalogo.facet.eu/FR')
           .title(function(result) {
   console.log("FR"+" -- "+result.value);
   })
           .pause(2000)
           .url('https://catalogo.facet.eu/DE')
           .title(function(result) {
    console.log("DE"+" -- "+result.value);
   })
            .pause(2000)
            .url('https://catalogo.facet.eu/ES')
            .title(function(result) {
    console.log("ES"+" -- "+result.value);
    })
           .assert.titleEquals('Catálogo Facet')
           .pause(2000)
           .end();
        }
};
