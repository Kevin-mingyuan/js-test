<template>
    <div class='cartcontrol'>
        <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart($event)">-</div>
        <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
        <div class="cart-add" @click="addCart($event)">+</div>
    </div>
</template>

<script> 
import Vue from 'vue';

export default {
    name:'',
    components: {},
    props:{
        food:{//点击购买的商品
            type:Object,
        }
    },
    data() {
        return {
            
        };
    },

    computed: {},

    watch: {},
    methods: {
        addCart(event){
            //阻止点击生效多次
            if(!event._constructed){
                return;
            }
            if(!this.food.count){
                // 新增一个属性没有的变量 this.food => {'count':1}
                Vue.set(this.food,'count',1);
            }else{
                this.food.count++;
            }
        },
        decreaseCart(event){
            //阻止点击生效多次
            if(!event._constructed){
                return;
            }
            if(this.food.count){
                this.food.count--;
            }
        }
    },

    created() {
        // console.log(this.food);
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

    .cartcontrol{
        display: flex;
        font-size: 0;

        .cart-decrease{
            display: inline-block;
            vertical-align: middle;
            padding: px2rem(6);
            font-size: 14px;
            color: #fff;
            border-radius: px2rem(5);
            background: rgba(0, 174, 255,0.6);
            font-weight: 700;
        }

        .cart-count{
            display: inline-block;
            vertical-align: middle;
            padding: px2rem(6);
            font-size: 14px;
            color: #000;
            font-weight: 700;
            border-radius: px2rem(5);
        }

        .cart-add{
            display: inline-block;
            vertical-align: middle;
            padding: px2rem(6);
            font-size: 14px;
            color: #fff;
            font-weight: 700;
            background: rgba(0, 174, 255,0.6);
            border-radius: px2rem(5);
        }
      
    }
</style>