const { expect } = require('@playwright/test')

class ProductsPage{

constructor(page){
 this.page = page
}

async validateProducts(){

 await expect(
  this.page.locator('.title')
 ).toHaveText('Products')

}

async addProduct(){

 await this.page
  .locator('#add-to-cart-sauce-labs-backpack')
  .click()

}

async validateCart(){

 await expect(
  this.page.locator('.shopping_cart_badge')
 ).toHaveText('1')

}

async logout(){

 await this.page.locator('#react-burger-menu-btn').click()
 await this.page.locator('#logout_sidebar_link').click()

 await this.page.waitForTimeout(2000)
}

}

module.exports = ProductsPage