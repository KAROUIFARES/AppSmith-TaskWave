export default {
	async achievementProject() {
		const ListId = "{{List1.selectedItem._id}}";
		const TaskState = true;
		const PromiseQuery1 = CountNbTaskByListIdQuery.run({ ListId });
		const PromiseQuery2 = NbCompletedTaskByListIdQuery.run({ ListId, TaskState });

		try {
			const [result1, result2] = await Promise.all([PromiseQuery1, PromiseQuery2]);
			const nbTask = result1.n;
			const nbCompletedTask = result2.n;
			var achievementPercentage = ((nbCompletedTask / nbTask) * 100).toFixed(2);
			if(achievementPercentage=="NaN")
				{
					achievementPercentage=0;
				}
			storeValue('ProjectAchievment', achievementPercentage);
			UpdateAchivementProjectQuery.run();
			GetListByUserId.run();
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
};
