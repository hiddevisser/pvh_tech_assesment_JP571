import Page from './page';

const SUBTITLE_NL = 'Adresboek';

class AddressBook extends Page {
    get headingSubtitleAddressBook() {
        return $('h2[class="my-account__subtitle"]');
    }
    get btnAddAddress() {
        return $('button[data-testid="address-add-button"]');
    }

    get inputFirstName() {
        return $('#firstName');
    }
    get inputLastName() {
        return $('#lastName');
    }
    get inputStreet() {
        return $('#address1');
    }
    get inputHouseNumber() {
        return $('#address2');
    }
    get inputCity() {
        return $('#city');
    }
    get inputPostcode() {
        return $('#zipCode');
    }
    get btnSubmit() {
        return $('button[data-testid="address-save-button"]');
    }

    get firstAddress() {
        return $('select > option[value="0"]');
    }
    get deleteButton() {
        return $('button[data-testid="address-delete-button"]');
    }

    async verifyAddressDisplayed() {
        await expect(this.headingSubtitleAddressBook).toHaveText(SUBTITLE_NL);
    }

    async clickAddAddress() {
        await (await this.btnAddAddress).click();
        await expect(this.inputFirstName).toBeExisting();
        await expect(this.inputLastName).toBeExisting();
        await expect(this.inputStreet).toBeExisting();
        await expect(this.inputHouseNumber).toBeExisting();
        await expect(this.inputCity).toBeExisting();
        await expect(this.inputPostcode).toBeExisting();
        await expect(this.btnSubmit).toBeExisting();
    }

    async submitAddress(firstName: string, lastName: string, street: string, houseNumber: string, city: string, zipcode: string) {
        await (await this.inputFirstName).setValue(firstName);
        await (await this.inputLastName).setValue(lastName);
        await (await this.inputStreet).setValue(street);
        await (await this.inputHouseNumber).setValue(houseNumber);
        await (await this.inputCity).setValue(city);
        await (await this.inputPostcode).setValue(zipcode);
        await (await this.btnSubmit).click();
    }

    async verifyAddressAndDelete(street: string) {
        await expect(this.firstAddress).toHaveText(street);
        await expect(this.deleteButton).toBeExisting();
        await (await this.deleteButton).click();
    }
}

export default new AddressBook();