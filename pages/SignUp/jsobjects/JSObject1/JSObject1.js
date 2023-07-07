export default {
	CreateUser() {
		const userName = "{{UserNameInput.text}}"; // Assuming UserNameInput is the name of the input field for username
		const email = "{{EmailInput.text}}"; // Assuming EmailInput is the name of the input field for email
		const password = "{{PasswordInput.text}}"; // Assuming PasswordInput is the name of the input field for password

		const query = {
			email,
			password,
			userName
		};

		const promise = CreateUserQuery.run([query]); // Assuming CreateUserQuery.run() accepts an array of user objects and returns a promise

		promise.then(result => {
			if(result.n==1)
				{
					showAlert('User Added successfully', 'SUCCESS');
					navigateTo('Login',{})
				}
		}).catch(error => {
			console.error(error);
		});
	}
};
