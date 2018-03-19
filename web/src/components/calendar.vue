<template>
	<div id="calendar-container">
		<ul class="weekName">
			<li v-for="(item, index) in weekName" :key="index">{{ item }}</li>
		</ul>
		<div class="calendar-content">
			<ul class="week" v-for="(week, index) in weekList" :key="index">
				<li v-for="(day, index) in week" :class="{ gray: day.lastMonth || day.nextMonth }" :key="index">{{ day.num }}</li>
			</ul>			
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
				month: 11
			}
		},
		mounted: function () {
			var y = this.month === 12 ? this.year + 1 : this.year;
			var m = this.month === 12 ? 1 : this.month;
			var nowFirstDayPos = (new Date(this.year, this.month - 1, 1)).getDay();
			var nowMonthNum = new Date(new Date(y, m, 1) - 1).getDate();
			var lastMonthNum = new Date(new Date(y, m - 1, 1) - 1).getDate();
			var num = 0;
			var num2 = 0;
			// 当前月份
			while (nowMonthNum--) {
				this.weekDate.push({ num: ++num });
			}
			//上月
			while (nowFirstDayPos--) {
				this.weekDate.unshift({ num: lastMonthNum--, lastMonth: true });
			}
			//下月 
			while (this.weekDate.length != 42) {
				this.weekDate.push({ num: ++num2, nextMonth: true });
			}
		},
		computed: {
			weekList : function () {
				let arr = [];
				for(var i=0; i<6; i++){
					let _arr = this.weekDate.slice(i*7, (i + 1)*7);
					arr.push(_arr);
				}
				return arr;
			}
		}
	}

</script>

<style lang="scss">
	#calendar-container {
		.weekName, .week{
			height: 3rem;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			li {
				width: 2rem;
				text-align: center;
			}
		}
		.week {
			.gray {
				color: #ddd;
			}
		}
	}

</style>