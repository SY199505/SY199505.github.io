<template>
    <footer id="footer">
        <div class="footer-content wrap">
            <div class="item dailylist">
                <h3 class="title">Dailylist</h3>
                <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div class="item categories">
                <h3 class="title">Categories</h3>
                <div class="content">
                    <ul class="left-item fl">
                        <li>导航</li>
                        <li>百度</li>
                        <li>谷歌</li>
                        <li>必应</li>
                    </ul>
                    <ul class="right-item fl">
                        <li>搜索</li>
                        <li>查找</li>
                        <li>问问</li>
                        <li>看看</li>
                    </ul>
                </div>
            </div>
            <div class="item contact">
                <h3 class="title">Contact</h3>
                <div class="content">
                    <div class="addr"> 31 Ven HoVan Chuong Street, Ha Noi, Viet Nam</div>
                    <div class="tel">(84) 90 532 9119</div>
                    <div class="email">Dailist.support@gmail.com</div>
                </div>
            </div>
            <div class="item map"></div>
        </div>
    </footer>	
</template>

<script>
	
</script>

<style lang="scss" scoped>
    @import "../../assets/css/_const.scss";
    #footer
    {
        width: 100%;

        border-bottom: 1px solid #4a5867;
        background: $normalText-color;
        .footer-content
        {
            display: flex;

            padding: 70px 0 60px;

            justify-content: space-around;
            .item
            {
                padding-right: 20px;

                color: #fff;

                flex: 1;
                .title
                {
                    font-size: 24px;
                }
                .content
                {
                    font-size: 14px;
                    line-height: 22px;

                    margin-top: 30px;
                }
                &.dailylist
                {
                    .title
                    {
                        font-size: 30px;

                        color: $lightText-color;
                    }
                }
                &.categories
                {
                    .left-item
                    {
                        width: 70px;
                        margin-right: 30px;
                    }
                    .right-item
                    {
                        width: 70px;
                    }
                }
                &.contact
                {
                    .addr,
                    .tel,
                    .email
                    {
                        padding-left: 20px;

                        background-repeat: no-repeat;
                        background-position: left 3px;
                        background-size: 16px 16px;
                    }
                    .addr
                    {
                        background-image: url(#{$img}/icon/icon_addr.png);
                    }
                    .tel
                    {
                        background-image: url(#{$img}/icon/icon_phone.png);
                    }
                    .email
                    {
                        background-image: url(#{$img}/icon/icon_email.png);
                    }
                }
                &.map
                {
                    background: url(#{$img}/pic_map.png) no-repeat;
                }
            }
        }
    }	
</style>