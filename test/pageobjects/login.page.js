class LoginPage {
    get username() { return $('~name'); } 
    get password() { return $('~pass'); } 
    get loginButton() { return $('~Button'); } 
    get successMessage() { return $('~successMssg'); } 
    get errorMessage() { return $('~errorMssg'); } 

    async login(username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }

    async open() {
        await browser.url(''); 
    }
}

module.exports = new LoginPage();