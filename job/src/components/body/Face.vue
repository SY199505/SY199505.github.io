<template>
	<div>
		<Project :navList="navList" :picList="picList" @changeType="changeType"></Project>
	</div>

</template>

<script>
	import Project from './Project'
    import axios from 'axios'
	
	export default {
		components: {
			Project
		},
		data () {
			return {
				navList: [],
				picList: []
			}
		},
		methods : {
			changeType (typeName) {
				this.picList = this.navList.filter(item => item.typeName === typeName)[0].picList
				console.log(this.picList);
			}
		},
		mounted () {
            axios.get('/api/getTypeList').then(res => {
                this.navList = res.data.navList
            	// this.changeType(this.navList[0].typeName)
            	console.log(this.navList[0].typeName);
            })	
		}
	}
</script>

<style lang="scss" scoped>
	
</style>