import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage{
    
private readonly itemContainer;
private readonly cart;
public readonly itemDescription;
private readonly itemName;
private readonly itemPrice;
private readonly checkoutButton;


constructor(page){
    super(page);
    this.itemContainer = ("//div[@class=\"inventory_item\"]");
    this.cart = ("//a[@class=\"shopping_cart_link\"]");
    this.checkoutButton = ("//button[@id=\"checkout\"]");
}

async addRandomItemToCart(){
  const randomItem = await this.randomListElement(this.itemContainer);
  this.getItemDetails(randomItem);
  await randomItem.locator("//button[@class=\"btn btn_primary btn_small btn_inventory \"]").click()
}

async getItemDetails(item){
  const itemDescription = await item.locator(".inventory_item_desc");
  const itemName = await item.locator(".inventory_item_name");
  const itemPrice = await item.locator(".inventory_item_price");
}

async seeCart(){
    await this.clickButton(this.cart);
}

async checkCartPage() {
  const checkoutButtonElement = await this.findElement(this.checkoutButton);
  await expect(checkoutButtonElement).toBeVisible();
}


}