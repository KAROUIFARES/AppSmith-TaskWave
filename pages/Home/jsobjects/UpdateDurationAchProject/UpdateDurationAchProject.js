export default {
	async Update(){
		await UpdateAchivementProjectQuery.run()
		await UpdateProjectDurationQuery.run()
	}
}