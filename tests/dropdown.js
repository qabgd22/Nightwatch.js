module.exports = {
    "dropdown tests": function(browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/drop-down.html");
        browser.click("#dropdown option:nth-child(4)"); 
        browser.pause(1 * 1000);

        for(let i = 1; i <= 4; ++i) {
            browser.click(`#dropdown option:nth-child(${i})`); //use inverted commas
            browser.pause(1 * 1000);
        }

        browser.end();

    },
};