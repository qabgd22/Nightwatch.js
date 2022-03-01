//Check the checkboxes

module.exports = {
   '@tags': ['checkbox'],
   'Checkbox' : function (browser) {

    const checkbox = browser.page.herokuappCheckboxPage();

    checkbox.navigate()
    checkbox.checkHeadline()
    checkbox.clickBox1()
    checkbox.checkBox1()
    checkbox.checkBox2()

    browser.end();
      }
};
