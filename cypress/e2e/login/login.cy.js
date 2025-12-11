import LoginPage from "../pages/LoginPage";


describe("Login Tests", () => {
    it("Valid Login with dynamic credentials", () => {
        const login = new LoginPage();
        login.navigate();

        // Extract username and password from page
        login.getUsername().then(usernameText => {
            login.getPassword().then(passwordText => {
               
                
                login.enterCredentials(usernameText, passwordText);
                login.submit();
                cy.url().should("include", "/dashboard");
            });
        });
    });
});


// describe('Test XPath', () => {
//     it('should work', () => {
//       cy.visit('https://example.com')
//       cy.xpath("//h1").should('exist')
//     })
//   })