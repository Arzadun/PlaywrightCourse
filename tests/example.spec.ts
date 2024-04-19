import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('test 3', async ({ page }) => {

  await page.goto('https://www.mercadolibre.com.ar/');

  await page.locator("//*[@id=\"cb1-edit\"]").fill("iphone")

  await page.keyboard.press("Enter")

  await expect(page.locator("//h1[contains(text(),\"Iphone\")]")).toBeVisible();

 

  const titulos = await page.locator("//ol[@class=\"ui-search-layout ui-search-layout--stack shops__layout\"]//li//h2").allInnerTexts();
console.log("titles", titulos[1])
  for(let i=0; i < titulos.length;i++){
    console.log("The title is: ", titulos[i]);
  }

  

  //await page.pause()
  /*
  await page.goto('https://www.mercadolibre.com.ar/');

  

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();*/
});
