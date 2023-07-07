export default {
	DeleteTask(id){
		showAlert(id)
		DeleteTaskQuery.run({ _id: "64a7e55be817c193b9624d63" })
	}
}