module.exports = {
  '@tags': ['nw'],
  'NW test on Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.titleEquals('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'Nightwatch JS')
      .waitForElementVisible('input[name="btnK"]', 1000)
      .click('input[name="btnK"]')
      .pause(1000)
      .useXpath()
      .assert.textContains('/html/body/div[7]/div/div[10]/div/div[2]/div[2]/div/div/div[1]/div/div/div[1]/div/div/div[1]/div/a/h3',
        'Nightwatch.js | Node.js powered End-to-End testing framework')
      .end()
  }
}
