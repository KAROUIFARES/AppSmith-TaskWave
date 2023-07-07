export default {
	CreateList(){
		const ListName="{{ListNameInput.text}}";
		const UserId="{{appsmith.store.UserId}}";
		const Achevment=0;
		const query = {ListName,UserId,Achevment};
		const promise = CreateListQuery.run(query);
		promise.then(result=>{
			console.log(result.n)
			if(result.n==1);
			{
				showAlert('List Added Successffly','SUCCESS')
				closeModal()
			}
		}).catch(error=>{
			showAlert('Failed','ERROR')
		})
	}	
}