import { Locator, Page } from "@playwright/test";

export class BasePage{

    private readonly page;
    constructor(page){
        this.page = page;
    }

    async randomListElement(locator){
        const list = await this.page.locator(locator).all();
        const randomIndex = Math.floor(Math.random() * list.length);
        return list[randomIndex];
    }

    async fillInput(locator,text){
        await this.page.fill(locator, text);
    }
   
    async goto(url){
        await this.page.goto(url);
    }

    async clickButton(locator) {
        await this.page.click(locator);
      }
    
    async waitForNavigation() {
        await this.page.waitForNavigation();
    }

    async findElement(locator: string): Promise<Locator> {
        const element = await this.page.locator(locator);
        return element;
    }

    
}
