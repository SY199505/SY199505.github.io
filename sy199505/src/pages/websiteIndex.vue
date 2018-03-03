<template>
	<div>
		<header	id="header">
			<div class="photo"></div>
			<h1>孙文</h1>
			<p class="subtitle">只会前端开发</p>
			<nav class="main-nav">
				<ul>
					<li>首页</li>
					<li>栗子</li>
					<li>学习</li>
					<li>交流</li>
					<li>简历</li>
				</ul>
			</nav>
			<nav class="sub-nav">
				<ul>
					<li class="wechat"></li>
					<li class="phone"></li>
					<li class="qq"></li>
				</ul>
			</nav>
		</header>
	</div>
</template>

<script>
	export default {
		name: 'website_index'
	}
</script>

<style lang="scss">
	#header {
		background-color: rgb(50, 121,137);
		color: #fff;
		display: flex;
		text-align: center;
		flex-direction: column;
		padding: 2rem 0;
		position: relative;
		.photo {
			width: 5rem;
			height: 5rem;
			background-color: #000;
			position: absolute;
			left: 1rem;
			border-radius: 50%;
		}
		.main-nav {
			padding: 2rem 0;
			ul {
				display: flex;
				justify-content: space-around;
				padding: 0 5rem;
			}
		}
		.sub-nav {
			ul {
				display: flex;
				justify-content: space-around;
				padding: 0 8rem;
				li {
					width: 2.5rem;
					height: 2.5rem;
					background-color: #000;
				}
			}
		}
	}
</style>