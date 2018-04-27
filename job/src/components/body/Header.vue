<template>
    <header id="header">
        <div class="logo fl">Dailist</div>
        <div class="fr nav-search">
            <ul class="nav fl">
                <li class="item"><router-link to='/Explore'>Explore</router-link></li>
                <li class="item"><router-link to='/Pages'>Pages</router-link></li>
                <li class="item"><router-link to='/Blog'>Blog</router-link></li>
                <li class="item"><router-link to='/Login'>Log In</router-link></li>
                <li class="item"><router-link to='/Signin'>Sign Up</router-link></li>
            </ul>
            <div class="fl search-box">
                <input type="text" v-model="searchvalue" placeholder="What are look for?">
                <div class="fr search-btn" @click="search"></div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data () {
            return {
                searchvalue: ''
            }
        },
        components: {

        },
        methods: {
            search () {
                
            }
        }
        
    }
</script>

<style lang="scss">
    @import "../../assets/css/_const.scss";
    #header
    {
        line-height: 100px;

        height: 100px;
        padding: 0 75px;

        background-color: #fff;
        .logo
        {
            font-size: 30px;

            color: $lightText-color;
        }
        .nav
        {
            .item
            {
                font-size: 16px;

                float: left;

                margin: 0 20px;

                color: #2c3e50;
            }
        }
        .search-box
        {
            margin-left: 120px;
            input
            {
                font-size: 20px;

                width: 240px;
                height: 48px;

                text-indent: 60px;

                border: 1px solid #69b0bc;
                border-radius: 50px;
                background: url(#{$img}/icon/icon_add.png) 28px 18px/11px 12px no-repeat;
                &::-webkit-input-placeholder
                {
                    font-size: 16px;

                    color: $lightText-color;
                }
            }
            .search-btn
            {
                width: 19px;
                height: 18px;
                height: 100px;
                margin-left: 50px;

                background: url(#{$img}/icon/icon_search.png) center center/19px 18px no-repeat;
            }
        }
    }
</style>