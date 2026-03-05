const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber')
const { chromium } = require('playwright')

setDefaultTimeout(60000)

Before(async function () {

 this.browser = await chromium.launch({
  headless:false,
  slowMo:800
 })

 this.context = await this.browser.newContext()

 this.page = await this.context.newPage()

})

After(async function () {

 if (this.browser) {
  await this.browser.close()
 }

})