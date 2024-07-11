const { Given, When, Then } = require('@cucumber/cucumber');
const RegisterPage = require('../pageobjects/register.page');

Given('I open the app', async () => {
    await RegisterPage.open();
});

When('I register with valid data', async () => {
    await RegisterPage.register('new_user', 'email@domain.com', 'secure_password');
});

When('I register with invalid data', async () => {
    await RegisterPage.register('new_user', 'invalid_email', 'secure_password');
});

Then('I should see the registration success message', async () => {
    await expect(RegisterPage.successMessage).toBeDisplayed();
});

Then('I should see the registration error message', async () => {
    await expect(RegisterPage.errorMessage).toBeDisplayed();
});