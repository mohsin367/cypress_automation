import LoginPage from "../../pages/LoginPage";

describe("Login Tests", () => {
    it("Valid Login with dynamic credentials", () => {
        const login = new LoginPage();
        login.navigate();

        // Extract username and password from page
        login.getUsername().then(usernameText => {
            login.getPassword().then(passwordText => {
                cy.log(usernameText)
                cy.log(passwordText)
                // login.enterCredentials(usernameText.trim(), passwordText.trim());
                // login.submit();
                // cy.url().should("include", "/dashboard");
            });
        });
    });
});
