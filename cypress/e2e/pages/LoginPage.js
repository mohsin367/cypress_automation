import { LoginLocators } from "../locators/LoginLocators";

class LoginPage {
    navigate() {
        cy.visit(Cypress.config().baseUrl);
    }

    getUsername() {
        return cy.xpath(LoginLocators.username_text).invoke('text').
            then((text) => text.replace('Username : ', '').trim());
    }

    getPassword() {
        return cy.xpath(LoginLocators.password_text).invoke('text').
            then((text) => text.replace('Password : ', '').trim());
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
}

export default LoginPage;
