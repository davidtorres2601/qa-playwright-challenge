Feature: Login SauceDemo

Scenario: Login exitoso

Given el usuario navega a SauceDemo
When el usuario inicia sesión con credenciales válidas
Then debería visualizar la lista de productos
When agrega un producto al carrito
Then el carrito debe mostrar 1 item
And el usuario cierra sesión