<template>
	<div>
        <div class="sidebar">
            <div class="photo auto white">
                <img src="../assets/images/photo.jpg" alt="">
            </div>
            <div class="name-block auto white">
                <h2 class="name">孙跃</h2>
                <p class="tip">年轻而敢拼</p>
            </div>
            <div class="info-block auto white">
                <h2 class="title">基本信息</h2>
                <ul>
                    <li>23岁</li>
                    <li>北京</li>
                    <li>17611221162</li>
                    <li>sy199505@live.com</li>
                    <li>github.com/sy199505</li>
                    <li>mcgins.com</li>
                </ul>
            </div>
            <div class="skill-block auto white">
                <h2 class="title">技能特长</h2>
                <ul>
                    <li>
                        <p>js</p>
                        <div class="progess">
                            <div class="exprice"></div>
                            <span>精通</span>
                        </div>
                    </li>
                    <li>
                        <p>html</p>
                        <div class="progess">
                            <div class="exprice"></div>
                            <span>精通</span>
                        </div>
                    </li>
                    <li>
                        <p>css</p>
                        <div class="progess">
                            <div class="exprice"></div>
                            <span>精通</span>
                        </div>
                    </li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div class="content">
            <div class="item auto white">
                <h2 class="title">求职意向</h2>
                <div class="item-content">
                    <ul>
                        <li>前端开发</li>
                        <li>全职</li>
                        <li>北京</li>
                        <li>10K+</li>
                        <li>一周内到岗</li>
                    </ul>
                </div>
            </div>
            <div class="item auto white">
                <h2 class="title">教育背景</h2>
                <ul class="item-info">
                    <li>时间:2013.9-2017.7</li>
                    <li>毕业院校哈尔滨理工大学</li>
                    <li>专业信息管理信息系统</li>
                </ul>
                <div class="item-content">
                    <p>网页设计与制作技术、管理应用软件开发、电子商务、信息系统分析设计</p>
                </div>
            </div>
            <div class="item auto white">
                <h2 class="title">工作经验</h2>
                <div class="item-content">
                    <p>UStalk、一起学直播平台的PC端及移动端开发，包括学生端、CRM、老师 端、运营活动开发工作 www.17xueba.com www.ustalk.com</p>
                    <p>在公司主要负责运营投放业务，为网站带来了大量用户。参与过微课堂、翻转 课堂、17学等项目的主要开发工作，开发在不同用户端以及不同使用设备上 的产品，了解产品开发流程，熟练使用git ，能够高效的与同事合作完成任务</p>
                </div>
            </div>
            <div class="item auto white">
                <h2 class="title">自我评价</h2>
                <div class="item-content">
                    <p>1、对前端很感兴趣，所以自学前端，目前在学Vue 。在公司主要负责页面的 前端开发，配合后台人员实现产品前端界面效果与功能。写过响应式页面，移 动端页面，pc端页面</p>
                    <p>2、熟悉JQuery、bootstrap、vue等常用开源框架;熟悉Mobile Web/Hybrid Web App等框架</p>
                    <p>3、理解作用域链、闭包、运行时上下文、this 原型链、继承</p>
                    <p>4 、熟练使用Git 管理代码，良好的编码习惯，能承受一定的工作压力，较强 的学习能力</p>
                    <p>5、了解最新的Web技术框架和趋势，有 MVVM、SASS 开发经验，早期写 过PHP</p>
                </div>
            </div>
            <div class="item auto white">
                <h2 class="title">教育背景</h2>
                <div class="item-content">
                    <p>图一与图二是早期独立做的一个项目，前端使用了bootstrap、jquery、 angula.js，后端用PHP，以MVC模式搭建，通过后台CRM管理员可以自主更 换网站文字、图标、轮播图图片，完成这个项目让我了解了如何制作一个网 站，并在后来做了自己的个人网站，由于前后端都由自己写，使我对页面的实 现又了全新的认识。
                    图三是在交流群中发现的PSD，锻炼基本功。
                    图四是在学习vue过程中做的手机界面，使用flex布局，sass编译css，封装了 导航栏组件、点赞组件、文章列表组件</p>
                </div>
            </div>            
        </div>
	</div>
</template>

<script>
	export default {
		name: 'resume'
	}
</script>

<style lang="scss">
    $titleColor: rgb(51, 77, 104);
    #app {
        display: flex;
        .white {
            background-color: #fff;
            margin-bottom: .5rem;
        }
        .auto {
            display: flex;
            justify-content: space-between;
            padding: .9rem;
        }
        .sidebar {
            flex: 3;
            margin-right: .5rem;
            .photo {
                display: flex;
                justify-content: center;
                padding: 2rem 0;
                img {
                    width: 5rem;
                    height: 7rem;
                    border: .2rem solid rgb(229, 229, 229);
                }
            }
            .name-block {
                display: flex;
                flex-direction: column;
                text-align: center;
                .name {
                    color: black;
                    font-size: 2rem;
                    margin-bottom: 0;
                }
                .tip {
                    margin-top: 0;
                }
            }
            .info-block {
                display: flex;
                flex-direction: column;
                .title {
                }
                ul {

                }
            } 
            .skill-block {
                display: flex;
                flex-direction: column;
                .progess {
                    display: flex;
                    align-items: center;
                    .exprice {
                        flex: 8;
                        height: 1rem;
                        background-color: #000;
                        position: relative;
                        &::after {
                            content: '';
                            width: 100%;
                            height: 1rem;
                            background-color: #f00;
                            position: absolute;
                            left: 0;
                            top: 0;
                        }
                    }
                    span {
                        flex: 2;
                    }
                }
            }      
        }
        .content {
            flex: 4;
            .item {
                flex: 1;
                flex-direction: column;
            }
            .item-info {
                color: rgb(131, 131, 131);
            }
            .title {
                color: $titleColor;
            }
            .item-content {
                ul {
                    display: flex;
                    flex-flow: wrap;
                    li {
                        flex-direction: row;
                        width: 5rem;
                    }
                }
            }
        }
    }
</style>