import { LoginLocators } from "../locators/LoginLocators";

class LoginPage {
    navigate() {
        cy.visit(Cypress.config().baseUrl);
    }

    getUsername() {
        return cy.xpath(LoginLocators.username_text).invoke('text').     // username is trimmed which was visible on the username field
            then((text) => text.replace('Username : ', '').trim());      
    }

    getPassword() {
        return cy.xpath(LoginLocators.password_text).invoke('text').       // Password is trimmed which was visible on the username & password field
            then((text) => text.replace('Password : ', '').trim());
    }
    username(){
        return cy.xpath(LoginLocators.username_text)
    }
    password(){
        return cy.xpath(LoginLocators.password_text)
    }

    enterCredentials(username_data, password_data) {
        
        cy.get(LoginLocators.username).scrollIntoView()
        .should('be.visible')
        .click({ force: true }) // click to focus
        .clear().type(username_data),{ timeout: 10000 };
        cy.get(LoginLocators.password).scrollIntoView()
        .should('be.visible')
        .click({ force: true }) // click to focus
        .clear().type(password_data),{ timeout: 10000 };
    }

    submit() {
        cy.get(LoginLocators.submitButton).click();
    }
    getErrorMessage(){
        return cy.xpath(LoginLocators.error_message_wrong_credentials)
    }
}

export default LoginPage;
