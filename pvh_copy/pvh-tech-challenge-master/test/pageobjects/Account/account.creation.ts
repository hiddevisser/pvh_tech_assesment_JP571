import Page from '../page';

const MISSING_FIELD_ERR_MSG = 'Vul het veld in';

class AccountCreation extends Page {
	linkSignUpSelector: string = 'button[data-testid="sign-in-button"]';
	get inputEmail() {
		return $('#create-account-email');
	}
	get inputPassword() {
		return $('#create-account-password');
	}
	get checkboxAgreeTerms() {
		return $('input[data-testid="checkbox"]');
	}
	get labelAgreeTerms() {
		return $('label[data-testid="checkbox-label"]');
	}
	get btnSubmit() {
		return $('button[data-qa="Button-primary-new"]');
	}
	get linkSignUp() {
		return $(this.linkSignUpSelector);
	}
	get linkSignUpChk() {
		return $$(this.linkSignUpSelector);
	}
	get linkMakeAccount() {
		return $('button[data-testid="register"]');
	}
	get textErrorMsg() {
		return $('p[class="error-text"]');
	}
	get textPasswordErrMsg() {
		return $('p[id="create-account-password-helper-text"');
	}
	get textEmailErrMsg() {
		return $('p[id="create-account-email-helper-text"]');
	}

	async createNewAccountComplete(username: string, password: string) {
		await this.enterEmail(username);
		await this.enterPassword(password);
		await this.tickCheckbox();
		await this.submitDetails();
	}

	async createNewAccountNoTerms(username: string, password: string) {
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

	async tickCheckbox() {
		await (await this.labelAgreeTerms).click();
		await (await this.checkboxAgreeTerms).isSelected();
	}

	async submitDetails() {
		await (await this.btnSubmit).click();
	}

	async navigateToAccountCreation() {
		await (await this.linkSignUp).waitForDisplayed();
		await expect(this.linkSignUp).toBeExisting();
		await (await this.linkSignUp).click();
		await (await this.linkMakeAccount).click();
		await (await this.inputEmail).waitForDisplayed();
		await expect(this.inputEmail).toBeExisting();
		await expect(this.inputPassword).toBeExisting();
		await expect(this.checkboxAgreeTerms).toBeExisting();
		await expect(this.btnSubmit).toBeExisting();
	}

	async verifyErrorMessage(errorMsg: string) {
		await expect(this.textErrorMsg).toBeExisting();
		await expect(this.textErrorMsg).toHaveText(errorMsg);
	}

	async verifyMissingEmailErrorMessage() {
		await expect(this.textEmailErrMsg).toBeExisting();
		await expect(this.textEmailErrMsg).toHaveText(MISSING_FIELD_ERR_MSG);
	}

	async verifyMissingPasswordErrorMessage() {
		await expect(this.textPasswordErrMsg).toBeExisting();
		await expect(this.textPasswordErrMsg).toHaveText(MISSING_FIELD_ERR_MSG);
	}

	open() {
		return super.open();
	}
}

export default new AccountCreation();
