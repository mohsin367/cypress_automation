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
    login.navigate()
    login.getUsername().then(usernameText => {
        login.getPassword().then(passwordText => {
            login.enterCredentials(usernameText, passwordText);
            login.submit();
            cy.url().should("include", "/dashboard");
        });
    });

    })
    
  })
  it.only('Add new admin in the system', () => {
    admin.navigate()
    admin.click_admin()
    admin.add_button(AdminLocators.add_button,AdminLocators.addButtonText)
    admin.userRole(0)
    cy.selectDropdownOption('.oxd-select-wrapper', 'Admin', '0')   // ESS
    admin.userRole(1)
    cy.selectDropdownOption('.oxd-select-wrapper', 'Enabled', '1')
    cy.selectAutocompleteOption(
        'input[placeholder="Type for hints..."]',
        'Amelia Brown'
    )
    admin.userName(user.generateUser().firstName+' '+user.generateUser().lastName)
    let randomNumber = user.getRandomNumber()
    admin.password(0,'Qwerty'+randomNumber)
    admin.password(1,'Qwerty'+randomNumber)
    admin.add_button(AdminLocators.add_button,AdminLocators.submitButton)
      
    
  })
  it('should create a new record', () => {
    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
    // cy.get('.create-btn').click()
  })
  
}) 