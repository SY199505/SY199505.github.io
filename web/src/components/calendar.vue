<template>
	<div id="calendar-container">
		<ul class="weekName">
			<li v-for="(item, index) in weekName" :key="index">{{ item }}</li>
		</ul>
		<div class="calendar-content">
			<ul class="week" v-for="(week, index) in weekList" :key="index">
				<li v-for="(day, index) in week" :class="{ gray: day.lastMonth || day.nextMonth }" :key="index">
					{{ day.num }}
				</li>
			</ul>
			<div class="task-container">
				<ul class="task" v-for="(item1, index1) in taskList" :key="index1">
					<li v-for="(item2, index2) in item1" :key="index2">{{ item2.title }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'calendar',
		data () {
			return {
				weekName: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
				weekDate: [], //5*7 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2
				year: 2018,
				month: 3,
				taskData: [{title: '吃饭', startDate: '20180301', endDate: '20180306', type: 'work'}, {title: '洗澡', startDate: '20180305', endDate: '20180309', type: 'work'}, {title: '睡觉', startDate: '20180306', endDate: '2018030611', type: 'work'}],
				totalTask: []
			}
		},
		mounted: function () {
			calMonthData: {
				let y = this.month === 12 ? this.year + 1 : this.year
				let m = this.month === 12 ? 1 : this.month
				let nowFirstDayPos = (new Date(this.year, this.month - 1, 1)).getDay()
				let nowMonthNum = new Date(new Date(y, m, 1) - 1).getDate()
				let lastMonthNum = new Date(new Date(y, m - 1, 1) - 1).getDate()
				let num = 0
				let num2 = 0
				// 当前月份
				while (nowMonthNum--) {
					this.weekDate.push({ num: ++num })
				}
				//上月
				while (nowFirstDayPos--) {
					this.weekDate.unshift({ num: lastMonthNum--, lastMonth: true })
				}
				//下月 
				while (this.weekDate.length != 42) {
					this.weekDate.push({ num: ++num2, nextMonth: true })
				}	
			}
			calcDomData: {
				let totalTask = []
				let y = this.month === 12 ? this.year + 1 : this.year
				let m = this.month === 12 ? 1 : this.month
				let nowFirstDayPos = (new Date(this.year, this.month - 1, 1)).getDay()
				let nowMonthNum = new Date(new Date(y, m, 1) - 1).getDate()
				while (nowFirstDayPos--) {
					totalTask.push({})
				}
				for (let i = 1; i <= nowMonthNum; i++) {
					for (let j = 0; j < this.taskData.length; j++) {
						if(parseInt(this.taskData[j].startDate.substr(6, 8)) == i) {
							totalTask.push(this.taskData[j])
							i++
						}
					}
					totalTask.push({day: i})
				}
				this.totalTask = totalTask
				console.log(this.totalTask);
			}
		},
		computed: {
			weekList : function () {
				let arr = []
				for(let i=0; i<6; i++){
					let _arr = this.weekDate.slice(i*7, (i + 1)*7)
					arr.push(_arr)
				}
				return arr
			},
			taskList : function () {
				let arr1 = []
				for(let i=0; i<6; i++){
					let _arr1 = this.totalTask.slice(i*7, (i + 1)*7)
					arr1.push(_arr1)
				}
				return arr1
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	#calendar-container {
		.weekName, .week, .task{
			height: 3rem;
			display: flex;
			flex-direction: row;
			li {
				flex: 1;
				text-align: center;
			}
		}
		.calendar-content {	
			position: relative;	
			.week {
				position: relative;
				.gray {
					color: #ddd;
				}
				.task_block {
					height: 1rem;
					background-color: #f00;
					&.busy {
						background-color: #000;
					}
				}
			}
		}
		.task-container {
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;
			.task {
				color: #f00;
				li {
					padding-top: 1.5rem;
					height: 1.5rem;
					flex: 1;
					flex-direction: row;
				}
			}
		}
	}

</style>