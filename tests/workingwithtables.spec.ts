import { test, expect } from '@playwright/test';

test('tablas', async ({ page }) => {
  await page.goto('https://cosmocode.io/automation-practice-webtable/');

const tableContainer = await page.locator("//*[@id='countries']");

//*[@id="countries"]//tr[2]/td[2]

const rows = await tableContainer.locator("//tr").all();

console.log(rows.length);

const countries:Country[] = [];


for ( let row of rows){
    let country: Country ={
        name: await row.locator('//td[2]').innerText(),
        capital: await row.locator('//td[3]').innerText(),
        currency: await row.locator('//td[4]').innerText(),
        primaryLanguage: await row.locator('//td[5]').innerText()
    }
    
    countries.push(country);
}

const a = countries.filter(country => country.capital === "Lima");
console.log(a);

//console.log(countries);

/*
const row1 = rows.at(1);
const countryName = await row1?.locator('//td[2]').innerText();
const countryCapital = await row1?.locator('//td[3]').innerText();
const countryCurrency = await row1?.locator('//td[4]').innerText();

console.log(countryName, countryCapital, countryCurrency);*/

interface Country{
    name:string,
    capital:string,
    currency:string,
    primaryLanguage:string 
}

  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Playwright/);
});
