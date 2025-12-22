import { AdminLocators } from "../locators/AdminLocators";

class AdminPage {
    click_admin(){
        return cy.xpath(AdminLocators.admin_click_path).click()
    }
    navigate() {
        cy.visit(Cypress.config().dashboardUrl);
    }
    add_button(locator,text){
        return cy.get(locator).contains(text).click()
    }
    userRole(index){
        cy.xpath(AdminLocators.userxpath).eq(index)
        .click().wait(200)

    }
    employeeNameInput(name){
        cy.get(AdminLocators.userNameTextbox).type(name)
    }
    userName(text){
        cy.xpath(AdminLocators.userNameTextbox).click().type(text)
    }
    password(index,pass){
        cy.xpath(AdminLocators.PasswordBox).eq(index).type(pass)
    }
    

}

export default AdminPage;