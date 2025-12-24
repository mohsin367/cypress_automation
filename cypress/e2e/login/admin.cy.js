import { AdminLocators } from "../locators/AdminLocators";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import HelperFunction from "../utils/userGenerator";



describe("Add Admin Tests", () => {
    const login = new LoginPage()
    const admin = new AdminPage()
    const user = new HelperFunction()
    
beforeEach(() => {
    
    cy.session('user-session', () => {
    login.navigate(Cypress.config().dashboardUrl)
    login.getUsername().then(usernameText => {
        login.getPassword().then(passwordText => {
            login.enterCredentials(usernameText, passwordText);
            login.submit();
            cy.url().should("include", "/dashboard");
        });
    });

    })
    
  })
  let firstName = user.generateUser().firstName
  let lastName = user.generateUser().lastName
  let employeeName = firstName+' '+lastName
  it('Add new admin in the system', () => {
    admin.navigate(Cypress.config().dashboardUrl)
    admin.click_admin()
    admin.button(AdminLocators.add_button,AdminLocators.addButtonText)
    admin.userRole(0)
    cy.selectDropdownOption('.oxd-select-wrapper', 'Admin', '0')   // ESS
    admin.userRole(1)
    cy.selectDropdownOption('.oxd-select-wrapper', 'Enabled', '1')
    cy.selectAutocompleteOption(
        'input[placeholder="Type for hints..."]',
        'Amelia Brown'
    )
    admin.userName(employeeName)
    let randomNumber = user.getRandomNumber()
    admin.password(0,'Qwerty'+randomNumber)
    admin.password(1,'Qwerty'+randomNumber)
    admin.button(AdminLocators.add_button,AdminLocators.submitButton)
    cy.contains('Successfully Saved', { timeout: 5000 })
  .should('exist')
  
    
  })
  it('should check if record is successfully created and availabel on website', () => {
    admin.navigate(Cypress.config().adminUrl)
    admin.searchUsername(employeeName)
    admin.userRole(0)
    cy.selectDropdownOption('.oxd-select-wrapper', 'Admin', '0')
    admin.userRole(1)
    cy.selectDropdownOption('.oxd-select-wrapper', 'Enabled', '1')
    admin.scrollUp()
    admin.button(AdminLocators.add_button,AdminLocators.searchButtonText)
    admin.userSearch(employeeName)
  })
  
}) 