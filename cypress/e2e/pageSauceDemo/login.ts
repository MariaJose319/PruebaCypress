class LoginPage {
    private url: string;
    private userInput: string;
    private passwordInput: string;
    private loginButton: string;
    private inventoryTitle: string;
    private errorMessage: string;

    constructor() {
        this.url = 'https://www.saucedemo.com/'
        this.userInput = '[data-test=username]';
        this.passwordInput = '[data-test=password]';
        this.loginButton = '[data-test=login-button]';
        this.inventoryTitle = '.header_secondary_container > .title';
        this.errorMessage = '[data-test=error]'
    }

    public visitSaucedemo(): void {
        cy.visit(this.url)
    }
    
    public login(user: string, password: string): void {
        cy.get(this.userInput).type(user);
        cy.get(this.passwordInput).type(password);
        cy.get(this.loginButton).click()
    }

    public getTitle(): any {
        return cy.get(this.inventoryTitle)
    }

    public getErrorMessage (): any {
        return cy.get(this.errorMessage)
    }
}

export {LoginPage};
