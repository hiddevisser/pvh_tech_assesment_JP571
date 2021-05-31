import { Then } from '@cucumber/cucumber';

import MyAccount from '../../pageobjects/Account/my.account';
import AddressBook from '../../pageobjects/Account/address.book';

Then(/^I verify I am on my account page$/, async () => {
	await MyAccount.verifyMyAccountHeadings();
});

Then(/^I verify I am logged in$/, async () => {
	await MyAccount.verifyMyAccountHeaderText();
});

Then(/^I navigate to my account$/, async () => {
	await MyAccount.clickMyAccountHeaderText();
	await MyAccount.verifyMyAccountHeadings();
});

Then(/^I navigate to address book$/, async () => {
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
	const street = 'Stadsbrink';
	const houseNumber = '1';
	const city = 'Amsterdam';
	const zipcode = '1234 AB';

	await AddressBook.inputAndSubmitAddress(firstName, lastName, street, houseNumber, city, zipcode);
	await AddressBook.verifyAddressAddedAndDelete(street);
});
