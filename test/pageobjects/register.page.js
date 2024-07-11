class RegisterPage {
    get username() { return $('~regName'); } 
    get email() { return $('~regEmail'); } 
    get password() { return $('~regPass'); } 
    get registerButton() { return $('~regButton'); } 
    get successMessage() { return $('~successMssg'); } 
    get errorMessage() { return $('~errorMssg'); } 

    async register(username, email, password) {
        await this.username.setValue(username);
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.registerButton.click();
    }

    async open() {
        await browser.url(''); 
    }
}

module.exports = new RegisterPage();