import {When} from 'cucumber'
import browser from 'webdriverio/build/commands/browser';
import LoginPage from "../pageobjects/login.page";
import TommyPage from "../pageobjects/tommy.page";
import {Then} from "@cucumber/cucumber";

const pages = {
    login: LoginPage,
    tommy: TommyPage
}

When(/^I login with (.*) and and (.*)$/, async function (username, password) {
    await LoginPage.login(username,password)
});

Then(/^I should see an error message saying (.*)$/, async (message) => {
    if (message.includes("mailadres")){
        await expect(LoginPage.fieldInvalidEmail).toHaveTextContaining(message);
    }else{
        await expect(LoginPage.fieldInvalidCredentials).toHaveTextContaining(message);
    }
});