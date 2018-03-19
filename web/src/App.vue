<template>
    <div>
        <header id="header">
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
        <router-link to="/"></router-link>
        <router-view></router-view>
        <section class="article" v-for="item in articleList" :key="item.id">
            <div class="info">
                <div class="date">{{ item.date }}</div>
                <div class="likeNum">{{ item.likeNum }}Likes</div>
            </div>
            <h2 class="title">{{ item.title }}</h2>
            <p class="detail">{{ item.detail }}</p>
            <a class="more" :href="item.link">more...</a>
        </section>
        <section class="article">
            <div class="info">
                <div class="date">Nov 28, 2017</div>
                <div class="likeNum">0Likes</div>
            </div>
            <h2 class="title">这是一个标题</h2>
            <p class="detail">这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述</p>
            <a class="more" href="javascript:void(0);">more...</a>
        </section>
        <section class="nextPage">
            <div class="articleList">article title</div>
            <a class="next" href="javascript:void(0);">下一页</a>
        </section>
        <footer id="footer">
            <p> © 2018-Made By yue.sun-京 ICP 备 号 无</p>
            <p>Powered by vue.js & sass</p>
        </footer>
    </div></template>

<script>
import axios from 'axios'
export default {
    name: 'App',
    data() {
        return {
            articleList: [
                {
                    date: 'Nov 28, 2017',
                    likeNum: 10,
                    title: '这是一个标题',
                    detail: '这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述',
                    link: 'javascript:void(0);'
                }
            ] 
        }      
    }
}
</script>

<style lang="scss">
    body {
        margin: 0;
    }
    img {
        border: none;
    }
    ul, ol {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
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
            background: url('./assets/images/photo.jpg') center center/100% 100% no-repeat;
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
                padding: 0 6rem;
                li {
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                    background-repeat: no-repeat;
                    background-position: 50% 50%;
                    background-size: 100% 100%;
                    &.wechat {
                        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAGFBMVEX5+fn///////////////////////////8GLbpiAAAACHRSTlMAHTNPcZXE/jRrZYcAAACZSURBVHjazZJJDsMwDAOtjfz/j7ukrizIzrHonIIw4shGxp+iHq53OUjCXk92vQlbc+dFGPjpISVzY6LyDoRkdjBBQOcHjLkAV8qQNwNma3zXkmwoXixTTHxqw5hsGoQHtBo6Y9xXRLu9tkIisTUkwLYgcTYwCl0ho2I4CA5H8RZrHHMx9ygC6K0e3vXimGn5gasnnnjGP+QB0rsLaU+e16cAAAAASUVORK5CYII=);
                    }
                    &.phone {
                        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAGFBMVEX5+fn///////////////////////////8GLbpiAAAACHRSTlMAHTNPcZXE/jRrZYcAAACZSURBVHjazZJJDsMwDAOtjfz/j7ukrizIzrHonIIw4shGxp+iHq53OUjCXk92vQlbc+dFGPjpISVzY6LyDoRkdjBBQOcHjLkAV8qQNwNma3zXkmwoXixTTHxqw5hsGoQHtBo6Y9xXRLu9tkIisTUkwLYgcTYwCl0ho2I4CA5H8RZrHHMx9ygC6K0e3vXimGn5gasnnnjGP+QB0rsLaU+e16cAAAAASUVORK5CYII=);
                    }
                    &.qq {
                        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAGFBMVEX5+fn///////////////////////////8GLbpiAAAACHRSTlMAHTNPcZXE/jRrZYcAAACZSURBVHjazZJJDsMwDAOtjfz/j7ukrizIzrHonIIw4shGxp+iHq53OUjCXk92vQlbc+dFGPjpISVzY6LyDoRkdjBBQOcHjLkAV8qQNwNma3zXkmwoXixTTHxqw5hsGoQHtBo6Y9xXRLu9tkIisTUkwLYgcTYwCl0ho2I4CA5H8RZrHHMx9ygC6K0e3vXimGn5gasnnnjGP+QB0rsLaU+e16cAAAAASUVORK5CYII=);
                    }
                }
            }
        }
    }
    .article {
        padding: 2rem 1rem;
        border-bottom: 1px solid #ddd;
        .info {
            display: flex;
            justify-content: flex-end;
            .date {
                margin-right: 2rem;
            }
        }
        .title {
            text-align: center;
            font-size: 2.5rem;
        }
        .detail {
            line-height: 1.5rem;
            font-size: 1.4rem;
        }
        .more {
            display: block;
            color: #076dd0;
            font-size: 1.5rem;
            margin-top: 1.5rem;
            text-align: center;
        }
    }
    .nextPage {
        color: #076dd0;
        font-size: 1.5rem;
        text-align: center;
        padding: 1.5rem 0;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-around;
        .articleList {
        }
        .next {
        }
    }
    #footer {
        text-align: center;
        line-height: 2rem;
        padding: 1rem;
    }
</style>
