import Page from './page';

const HEADER_TEXT_NL = 'HOI!';

class MyAccount extends Page {
    get headerMyAccount() {
        return $('span[class="header__link account__icon header__link--name"]');
    }
    get headingTitleMyAccount() {
        return $('h1[class="my-account__title"]');
    }
    get linkAddressBook() {
        return $('div[class="overview__items"] > a:nth-child(3) > h3');
    }
    get verifyMyAccountHeadings () {
        return $('span[class="header__link account__icon header__link--name"]');
    }
    get closeNewsLetter (){
        return $('button[class="newsletter__close button--close"]');
    }

    async verifyMyAccountHeaderText() {
        await expect(this.headerMyAccount).toHaveText(HEADER_TEXT_NL);
    }

    async clickMyAccountHeaderText() {
        await (await this.headerMyAccount).click();
    }

    async clickAddressBook() {
        await (await this.linkAddressBook).click();
    }

    async clickCloseNewsLetterPopUp() {
        await (await this.closeNewsLetter).click();
    }
}

export default new MyAccount();