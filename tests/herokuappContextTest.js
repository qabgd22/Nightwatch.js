//Right-click in the box. It will trigger a JavaScript alert.

module.exports = {
   '@tags': ['herokuappCon'],
   'Context menu' : function (browser) {

     const context = browser.page.herokuappContextPage();


     context.navigate()
            .checkHead()
     browser.rightClick('div#hot-spot')
            .pause(1000)
            .acceptAlert()
            .end();
    }
};
