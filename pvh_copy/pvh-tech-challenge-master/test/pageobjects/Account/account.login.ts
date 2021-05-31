import Page from '../page';
import AccountCreation from '../../pageobjects/Account/account.creation';

class AccountLogin extends Page {
	get inputEmail() {
		return $('#signin-email');
	}
	get inputPassword() {
		return $('#signin-password');
	}
	get btnSubmit() {
		return $('button[data-qa="Button-primary-new"]');
	}

	async login(username: string, password: string) {
		await this.enterEmail(username);
		await this.enterPassword(password);
		await this.submitDetails();
	}

	async enterEmail(username: string) {
		await (await this.inputEmail).setValue(username);
	}

	async enterPassword(password: string) {
		await (await this.inputPassword).setValue(password);
	}

	async submitDetails() {
		await (await this.btnSubmit).click();
	}

	async navigateToAccountLogin() {
		await (await AccountCreation.linkSignUp).waitForDisplayed();
		await expect(AccountCreation.linkSignUp).toBeExisting();
		await (await AccountCreation.linkSignUp).click();
		await expect(this.inputEmail).toBeExisting();
		await expect(this.inputPassword).toBeExisting();
		await expect(this.btnSubmit).toBeExisting();
	}

	open() {
		return super.open();
	}
}

export default new AccountLogin();
