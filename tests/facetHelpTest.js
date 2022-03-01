module.exports = {

   'Check help button' : function (browser) {
      const help = browser.page.facetHelpPage();


          help.navigate()
       browser.windowMaximize()
          help.verifyhomepage()
              .clickonhelp()
              .clickloop()
       browser.click('img[onclick="functionManualeClose()"]')
              .pause(2000)
              .end();
      }
};
