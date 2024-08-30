const { chromium } = require("playwright");

(async () => {
  let browser;
  try {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.mercadolibre.com");
    await page.click("a#MX");
    await page.fill('input[name="as_word"]', "playstation 5");
    await page.press('input[name="as_word"]', "Enter");

    // Filtrar por condición "Nuevos"
    await page.click('a[aria-label^="Nuevo"]');
    // Filtrar por ubicación "Cdmx"
    await page.click('a[aria-label^="Distrito Federal"]');

    // Abrir el menú desplegable
    await page.click('button[aria-labelledby*=":R2m55e6:-label"]');
    await page.waitForSelector(".ui-search-result__content-wrapper");
    await page.click('button[aria-labelledby*=":R2m55e6:-label"]');
    await page.click('li[data-key="price_asc"]');
    await page.waitForSelector(".ui-search-result__content-wrapper");

    // Obtener los primeros 5 productos
    const products = await page.$$eval(
      ".ui-search-result__wrapper",
      (items) => {
        return items.slice(0, 5).map((item) => {
          const nameElement = item.querySelector(".ui-search-item__title");
          const priceElement = item.querySelector(
            ".ui-search-price__part--medium"
          );
          return {
            name: nameElement ? nameElement.innerText : "Nombre no disponible",
            price: priceElement
              ? priceElement.innerText
              : "Precio no disponible",
          };
        });
      }
    );

    console.log("Primeros 5 productos:");
    products.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - $${product.price}`);
    });
  } catch (error) {
    console.error("Error durante la ejecución del script:", error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();
