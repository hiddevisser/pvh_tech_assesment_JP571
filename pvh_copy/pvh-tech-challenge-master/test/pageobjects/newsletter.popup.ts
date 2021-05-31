class NewsletterPopup {
	get containerPopup() {
		return $('div[class="newsletter__content-bg"]');
	}
	get btnClose() {
		return $('button[class="newsletter__close button--close"]');
	}

	async closePopUp() {
		await expect(this.containerPopup).toBeExisting();
		await expect(this.btnClose).toBeExisting();
		await (await this.btnClose).click();
	}
}

export default new NewsletterPopup();
