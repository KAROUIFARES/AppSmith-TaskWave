export default {
	async CreateTask(){
		const TaskName="{{TAskNameInput.text}}";
		const Description="{{TaskDescriptionInput.text}}";
		const Duration="{{TaskDuration.value}}";
		const TaskState=false;
		const ListId="{{list1.selectedItem._id}}"
		const query={TaskName,Description,Duration,TaskState,ListId};
		const promise=CreateTaskQuery.run(query);
		try{
			const result =await promise;
			if(result.n===1){
				showAlert('Task Added successfully','SUCCESS');
				closeModal('CreateTaskModal',{})
				GetTaskListByListId.run()
			}
		}catch(error){
			console.error(error);
		};
	}
}