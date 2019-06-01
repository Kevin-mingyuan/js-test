<template>
    <div class='header-wrap'>
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" width="64" height="64" :alt="seller.avatar">
            </div>
            <!-- 主要内容 -->
            <div class="content">
                <div class="title"> 
                    <span class="brand">品牌</span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <!-- 对象中的对象需要v-if判断一下 不然报错 因为undefined 找不到 -->
                <div v-if="seller.supports" class="support">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <!-- 右边浮层 -->
            <div v-if="seller.supports" class="support-count" @click="showDetail">
                <span class="count">{{seller.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
         <!-- 公告详情 -->
        <div class="bulletion-wrapper" @click="showDetail">
            <span class="bulletin-title">公告</span>
            <span class="bulletin-text">{{seller.bulletin}}</span>
            <span class="icon-keyboard_arrow_right2"></span>
        </div>

        <transition 
            name="fade"
        >
            <!-- 详情浮层详情弹出层 -->
            <div v-show="detailShow" class="detail">
                <!-- 外层容器清楚浮动 -->
                <div class="detail-wrapper clearfix">
                    <!-- 内容层 -->
                    <div class="detail-main">
                        <h1 class="name">{{seller.name}}</h1>
                        <div class="star_wrapper">
                            <!-- size代表星星大小 score代表星星评分多少 -->
                            <Star :size="36" :score="seller.score" />
                        </div>
                        <!-- 标题 优惠信息 -->
                        <div class="title">
                            <div class="line"></div>
                            <div class="text">优惠信息</div>
                            <div class="line"></div>
                        </div>
                        <!-- 列表 -->
                        <ul v-if="seller.supports" class="supports">
                            <li class="support-item" v-for="(item,index) in seller.supports" :key="index">
                                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                                <span class="text">{{seller.supports[index].description}}</span>
                            </li>
                        </ul>
                        <!-- 标题  商家公告 -->
                        <div class="title">
                            <div class="line"></div>
                            <div class="text">商家公告</div>
                            <div class="line"></div>
                        </div>
                        <!-- 商品介绍 -->
                        <div class="bulletin">
                            <p class="content">{{seller.bulletin}}</p>
                        </div>
                    </div>
                </div>
                <!-- 关闭按钮 -->
                <div class="detail-close">
                    <i class="icon-close" @click="detailHide"></i>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Star from '../star/Star';

export default {
    name:'Header',
    components: {
        Star,
    },
    props:{
        seller:{
            type:Object
        }
    },
    data() {
        return {
            detailShow:false,
        };
    },

    computed: {},

    watch: {},
    methods: {
        showDetail(){
            this.detailShow = true;
        },
        detailHide(){
            this.detailShow = false;
        }
    },

    created() {
        console.log(this.$props);
        //优惠icon变量设置 不能卸载data会报错
        this.classMap = ['decrease','descount','special','invoice','guarantee'];
    },

    mounted() {},

    beforeCreate() {}, 

    beforeMount() {},

    beforeUpdate() {}, 

    updated() {}, 

    beforeDestroy() {}, 

    destroyed() {},

    activated() {}, 
}
</script>

<style lang='scss' scoped>
    @import '../../common/scss/index.scss';
    @import '../../common/font/font.css';

    .header-wrap{
        color: #fff;
        background: #999;
        font-family: 'pf';

        .content-wrapper{
            padding:px2rem(24) px2rem(12) px2rem(18) px2rem(24); 
            font-size: 0;
            width: 100%;
            display: flex;
            position: relative;

            .avatar{
                display: inline-block;
                vertical-align: middle;
                width: px2rem(20);
                height: px2rem(20);

                img{
                    border: 1px solid red;
                }
            }

            .content{
                font-size: 12px;
                display: inline-block;
                vertical-align: middle;
                margin-left: px2rem(16);

                .title{
                    margin: px2rem(2) 0 px2rem(8) 0;

                    .brand{
                        width: px2rem(30);
                        height: px2rem(18);
                        display: inline-block;
                        vertical-align: middle;
                        background: red;
                        text-align: center;
                        line-height: px2rem(18);
                    }
                    
                    .name{
                        font-size: 14px;
                    }

                    
                }

                .description{
                    margin-bottom:px2rem(10);
                    line-height: px2rem(12);
                    font-size: 12px;
                }

                .support{

                    .icon{
                        display: inline-block;
                        width: px2rem(12);
                        height: px2rem(12);
                        margin-right: px2rem(4);
                        background-size: px2rem(12) px2rem(12);
                        background-repeat: no-repeat;

                        // 重新定义同级class 放入数组进行判断下标
                        &.decrease{
                            border: 1px solid red;
                            background: red;
                            &:after{
                                content:"减"
                            }
                        }
                        &.descount{
                            border:1px solid blue;
                            background: blue;
                            &:after{
                                content:"折"
                            }
                        }
                        &.guarantee{
                            border: 1px solid orange;
                            background: orange;
                            &:after{
                                content:"优"
                            }
                        }
                        &.invoice{
                            border: 1px solid aqua;
                            background: aqua;
                            &:after{
                                content:"速"
                            }
                        }
                        &.special{
                            border: 1px solid blueviolet;
                            background: blueviolet;
                            &:after{
                                content:"棒"
                            }
                        }
                    }

                    .text{
                        line-height: px2rem(10);
                        font-size: 10px;

                    }
                }
            }

            .support-count{
                position: absolute;
                bottom: px2rem(18);
                right: px2rem(52);
                background: rgba(0,0,0,0.2);
                padding: 0 px2rem(8);
                // width: px2rem(30);
                height: px2rem(24);
                line-height: px2rem(24);
                border-radius: px2rem(14);
                text-align: center;
                font-size: 12px;

                .count{
                    font-size: px2rem(10);
                    display: inline-block;
                    vertical-align: middle;
                }

                .icon-keyboard_arrow_right{
                    font-size: px2rem(10);
                    display: inline-block;
                    vertical-align: middle;
                    padding-left: px2rem(3);
                    margin-top: px2rem(-2);
                    &:after{
                        content: ">",
                    }
                }
            }

            
        }

        .bulletion-wrapper{
            width: 100%;
            height: px2rem(28);
            padding-left: px2rem(15);
            width: px2rem(360);
            display: flex;
            line-height: px2rem(28);

            .bulletin-title{
                margin-right: px2rem(6);
                background: #fff;
                color: #ddd;
                height: px2rem(20);
                line-height: px2rem(20);
                border-radius: px2rem(2);
                font-size: 12px;
                margin-top:px2rem(4);
            }

            .bulletin-text{
                width: px2rem(300);
                display: inline-block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .icon-keyboard_arrow_right2{
                display: inline-block;
                padding-left: px2rem(10);
                &:after{
                    content: ">"
                }
            }

        }

        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to {
            opacity: 0;
        }

        .detail{
            position: fixed;
            z-index: 100;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background: rgba(7, 17, 27, 0.8);

            .detail-wrapper{
                min-height: 100%;
                width: 100%;

                .detail-main{
                    margin-top: px2rem(64);
                    padding-bottom: px2rem(64);

                    .name{
                        line-height: px2rem(16);
                        text-align: center;
                        font-size: 16px;
                        font-weight: 700;
                    }

                    .star_wrapper{
                        display: inline-block;
                        margin-top: px2rem(18);
                        padding: px2rem(2) 0;
                        text-align: center;
                        width: 100%;
                    }

                    .title{
                        display: flex;
                        width: 80%;
                        margin: px2rem(28) auto px2rem(24) auto;

                        .line{
                            flex: 1;
                            position: relative;
                            top: px2rem(-6);
                            border-bottom:1px solid rgba(255, 255, 255, 0.2);
                        }

                        .text{
                            padding: 0 px2rem(12);
                            font-size: 14px;
                            font-weight: 700;
                        }
                    }

                    .supports{
                        width: 80%;
                        margin: 0 auto;

                        .support-item{
                            padding: 0 px2rem(12);
                            margin-bottom: px2rem(12);
                            &:last-child{
                                margin-right: 0;
                            }

                            .icon{
                                display: inline-block;
                                width: px2rem(12);
                                height: px2rem(12);
                                margin-right: px2rem(4);
                                background-size: px2rem(12) px2rem(12);
                                background-repeat: no-repeat;

                                // 重新定义同级class 放入数组进行判断下标
                                &.decrease{
                                    border: 1px solid red;
                                    background: red;
                                    &:after{
                                        content:"减"
                                    }
                                }
                                &.descount{
                                    border:1px solid blue;
                                    background: blue;
                                    &:after{
                                        content:"折"
                                    }
                                }
                                &.guarantee{
                                    border: 1px solid orange;
                                    background: orange;
                                    &:after{
                                        content:"优"
                                    }
                                }
                                &.invoice{
                                    border: 1px solid aqua;
                                    background: aqua;
                                    &:after{
                                        content:"速"
                                    }
                                }
                                &.special{
                                    border: 1px solid blueviolet;
                                    background: blueviolet;
                                    &:after{
                                        content:"棒"
                                    }
                                }
                            }
                        
                        }
                    }

                    .bulletin{
                        width: 80%;
                        margin:0 auto;

                        .content{
                            padding: 0 px2rem(12);
                            line-height: px2rem(24);
                            font-size: 12px;
                        }
                    }
                }
            }

            .detail-close{
                position: relative;
                width: px2rem(32);
                height: px2rem(32);
                margin: px2rem(-64) auto 0 auto;
                clear: both;
                text-align: center;

                .icon-close{
                    display: inline-block;
                    &:after{
                        content:"x";
                        font-size: 32px;
                        width: px2rem(32);
                        height: px2rem(32);
                        text-align: center;
                    }
                }
            }
        }

    }
</style>