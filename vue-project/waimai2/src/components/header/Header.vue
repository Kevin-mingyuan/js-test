<template>
    <div class='header-wrap'>
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" width="64" height="64" :alt="seller.avatar">
            </div>
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
        </div>
        <div class="bulletion-wrapper">
            
        </div>
    </div>
</template>

<script>

export default {
    name:'Header',
    components: {},
    props:{
        seller:{
            type:Object
        }
    },
    data() {
        return {

        };
    },

    computed: {},

    watch: {},
    methods: {},

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
        display: flex;
        color: #fff;
        background: #000;
        font-family: 'pf';

        .content-wrapper{
            padding:px2rem(24) px2rem(12) px2rem(18) px2rem(24); 
            font-size: 0;
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
                }
            }
        }
    }
</style>