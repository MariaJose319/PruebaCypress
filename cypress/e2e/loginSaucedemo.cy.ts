import { LoginPage } from './pageSauceDemo/index';

const loginPage = new LoginPage();

describe('Valid email and password', () => {
    it('Then the user can visit the inventory page', () => {
       loginPage.visitSaucedemo();
       loginPage.login('standard_user','secret_sauce');
       loginPage.getTitle().should('have.text', 'Products')     
    });
});

describe('Invalid email and password', () => {
    it('Then the user can not visit the inventory page', () => {
       loginPage.visitSaucedemo();
       loginPage.login('maria','123');
       loginPage.getErrorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')     
    });
});


