import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
     /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('input[id="signin-email"]') }
    get inputPassword () {
        return $('input[id="signin-password"]') }
    get btnSubmit () {
        return $('button[data-testid="Button-primary-new"]') }
    get fieldInvalidCredentials () {
        return $('p[class="error-text"]')}
    get fieldInvalidEmail () {
        return $('p[id="signin-email-helper-text"]')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username: string, password: string) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }
}

export default new LoginPage();
