import Page from './page';

class LandingPage extends Page {
	btnCloseCookiesSelector: string = 'button[data-testid="close-button"]';
	get btnCloseCookies() {
		return $(this.btnCloseCookiesSelector);
	}
	get btnCloseCookiesChk() {
		return $$(this.btnCloseCookiesSelector);
	}

	async closeCookies() {
		await (await this.btnCloseCookies).click();
	}

	deleteAllCookies() {
		browser.deleteAllCookies();
	}

	open() {
		return super.open();
	}
}

export default new LandingPage();
