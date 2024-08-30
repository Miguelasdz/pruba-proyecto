# Scraper de MercadoLibre con Playwright

Este proyecto utiliza [Playwright](https://playwright.dev) para automatizar la búsqueda de "PlayStation 5" en MercadoLibre. El script realiza las siguientes acciones:

1. Navega a MercadoLibre.
2. Realiza una búsqueda de "PlayStation 5".
3. Filtra los resultados por condición "Nuevos".
4. Filtra por ubicación "Cdmx".
5. Ordena los resultados por el precio más bajo.
6. Obtiene los primeros 5 productos mostrando su nombre y precio.

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tuusuario/mercadolibre-scraper.git
