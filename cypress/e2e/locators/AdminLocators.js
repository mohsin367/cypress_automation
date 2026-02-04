export const AdminLocators = {
    admin_click_path : "//a[@href='/web/index.php/admin/viewAdminModule']",
    add_button : "button",
    addButtonText : " Add ",
    userxpath : "//div[contains(@class,'oxd-select-wrapper')]",
    userRolePath : "//div[contains(@class,'oxd-select-text-input')]",
    employeeName: "//input[@placeholder='Type for hints...']",
    userNameTextbox: "(//input[@class='oxd-input oxd-input--active'])[2]",
    PasswordBox: "//input[@type='password']",
    submitButton: " Save ",
    searchUsername: "(//input[@class='oxd-input oxd-input--active'])[2]",
    searchButtonText: " Search ",
    cellByText: (text) => `//div[contains(@class,'oxd-table-cell') and contains(@class,'oxd-padding-cell')]//div[contains(text(),'${text}')]`,
    dropDownLocators: ".oxd-select-wrapper"
      
    
}

