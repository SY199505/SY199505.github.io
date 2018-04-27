<template>
    <section class="common-header search-content">
        <h2 class="main-title">Discover the Best</h2>
        <h3 class="sub-title">Explore</h3>
        <div class="require-box wrap">
            <input type="text" v-model="searchvalue" placeholder="What are you?" class="search-detail">
            <div id="choose-location">
                <div class="choose">beijing</div>
                <ul>
                    <li>北京</li>
                    <li>上海</li>
                    <li>广州</li>
                </ul>
            </div>
            <div id="choose-position">
                <div class="choose">beijing</div>
                <ul>
                    <li>北京</li>
                    <li>上海</li>
                    <li>广州</li>
                </ul>
            </div>
            <button class="btn-search" @click="search">Search</button>
        </div>
    </section>
</template>

<style lang="scss">
    .search-content
    {
        padding: 50px 0;

        background-color: #1d4353;

        justify-content: center;
        .main-title
        {
            color: #fff;
        }
        .require-box
        {
            font: 14px normal;

            display: flex;

            width: 900px;
            height: 65px;
            padding: 0 40px;

            color: $normalText-color;
            border-radius: 85px;
            background: #fff;

            align-items: center;
            .search-detail
            {
                height: 100%;

                flex: 1;
            }
            #choose-location
            {
                height: 100%;

                color: $normalText-color;
                outline: none;
                background: url(../images/icon/icon_location.png) 80% center/11px 16px no-repeat;

                flex: 1;
                .choose {
                    height: 100%;
                    text-align: center;
                    line-height: 65px;
                }
                ul {
                    background-color: #fff;
                    overflow: hidden;
                    opacity:0;
                    transition: height 1s linear; 
                    margin-top: -65px;
                    padding-top: 65px;                   
                    &:hover {
                        height: 100%;
                        opacity:1;

                    }
                    li {
                        text-align: center;
                        &:hover {
                            background-color: $lightText-color;
                        }
                    }
                } 
            }
            #choose-position
            {
                height: 100%;

                color: $normalText-color;
                outline: none;
                background: url(../images/icon/icon_arrow.png) 80% center/15px 9px no-repeat;

                flex: 1;
                .choose {
                    height: 100%;
                    text-align: center;
                    line-height: 65px;
                }
                ul {
                    background-color: #fff;
                    overflow: hidden;
                    opacity:0;
                    transition: height 1s linear; 
                    margin-top: -65px;
                    padding-top: 65px;                   
                    &:hover {
                        height: 100%;
                        opacity:1;

                    }
                    li {
                        text-align: center;
                        &:hover {
                            background-color: $lightText-color;
                        }
                    }
                } 
            }
            .btn-search
            {
                width: 150px;
                height: 45px;

                border-radius: 45px;
                background-color: $lightText-color;
            }
        }
    }
</style>