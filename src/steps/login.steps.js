const { Given, When, Then } = require('@cucumber/cucumber')

const LoginPage = require('../pages/LoginPage')
const ProductsPage = require('../pages/ProductsPage')

let loginPage
let productsPage

Given('el usuario navega a SauceDemo', async function () {

loginPage = new LoginPage(this.page)
productsPage = new ProductsPage(this.page)

await loginPage.navigate()

})

When('el usuario inicia sesión con credenciales válidas', async function () {

await loginPage.login(
 'standard_user',
 'secret_sauce'
)

})

Then('debería visualizar la lista de productos', async function () {

await productsPage.validateProducts()

})

When('agrega un producto al carrito', async function () {

await productsPage.addProduct()

})

Then('el carrito debe mostrar 1 item', async function () {

await productsPage.validateCart()

})

Then('el usuario cierra sesión', async function () {

await productsPage.logout()

})