import { Given } from '@cucumber/cucumber';

import AccountLogin from '../../pageobjects/Account/account.login';
import {Then} from 'cucumber'

Given(/^I navigate to account login pop-up$/, async () => {
	await AccountLogin.navigateToAccountLogin();
});

Given(/^I login to account using "([^"]*)" and "([^"]*)"$/, async (email: string, password: string) => {
	await AccountLogin.login(email, password);
});