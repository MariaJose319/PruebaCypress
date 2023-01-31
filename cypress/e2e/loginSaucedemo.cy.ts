import { LoginPage } from './pageSauceDemo/index';

const loginPage = new LoginPage();

describe('Valid user and password', () => {
    it('Then the user can visit the inventory page', () => {
       loginPage.visitSaucedemo();
       loginPage.login('standard_user','secret_sauce');
       loginPage.getTitle().should('have.text', 'Products')
       cy.title().should('eq','Swag Labs')     
    });
});

describe('Invalid usar and password', () => {
    it('Then the user can not visit the inventory page', () => {
       loginPage.visitSaucedemo();
       loginPage.login('maria','123');
       loginPage.getErrorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')     
    });
});

describe('Valid user and invalid password', () => {
    it('Then the user can not visit the inventory page', () => {
       loginPage.visitSaucedemo();
       loginPage.login('standard_user','123');
       loginPage.getErrorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')     
    });
});

describe('Invalid user and valid password', () => {
    it('Then the user can not visit the inventory page', () => {
       loginPage.visitSaucedemo();
       loginPage.login('maria','secret_sauce');
       loginPage.getErrorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service') 
    })
});

describe('Login without user and password', () => {
    it('Then the user can not visit the inventory page', () => {
       loginPage.visitSaucedemo();
       loginPage.loginWithoutUserPassword();
       loginPage.getErrorMessage().should('have.text', 'Epic sadface: Username is required') 
    })
});

describe('login with blank', () => {
    it('Then the user can not visit the inventory page', () => {
       loginPage.visitSaucedemo();
       loginPage.login(' ',' ');
       loginPage.getErrorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service') 
    })
});


