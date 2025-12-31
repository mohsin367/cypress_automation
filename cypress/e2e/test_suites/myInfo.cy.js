import { AdminLocators } from "../locators/AdminLocators";
import { infoLocators } from "../locators/myInfoLocators";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import myInfoPage from "../pages/myInfoPage";
import HelperFunction from "../utils/userGenerator";



describe("Update personal Information", { retries: 1 },() => {   // Retries added for only this  spec
    const login = new LoginPage()
    const admin = new AdminPage()
    const user = new HelperFunction()
    const info = new myInfoPage()
    
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
  let middleName = user.generateUser().firstName
  let lastName = user.generateUser().lastName
  let employeeName = firstName+' '+lastName
  it('Update partial textbox on personal Information page and also upload new attachement', () => {
    admin.navigate(Cypress.config().myInfo)
    info.nameTextbox(infoLocators.firstName, firstName)
    info.nameTextbox(infoLocators.middleName, middleName)
    info.nameTextbox(infoLocators.lastName, lastName)
    info.expiryClick()
    info.countrySelection()
    info.dob()
    info.button(infoLocators.button,infoLocators.saveButtonText)
    cy.get('#oxd-toaster_1', { timeout: 5000 })
  .should('exist')
    info.button(infoLocators.button,infoLocators.addButtonText)
    info.fileUpload()
    info.fileSaveButton()
    cy.get('#oxd-toaster_1', { timeout: 5000 })
  .should('exist')
    
    

  
    
  })
  
  
}) 