import {Then} from 'cucumber'

import MyAccount from '../pageobjects/account';
import AddressBook from '../pageobjects/account.address.book';
import LoginPage from "../pageobjects/login.page";
import {Given} from 'cucumber'
import {When} from 'cucumber'

Then(/^I should see a welcome message saying (.*)$/, async (message) => {
    await expect(MyAccount.verifyMyAccountHeadings).toHaveTextContaining(message);
});

Then(/^I verify I am logged in$/, async () => {
    await MyAccount.verifyMyAccountHeaderText();
});

Then(/^I navigate to my account$/, async () => {
    await MyAccount.clickMyAccountHeaderText();
    // await MyAccount.verifyMyAccountHeadings();
});

Then(/^I navigate to address book$/, async () => {
    // await browser.debug();
    await MyAccount.clickAddressBook();
});

Then(/^I verify I see my address book$/, async () => {
    await AddressBook.verifyAddressBookDisplayed();
});

Then(/^I click add address$/, async () => {
    await AddressBook.clickAddAddress();
});

Then(/^I input and verify address was added$/, async () => {
    const firstName = 'MyFirstName';
    const lastName = 'MyLastName';
    const street = 'Romeinlaan';
    const houseNumber = '1';
    const city = 'Amsterdam';
    const zipcode = '1234 AB';

    await AddressBook.submitAddress(firstName, lastName, street, houseNumber, city, zipcode);
    await AddressBook.verifyAddressAndDelete(street);
});

Given(/^I close the newsletter popup$/, async function () {
    await MyAccount.clickCloseNewsLetterPopUp();
});

When(/^I enter the prerequisite information "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, async function (firstName, lastName, street, houseNumber, place, postalCode) {
    await AddressBook.submitAddress(firstName, lastName, street, houseNumber, place, postalCode);
});

Then(/^I verify address was added by "([^"]*)" and delete it$/, async function (street) {
    await AddressBook.verifyAddressAndDelete(street);
});