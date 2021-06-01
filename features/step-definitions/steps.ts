import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';
import TommyPage from '../pageobjects/tommy.page';
import Page from "../pageobjects/page";

const pages = {
    login: LoginPage,
    tommy: TommyPage
}

Given(/^I am starting the browser and navigate to the (\w+) website$/, async function (url) {
    TommyPage.deleteCookies();
    await pages[url].open()
});

Given(/^I am closing the cookies pop\-up by accepting them$/, async function () {
    await TommyPage.closeCookies();
});

When(/^I navigate to the login screen$/, async function () {
    await TommyPage.clickLogin();
});