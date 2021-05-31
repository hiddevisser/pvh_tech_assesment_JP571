import { Then } from '@cucumber/cucumber';
import NewsletterPopup from '../../pageobjects/newsletter.popup';

Then(/^I close the newsletter popup$/, async () => {
	await NewsletterPopup.closePopUp();
});
