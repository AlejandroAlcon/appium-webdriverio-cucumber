const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login.page');

Given('I open the app', async () => {
    await LoginPage.open();
});

When('I login with valid credentials', async () => {
    await LoginPage.login('valid_username', 'valid_password');
});

When('I login with invalid credentials', async () => {
    await LoginPage.login('invalid_username', 'invalid_password');
});

Then('I should see the success message', async () => {
    await expect(LoginPage.successMessage).toBeDisplayed();
});

Then('I should see the error message', async () => {
    await expect(LoginPage.errorMessage).toBeDisplayed();
});
