class LoginPage {
    private url: string;
    private inputEmail: string;
    private inputPassword: string;
    private buttonEntrar: string;

    constructor(){
        this.url = 'https://pr-407-rocketfy-v4.surge.sh/auth/login'
        this.inputEmail = '/html[1]/body[1]/app-root[1]/app-auth[1]/div[1]/div[1]/app-login[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/art-input[1]/label[1]/input[1]';
        this.inputPassword = '//body/app-root[1]/app-auth[1]/div[1]/div[1]/app-login[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/art-input[1]/label[1]/input[1]';
        this.buttonEntrar = '//body/app-root[1]/app-auth[1]/div[1]/div[1]/app-login[1]/div[1]/div[1]/div[1]/div[1]/form[1]/button[1]'
    }

    public visitLogin(): void {
        cy.visit(this.url)
    }
    
    public login(email: string, password: string): void {
        cy.xpath(this.inputEmail).type(email);
        cy.xpath(this.inputPassword).type(password);
        cy.xpath(this.buttonEntrar).click() 
    }

}
export {LoginPage}

