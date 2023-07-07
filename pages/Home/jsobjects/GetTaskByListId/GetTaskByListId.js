export default {
	GetListByUserId(){
		const ListId="{{appsmith.store.ListId}}";
		const query ={ListId};
		const result = GetTaskByListIdQuery.data.run(query)
		console.log(result)
		return result;
	}
}