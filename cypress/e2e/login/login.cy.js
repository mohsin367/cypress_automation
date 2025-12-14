import LoginPage from "../pages/LoginPage";


describe("Login Tests", () => {
    const login = new LoginPage();
    beforeEach(function () {
        cy.fixture("loginData").as("data");
        login.navigate();
    });
    // Positive test case
    it("Valid Login with admin credentials", () => {

        // Extract username and password from page
        login.getUsername().then(usernameText => {
            login.getPassword().then(passwordText => {
                login.enterCredentials(usernameText, passwordText);
                login.submit();
                cy.url().should("include", "/dashboard");
            });
        });
    });
    // Negative test case invalid username and valid password
    it("Invalid username & valid password", function () {
        login.getPassword().then(passwordText => {
            login.enterCredentials(this.data.invalidUser.username, passwordText);
            login.submit();
            login.getErrorMessage().should("be.visible").and("contain", "Invalid credentials")
        })
    });
    // Negative test case valid username and Invalid password
    it("valid username & Invalid password", function () {
        login.getUsername().then(usernameText => {
            login.enterCredentials(usernameText, this.data.invalidUser.password);
            login.submit();
            login.getErrorMessage().should("be.visible").and("contain", "Invalid credentials")
        })
    });
    // Negative test case Invalid username and Invalid password
    it("Invalid username & Invalid password", function () {
        login.enterCredentials(this.data.invalidUser.username, this.data.invalidUser.password);
        login.submit();
        cy.wait(1500)
        login.getErrorMessage().should("be.visible").and("contain", "Invalid credentials")

    });
    it("Empty username field & Invalid password", function () {
        login.password(this.data.validUser.password)
        login.submit();
        login.emptyErrorMessage().should("be.visible").and("contain", "Required")

    });
    it("Valid username & Empty password field", function () {
        login.username(this.data.validUser.username)
        login.submit();
        login.emptyErrorMessage().should("be.visible").and("contain", "Required")

    });
    it("Empty username field & Empty password field", function () {
        login.submit();
        login.emptyErrorMessage().should("be.visible").and("contain", "Required").should('have.length', '2')
    });
});


