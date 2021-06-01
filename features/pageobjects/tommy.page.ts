import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TommyPage extends Page {

    /**
     * define selectors using getter methods
     */
    btnCloseCookiesSelector: string = 'button[data-testid="close-button"]';
    btnLoginSelector: string = 'button[data-testid="sign-in-button"]';

    get btnCloseCookies() {
        return $(this.btnCloseCookiesSelector);
    }

    get btnLogin(){
        return $(this.btnLoginSelector);
    }

    /**
     * Generic navigation to the website
     */
    open () {
        return super.open('https://nl.tommy.com/');
    }

    /**
     * Will close the cookies
     */
    async closeCookies() {
        await (await this.btnCloseCookies).click();
    }

    async clickLogin() {
        await (await this.btnLogin).click();
    }

    /**
     * Generic solution for deleting the cookies of a new session
     */
    deleteCookies() {
        browser.deleteAllCookies();
    }
}

export default new TommyPage();
