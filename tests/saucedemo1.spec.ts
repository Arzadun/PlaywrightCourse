import { test, expect } from '@playwright/test';
import { LoginPage } from './pageObjects/LoginPage';
import { InventoryPage } from './pageObjects/InventoryPage';
import { CartPage } from './pageObjects/CartPage';
import { Checkout } from './pageObjects/checkout';
import { Overview } from './pageObjects/overview';

test('has title', async ({ page }, testinfo) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkout = new Checkout(page);
    const overview = new Overview(page);

    await loginPage.goto(process.env.URL);
   // await page.pause();
   await page.screenshot({path: 'screenshots/login.png', fullPage:true})
    await loginPage.login('standard_user', 'secret_sauce');
    await testinfo.attach('login',{
      body: await page.screenshot(),
      contentType: 'image/png'
    })
   /* await inventoryPage.addRandomItemToCart();
    await inventoryPage.seeCart();
    await inventoryPage.checkCartPage();

    await cartPage.clickCheckout();

    await checkout.fillCheckoutInfo("seba","seba","1234");

    await checkout.checkoutOverviewIsDisplayed();

    await overview.clickFinishButton();

    await overview.validateCheckoutCompleted();
*/
   // await page.pause();
    // Expect a title "to contain" a substring.
    

/*
    const itemContainer = await page.locator("//div[@class=\"inventory_item\"]").all();
  const randomIndex = Math.floor(Math.random() * itemContainer.length);
  const randomItem = itemContainer[randomIndex];

 

  const expectedDescription = await randomItem.locator(".inventory_item_desc").innerText();
  const expectedName = await randomItem.locator(".inventory_item_name").innerText();
  const expectedPrice = await randomItem.locator(".inventory_item_price").innerText();
  await randomItem.locator("//button[@class=\"btn btn_primary btn_small btn_inventory \"]").click()
  await page.locator("//a[@class=\"shopping_cart_link\"]").click()

  console.log(`Price: ${expectedPrice}`)
  console.log(`Name: ${expectedName}`)
  console.log(`Desc: ${expectedDescription}`)
  
    //await page.pause()

expect(page.locator("//button[@id=\"checkout\"]")).toBeVisible();

const actualName = await page.locator("//div[@class=\"inventory_item_name\"]").innerText();
const actualDescription = await page.locator("//div[@class=\"inventory_item_desc\"]").innerText();
const actualPrice = await page.locator("//div[@class=\"inventory_item_price\"]").innerText();

expect(actualName).toEqual(expectedName);
expect(actualDescription).toEqual(expectedDescription);
expect(actualPrice).toEqual(expectedPrice);


await page.locator("//button[@id=\"checkout\"]").click();

await page.locator("//input[@id=\"first-name\"]").fill("seba");
await page.locator("//input[@id=\"last-name\"]").fill("123");
await page.locator("//input[@id=\"postal-code\"]").fill("2024");

await page.locator("//input[@id=\"continue\"]").click();

await page.locator("//button[@id=\"finish\"]").click();



expect(page.locator("//button[@id=\"back-to-products\"]")).toBeVisible();
expect(page.locator("//h2[@class=\"complete-header\"]")).toBeVisible();

*/

  });

  
  
