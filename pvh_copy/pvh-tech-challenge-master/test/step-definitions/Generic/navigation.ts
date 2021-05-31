import { Given, When, World } from '@cucumber/cucumber';
import LandingPage from '../../pageobjects/landing.page';

Given(/^I navigate to main landing page$/, async () => {
	await LandingPage.open();
});

When(/^I close cookies banner$/, async () => {
	await LandingPage.closeCookies();
});

Given(/^I delete all cookies$/, async () => {
	await LandingPage.deleteAllCookies();
});
