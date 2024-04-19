import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class Overview extends BasePage{

private readonly finishButton;
private readonly backButton;
private readonly completeHeader;

constructor(page){
    super(page);
    this.finishButton = ("//button[@id=\"finish\"]");
    this.backButton = ("//button[@id=\"back-to-products\"]");
    this.completeHeader = ("//h2[@class=\"complete-header\"]");
}

async clickFinishButton(){
    await this.clickButton(this.finishButton);
}

async validateCheckoutCompleted(){
    const header = await this.findElement(this.completeHeader);
    const backHomeButton = await this.findElement(this.backButton);
    await expect(header).toBeVisible();
    await expect(backHomeButton).toBeVisible();
}

}