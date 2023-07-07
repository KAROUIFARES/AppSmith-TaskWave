export default {
  Login() {
    const email = "{{InputEmail.text}}"; 
    const password = "{{PasswordInput.text}}"; 
    const query = { email, password };
    const promise = LoginUser.run(query);     
    promise.then(result => {
			console.log(result)
      console.log(result[0]._id);
			if(result[0]._id!=null)
				{
					storeValue("UserId",result[0]._id)
					navigateTo('Home',{})
				}
    }).catch(error => {
      showAlert('Wrong Data',Error())
			
    });
  }
};
