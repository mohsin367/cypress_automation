# 🧪 Cypress Automation Test Cases

This folder contains automated test cases developed using **Cypress**.
The automation framework follows **ISTQB best practices** and **industry-standard design patterns** to ensure reliability, maintainability, and scalability.

## 📂 Project Structure

cypress/
├── e2e/
│ ├── locators/
│ │ ├── AdminLocators.js
│ │ ├── LoginLocators.js
│ │ └── myInfoLocators.js
│ │
│ ├── pages/
│ │ ├── AdminPage.js
│ │ ├── LoginPage.js
│ │ └── myInfoPage.js
│ │
│ ├── test_suites/
│ │ ├── admin.cy.js
│ │ ├── login.cy.js
│ │ └── myInfo.cy.js
│ │
│ ├── utils/
│ │ └── userGenerator.js
│ │
│ └── readMe.md
│
├── fixtures/
│ ├── loginData.json
│ ├── example.json
│ └── test.png
│
├── reports/
│ └── screenshots/
│
├── support/
│ ├── commands.js
│ └── e2e.js
│
├── mochawesome-report/
│ └── mochawesome.html
│
├── cypress.config.js
├── package.json
└── package-lock.json



---

## 🎯 Test Coverage

### 🔐 Login Module
- Valid user login
- Invalid credentials validation
- Required field validation
- Session handling

### 👤 My Info Module
- Update personal details
- Date of birth entry
- Nationality selection (custom dropdown)
- Profile image upload

### 🛠 Admin Module
- Add new user
- Search user
- Delete user

---

## ⚙️ Framework Design & Standards

- Page Object Model (POM)
- Separate locator files for better maintainability
- Custom Cypress commands
- Utility functions for dynamic data
- No hard-coded waits (`cy.wait`)
- Stable CSS and XPath selectors

---

## 📁 Key Folders Explained

### `locators/`
Contains all element selectors separated by modules for easy maintenance.

### `pages/`
Contains page-level actions and business logic.

### `test_suites/`
Contains actual test cases grouped by application modules.

### `utils/`
Contains helper utilities such as dynamic user/data generation.

### `fixtures/`
Stores test data and files used during execution.

---

## 📸 Screenshots & Videos

- Screenshots are automatically captured on test failure
- Execution videos are recorded by Cypress

**Location:**

cypress/screenshots/
cypress/videos/


---

## 📊 Mochawesome Reporting

Mochawesome HTML reporting is configured.

### Generate Report
```bash
npx cypress run

## Report Location:
cypress/mochawesome-report/mochawesome.html


📐 ISTQB Best Practice Alignment

| ISTQB Principle    | Implementation           |
| ------------------ | ------------------------ |
| Test Independence  | Modular test suites      |
| Maintainability    | POM & separate locators  |
| Risk-Based Testing | Core flows automated     |
| Repeatability      | CI/CD compatible         |
| Traceability       | Clear naming conventions |


▶️ How to Run Tests

Run all test suites:
npx cypress run


Run a specific module:
npx cypress run --spec "cypress/e2e/test_suites/login.cy.js"


Open Cypress Test Runner:
npx cypress open


🧩 Notes for Clients

Framework is easy to extend

Suitable for CI/CD pipelines

Clean and readable code

Real-world automation scenarios covered



👨‍💻 Author

Mohsin
QA Automation Engineer
Selenium | Cypress | Appium | API Automation | Playwright