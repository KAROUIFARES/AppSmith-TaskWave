export default {
	async CalculProjectDuration(){
		const QueryResult=GetTaskDurationByListIdQuery.run()
		QueryResult.then(result=>{
			const nbTask=result.length
			var ProjectDuration=0;
			for (let i = 0; i < result.length; i++) {
				ProjectDuration=ProjectDuration+result[i].Duration;
			}
			storeValue("ProjectDuration",ProjectDuration)
			UpdateProjectDurationQuery.run()


		}).catch(error=>{
			console.error(error)
			throw error 
		})
	}
}