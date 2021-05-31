import Page from '../page';

const HEADER_TEXT_NL = 'HOI!';

class MyAccount extends Page {
	get headerMyAccount() {
		return $('div[data-testid="HeaderMyAccount"] > a > span');
	}
	get headingTitleMyAccount() {
		return $('h1[class="my-account__title"]');
	}
	get linkAddressBook() {
		return $('div[class="overview__items"] > a:nth-child(3) > h3');
	}

	async verifyMyAccountHeaderText() {
		await expect(this.headerMyAccount).toHaveText(HEADER_TEXT_NL);
	}

	async verifyMyAccountHeadings() {
		await expect(this.headingTitleMyAccount).toBeExisting();
	}

	async clickMyAccountHeaderText() {
		await (await this.headerMyAccount).click();
	}

	async clickAddressBook() {
		await (await this.linkAddressBook).click();
	}
}

export default new MyAccount();
