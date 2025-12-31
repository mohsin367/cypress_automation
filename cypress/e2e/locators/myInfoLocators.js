export const infoLocators = {
    perosnalDetails: "//h6[text()='Personal Details']",
    firstName: "//input[@name='firstName']",
    middleName: "//input[@name='middleName']", // lastName
    lastName: "//input[@name='lastName']",
    expiryDate: "(//div[contains(@class,'oxd-date-input')])[1]",
    licenseExpiry: "//label[normalize-space()='License Expiry Date']/ancestor::div[contains(@class,'oxd-input-group__label-wrapper')]/following-sibling::div//i[contains(@class,'oxd-date-input-icon')]",
    dob: "//div[contains(@class,'oxd-date-input')]//input",
    saveButtonText: " Save ",
    button : "button",
    add_button : "button",
    addButtonText : " Add ",
    selectFile: "//input[@type='file']",
    saveFile: "(//button[@type='submit'])[2]"
}