import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TommyPage extends Page {

    /**
     * define selectors using getter methods
     */

    btnCloseCookiesSelector: string = 'button[data-testid="close-button"]';
    btnAanmeldenSelector: string = 'button[data-testid="sign-in-button"]';


    get btnCloseCookies() {
        return $(this.btnCloseCookiesSelector);
    }

    get btnAanmelden(){
        return $(this.btnAanmeldenSelector);
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

    async clickAanmelden() {
        await (await this.btnAanmelden).click();
    }

    /**
     * Generic solution for deleting the cookies of a new session
     */
    deleteCookies() {
        browser.deleteAllCookies();
    }
}

export default new TommyPage();
