export class Button{

    //Selectors
    static button = (innertext: string):string => {return "//button[contains(text(), '"+innertext+"')]"}

    //Action methods
    static ClickButton(innertext:string){
        cy.xpath(this.button(innertext))
        .click();
    }
}