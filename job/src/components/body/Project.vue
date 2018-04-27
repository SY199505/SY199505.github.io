<template>
	<div>
		<ul class="sub-nav">
		    <li class="nav-item" v-for="item in navList" @mouseover="changePicList(item.typeName)">
                <img :src="item.typeSrc" alt="">
		        <span>{{item.typeName}}</span>
		    </li>
		</ul>
		<section class="common-header destination">
		    <h2 class="main-title">Our Top Destinations</h2>
		    <h3 class="sub-title">Explore</h3>
		    <div class="destination-content wrap">
		        <div class="small-piece fl" v-for="item in picList">
		            <div class="info">
		                <span class="town-name">{{item.town}}</span>
		                <span class="city-name">{{item.city}}</span>
		            </div>
		            <img :src="item.imgSrc" alt="aaaa">
		        </div>
		    </div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'Project',
        props : {
            navList : {
                type: Array,
                required: true
            },
            picList : {
                type: Array,
                required: true
            }
        },
        methods: {
            changePicList (typeName) {
                this.$emit('changeType', typeName)
            }
        },
        computed : {

        },
        created () {

        },
        mounted () {
            // this.changePicList(this.navList)
        }
	}
</script>

<style lang="scss" scoped>
    @import "../../assets/css/_const.scss";
    .sub-nav
    {
        display: flex;

        width: 100%;

        background: #fff;
        box-shadow: 0 0 27px 0 rgba(0, 0, 0, .07);

        justify-content: space-around;
        .nav-item
        {
            font: 18px normal;

            width: 80px;
            margin: 0 auto;

            color: $normalText-color;
            border-bottom: 2px solid #fff;
            text-align: center;

            img {
                width: 40px;
                height: 40px;
                margin: 10px auto;
            }
            span
            {
            }
            &:hover span {
                color: $lightText-color;
            }
        }
        .nav-item:hover
        {
            border-color: $lightText-color;
        }
    }
    .destination
    {
        padding: 40px 0;

        background: #fff;
        .main-title
        {
            font: 30px bold;

            color: $normalText-color;
        }
        .destination-content
        {
            .small-piece
            {
                position: relative;
                margin: 0 20px 20px 0;
                &:first-child {
                    img{

                    width: 570px;
                    height: 370px;
                    }
                }
                .info {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    span
                    {
                        font-size: 16px;

                        display: block;

                        color: #fff;
                        &:first-child
                        {
                            font-size: 24px;

                            margin-bottom: 15px;
                        }
                    }
                }
                img
                {
                    display: block;

                    width: 270px;
                    height: 175px;

                    border-radius: 10px;
                    animation: all .2s ease-in-out;
                    &:hover {
                        transform: scale(1.1)
                    }
                }
            }
        }
    }	
</style>