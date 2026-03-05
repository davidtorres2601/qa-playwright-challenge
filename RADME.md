# QA Automation Challenge – Playwright + Cucumber

## 📌 Descripción

Este proyecto automatiza un flujo funcional en la web **SauceDemo** utilizando **Playwright, Cucumber y Node.js**, aplicando buenas prácticas de automatización como **Page Object Model (POM)** y separación de responsabilidades.

El objetivo es validar el flujo principal de usuario:

1. Navegar a la página de SauceDemo
2. Iniciar sesión con credenciales válidas
3. Validar que se muestran los productos
4. Agregar un producto al carrito
5. Validar que el carrito contiene 1 ítem
6. Cerrar sesión

---

# 🧰 Tecnologías utilizadas

* **Node.js**
* **Playwright**
* **Cucumber (BDD)**
* **JavaScript**
* **Page Object Model (POM)**

---

# 📂 Estructura del proyecto

```
qa-playwright-challenge
│
├ features
│   └ login.feature
│
├ src
│   ├ hooks
│   │   └ hooks.js
│   │
│   ├ pages
│   │   ├ LoginPage.js
│   │   └ ProductsPage.js
│   │
│   └ steps
│       └ login.steps.js
│
├ playwright.config.js
├ package.json
└ README.md
```

---

# 🧪 Arquitectura de pruebas

Se utilizó el patrón **Page Object Model (POM)** para separar la lógica de interacción con la interfaz de usuario de los steps de Cucumber.

* **Steps** → Contienen la lógica del escenario BDD
* **Pages** → Contienen las interacciones con la UI
* **Hooks** → Manejan el ciclo de vida del navegador

Esto permite:

* Mayor reutilización de código
* Tests más mantenibles
* Separación clara de responsabilidades

---

# 🧠 Decisiones técnicas

- Se utilizó **Playwright** por su capacidad de auto-waiting y estabilidad en automatización UI.
- **Cucumber** se utilizó para implementar BDD y hacer los escenarios más legibles.
- Se aplicó **Page Object Model (POM)** para separar la lógica de la UI de los steps.
- Se utilizaron **locators específicos** para evitar pruebas frágiles y mejorar la mantenibilidad de los tests.

---

# 📋 Requisitos previos

- Node.js 18+
- npm

---

# ⚙️ Instalación

Clonar el repositorio:

```bash
git clone <repo-url>
cd qa-playwright-challenge
```

Instalar dependencias:

```bash
npm install
```

Instalar navegadores de Playwright:

```bash
npx playwright install
```

---

# ▶️ Ejecutar pruebas

Ejecutar todos los tests:

```bash
npm test
```

El flujo automatizado abrirá el navegador y ejecutará el escenario definido en Cucumber.

### Nota

Las pruebas pueden ejecutarse en modo **headed** (navegador visible) o **headless** modificando la configuración en `playwright.config.js`.

---

# 🔍 Buenas prácticas aplicadas

* Uso de **Page Object Model**
* Separación de **steps, pages y hooks**
* Uso de **locators específicos**
* Uso de **auto-waiting de Playwright**
* Uso de **assertions con expect**

Nota: Se utilizó un `waitForTimeout` únicamente con fines demostrativos para visualizar el flujo antes de cerrar el navegador. 
En entornos reales se recomienda evitar waits estáticos y utilizar las capacidades de auto-waiting de Playwright.

---

# 🚀 Posibles mejoras

* Integración con **Allure Report o HTML Report**
* Ejecución en **CI/CD (GitHub Actions)**
* Ejecución paralela de pruebas
* Implementación de **data driven testing**
* Captura automática de **screenshots en fallos**

---

# 👨‍💻 Autor

David Torres
QA Automation Engineer
