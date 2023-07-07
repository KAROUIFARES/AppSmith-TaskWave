export default {
	CreateTask(){
		const TaskName="{{TaskNameInput.text}}";
		const Duration="{{DurationValue.value}}";
		const ListId="{{appsmith.store.ListId}}";
		const Description="{{DescriptionInput.text}}";
		const TaskState=false;
		if(ListId!=null)
			{
				const query = {TaskName,Duration,ListId,Description,TaskState};
				const promise = CreateTaskQuery.run(query);
				promise.then(result=>{
					console.log(result.n)
					if(result.n==1);
					{
						showAlert('Task Added Successffly','SUCCESS')
						closeModal()
					}
				}).catch(error=>{
					showAlert('Failed','ERROR')
				})
			
			}else{
				showAlert('Wrong Data','ERROR')
			}
	}
}