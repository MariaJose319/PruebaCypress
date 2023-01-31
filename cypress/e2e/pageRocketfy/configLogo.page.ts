class ConfigLogo {
    private irTiendaButton: string;
    private logoInput: string;

    constructor(){
        this.irTiendaButton = '//button[contains(text(),"Ir a tienda")]';
        this.logoInput = '//body/app-root[1]/app-app[1]/div[1]/app-storefront[1]/app-customization[1]/div[1]/div[3]/div[1]/div[2]/input[1]'
    }

    public goStore(): void {
        cy.xpath(this.irTiendaButton).click()
    }

    public changeLogo():void {
        cy.xpath(this.logoInput).invoke('show');
        cy.xpath(this.logoInput).selectFile('IMG_20210531_173849_300.jpg');
    }
}
export{ConfigLogo}

