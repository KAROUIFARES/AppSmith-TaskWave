export default {
	ActiveModal(){
		if(List1.selectedItem._id==null)
		{
			showAlert("Select a project")
			showModal(false)
		}
		else if(List1.selectedItem._id!=null){
			showModal("CreateTaskModal")
		}
	}
}