import { BasePage } from "./BasePage";

export class CartPage extends BasePage{
    
    private readonly actualPrice;
    private readonly actualDescription;
    private readonly actualName;
    private readonly checkoutButton;

    constructor(page){
        super(page);
        this.actualPrice = ("//div[@class=\"inventory_item_price\"]");
        this.actualDescription = ("//a[@class=\"shopping_cart_link\"]");
        this.actualName = ("//div[@class=\"inventory_item\"]");
        this.checkoutButton = ("//button[@id=\"checkout\"]");
    }

    async clickCheckout(){
        this.clickButton(this.checkoutButton);
    }
}