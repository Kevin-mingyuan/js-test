<template>
    <div class='shop-cart'>
        <div class="content" @click="toggleList">
            <div class="content-left">
                <div class="logo-wrapper">
                    <div class="logo" :class="{'highlight':totalCount>0}">
                        <i class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></i>
                    </div>
                    <!-- 数量 -->
                    <div class="num" v-show="totalCount>0">
                        {{totalCount}}
                    </div>
                </div>

                <div class="price" :class="{'highlight':totalPrice>0}">
                    ￥{{totalPrice}}元
                </div>

                <div class="desc">
                    另需配送费{{deliveryPrice}}元
                </div>
            </div>
            <div class="content-right">
                <!-- 可以绑定一个变量 计算属性 -->
                <div class="pay" :class="payClass">
                    {{payDesc}}
                </div>
            </div>
        </div>
        <transition 
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutDown"
        >
            <!-- 购买的底部商品列表 -->
            <div class="shopcart-list" v-if="flod">
                <div class="list-header">
                    <h1 class="title">购物车</h1>
                    <span class="empty">清空</span>
                </div>
                <div class="list-content">
                    <ul>
                        <li class="food" v-for="(food,index) in selectFoods" :key="index">
                            <span class="name">{{food.name}}</span>
                            <div class="price">
                                <span>￥{{food.price * food.count}}</span>
                            </div>
                            <div class="cartcontrol-wrapper">
                                <Cartcontrol :food="food"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Cartcontrol from '../cartcontrol/Cartcontrol'; //购买商品加减

export default {
    name:'ShopCart',
    components: {
        Cartcontrol
    },
    props:{
        selectFoods:{  //选择多少数量状态数组 默认空数组 后台数据传递 price=>单价 count=>数量
            type:Array,
            default:() => [],
        },
        deliveryPrice:{
            type:Number,
            default:0,
        },
        minPrice:{
            type:Number,
            default:0,
        }
    },
    data() {
        return {
            flod:false, //底部购物车列表默认折叠
        };
    },

    computed: {
        //购买了多少钱 总价
        totalPrice(){
            let total = 0;
            this.selectFoods.forEach((item,index)=>{
                total += item.price * item.count; //商品单价*商品数量
            })
            return total; //返回购买总数
        },
        //购买的商品总和
        totalCount(){
            let count = 0;
             this.selectFoods.forEach((item,index)=>{
                 count += item.count;
             });
             return count;
        },
        //右侧结算三种状态 1未付款 2还差多少钱 3可以结算
        payDesc(){
            if(this.totalPrice === 0){
                return `￥${this.minPrice}元起送`;
            }else if(this.totalPrice < this.minPrice){
                return `还差￥${this.minPrice - this.totalPrice}元起送`;
            }else if(this.totalPrice >= this.minPrice){
                console.log(this.totalPrice , this.minPrice);
                return `去结算`;
            }
        },
        //右侧结算展示不同样式 返回对应的class
        payClass(){
            if(this.totalPrice < this.minPrice){
                return 'not-enough';
            }else{
                return 'enough';
            }
        },
        //底部购物车列表
        // listShow(){
        //     if(this.totalCount > 0){
        //         this.flod = true;
        //         return false;
        //     }

        //     let show = !this.flod;
        //     this.flod = !this.flod;

        //     console.log(show , 'showwww');
        //     return this.flod;
        // }
    },

    watch: {},
    methods: {
        //判断有没有购买商品
        toggleList(){
            if(this.totalCount < 0){
                //没有商品时候 点击无效
                return;
            }
            this.flod = !this.flod;
            console.log(this.flod , '123131232')
        }
    },

    created() {},

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

    .shop-cart{
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 50;
        height: px2rem(48);
        width: 100%;

        .content{
            display: flex;
            background: #141d27;
            font-size: 0;
            color: rgba(255, 255, 255, 0.4);
            font-family: 'pf';

            .content-left{
                flex: 1;

                .logo-wrapper{
                    display: inline-block;
                    vertical-align: top;
                    position: relative;
                    top: px2rem(-10);
                    margin:0 px2rem(12);
                    padding: px2rem(6);
                    width: px2rem(56);
                    height: px2rem(56);
                    box-sizing: border-box;
                    background: aqua;
                    border-radius: 50%;

                    .logo{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        text-align: center;
                        background: #2b343c;
                        &.highlight{
                            background: rgb(0,160,220);
                        }

                        .icon-shopping_cart{
                            line-height: px2rem(44);
                            font-size: 24px;
                            color: #80858a;
                            &.highlight{
                                color: #fff;   
                            }

                            &::after{
                                content: "cart";
                            }
                        }
                    }

                    .num{
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: px2rem(24);
                        height: px2rem(16);
                        line-height: px2rem(16);
                        text-align: center;
                        border-radius: px2rem(16);
                        font-size: 9px;
                        font-weight: 700;
                        color: #fff;
                        background: rgb(240,20,20);
                        box-shadow: 0 px2rem(4) px2rem(8) 0 rgba(0, 0, 0, 0.4);

                    }
                }

                

                .price{
                    display: inline-block;
                    vertical-align: top;
                    margin-top:px2rem(12); 
                    line-height: px2rem(24);
                    box-sizing: border-box;
                    padding-right: px2rem(12);
                    border-right: 1px solid rgba(255, 255, 255, 0.1);
                    font-size: px2rem(16);
                    font-weight: 700;
                    &.highlight{
                        color:#fff;
                    }
                }

                .desc{
                    display: inline-block;
                    vertical-align: top;
                    margin: px2rem(12) 0 0 px2rem(12);
                    line-height: px2rem(24);
                    font-size: 10px;
                }
            }

            .content-right{
                flex: 0 0 px2rem(105);
                width: px2rem(105);

                .pay{
                    height: px2rem(48);
                    line-height: px2rem(48);
                    text-align: center;
                    font-size: 12px; 
                    font-weight: 700;
                    // 购物车钱右侧2种状态
                    &.not-enough{
                        background: #2b333b;
                    }
                    &.enough{
                        background: #00b43c;
                        color: #fff;
                    }
                }
            }
        }
       
        
        .shopcart-list{
            position: absolute;
            left: 0;
            top: px2rem(-200);
            z-index: -1;
            width: 100%;
            min-height: px2rem(200);
            background: #fff;
        }
    }

</style>