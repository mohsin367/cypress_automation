import { AdminLocators } from "../locators/AdminLocators";

class AdminPage {
    click_admin(){
        return cy.xpath(AdminLocators.admin_click_path).click()
    }
    navigate(url) {
        cy.visit(url);
    }
    button(locator,text){
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
    searchUsername(text){
        
        cy.xpath(AdminLocators.searchUsername).scrollIntoView().type(text)
        cy.scrollTo('top')
    }
    scrollUp(){
        cy.scrollTo('top')
    }
    userSearch(dynamicText){
        cy.xpath(AdminLocators.cellByText(dynamicText)).wait(200)
  .should('be.visible')
    }
    

}

export default AdminPage;