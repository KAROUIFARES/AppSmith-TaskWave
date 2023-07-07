export default {
	GetListByUserId(){
		storeValue('showAddTaskButton',false)
		clearStore(appsmith.store.ListId)
		const UserId="{{appsmith.store.UserId}}";
		const query ={UserId};
		const result = GetListByUserIdQuery.run(query)
		console.log(result)
		return result;
	}
}