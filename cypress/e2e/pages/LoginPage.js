import locators from "../locators/loginLocators.json";

class LoginPage {
    navigate() {
        cy.visit("/");
    }

    getUsername() {
        return cy.xpath(locators.username).invoke('text');
    }

    getPassword() {
        return cy.xpath(locators.password).invoke('text');
    }


    enterCredentials(username, password) {
        cy.get(locators.usernameInput).type(username);
        cy.get(locators.passwordInput).type(password);
    }

    submit() {
        cy.get(locators.loginButton).click();
    }
}

export default LoginPage;
