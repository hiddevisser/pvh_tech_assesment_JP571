class StringGenerator {
	createRandomDisposableEmail() {
		let randomEmail = 'pvhchallenge_' + Math.floor(Math.random() * 10000) + '@yopmail.com';
		console.log('email', randomEmail);
		return randomEmail;
	}

	createPassword() {
		let password = Math.random().toString(36).slice(-8);
		console.log('password', password);
		return password;
	}
}

export default new StringGenerator();
