import { infoLocators } from "../locators/myInfoLocators";

class myInfoPage {
    nameTextbox(locator,text) {
        cy.xpath(locator).clear().type(text)
    }
    expiryClick(){
        cy.xpath(infoLocators.expiryDate).clear().wait(200).type('2024-09-08')

    }
    countrySelection(){
        cy.get('.oxd-select-text').first().click({ force: true })
cy.contains('.oxd-select-option', 'Austrian').trigger('mousedown')

    }
    dob(){
        cy.xpath(infoLocators.dob).eq(1).clear({ force: true }).wait(200).type('1990-09-08')
    }
    button(locator,text){
        return cy.get(locator).contains(text).click()
    }
    fileUpload(){
        cy.xpath(infoLocators.selectFile)
  .should('exist')
  .selectFile('cypress/fixtures/test.png', { force: true })

    }
    fileSaveButton(){
        cy.xpath(infoLocators.saveFile).click()
    }

}
export default myInfoPage;