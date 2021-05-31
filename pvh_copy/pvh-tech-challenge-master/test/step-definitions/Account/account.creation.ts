import { Given, When, Then } from '@cucumber/cucumber';

import AccountCreation from '../../pageobjects/Account/account.creation';
import StringGenerator from '../../../utils/StringGenerator';

Given(/^I navigate to account creation pop-up$/, async () => {
	await AccountCreation.navigateToAccountCreation();
});

Then(/^I create a new account using random email and password$/, async () => {
	let email = StringGenerator.createRandomDisposableEmail();
	let password = StringGenerator.createPassword();
	await AccountCreation.createNewAccountComplete(email, password);
});

When(/^I create an account with "([^"]*)" and "([^"]*)"$/, async (email: string, password: string) => {
	await AccountCreation.createNewAccountComplete(email, password);
});

When(/^I create an account with "([^"]*)" and "([^"]*)" and do not accept terms$/, async (email: string, password: string) => {
	await AccountCreation.createNewAccountNoTerms(email, password);
});

Then(/^I verify error message "([^"]*)" is displayed$/, async (errorMsg) => {
	await AccountCreation.verifyErrorMessage(errorMsg);
});

Then(/^I verify missing email error message is displayed$/, async () => {
	await AccountCreation.verifyMissingEmailErrorMessage();
});

Then(/^I verify missing password error message is displayed$/, async () => {
	await AccountCreation.verifyMissingPasswordErrorMessage();
});
