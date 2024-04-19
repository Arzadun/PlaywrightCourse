import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class Checkout extends BasePage{

    private readonly firstName;
    private readonly lastName;
    private readonly zipCode;
    private readonly continueButton;
    private readonly finishButton;

    constructor(page){
        super(page);
        this.firstName = ("//input[@id=\"first-name\"]");
        this.lastName = ("//input[@id=\"last-name\"]");
        this.zipCode = ("//input[@id=\"postal-code\"]");
        this.continueButton = ("//input[@id=\"continue\"]");
        this.finishButton = ("//button[@id=\"finish\"]");
    }

async fillCheckoutInfo(firstname, lastname, zip){
    await this.fillInput(this.firstName, firstname);
    await this.fillInput(this.lastName, lastname);
    await this.fillInput(this.zipCode, zip);
    await this.clickButton(this.continueButton);
}

async checkoutOverviewIsDisplayed(){
    const finishButtonElement = await this.findElement(this.finishButton);
    await expect(finishButtonElement).toBeVisible();
}

}