<template>
    <div class='star' :class="starType">
        <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" :key="index"></span>
    </div>
</template>

<script>
const LENGTH = 5; //定义星星5个
//定义对应class 方便统一管理
const CLS_ON = 'on'; //满星
const CLS_HALF = 'half'; //半星
const CLS_OFF = 'off'; //没有星星 灰色

export default {
    name:'',
    components: {},
    props:{
        size:{
            type:Number
        },
        score:{
            type:Number
        }
    },
    data() {
        return {

        };
    },

    computed: {
        starType(){
            return "star-" + this.size;
        },
        itemClasses(){
            let result = [];
            //向下取0.5的算法
            let score = Math.floor(this.score * 2) / 2;

            //判断小数
            let hasDecimal = score % 1 !== 0;
            //判断整数
            let integer = Math.floor(this.score);

            // push 进去满星
            for(let i=0; i<integer; i++){ 
                result.push(CLS_ON);
            }
            //处理一个半星
            if(hasDecimal){
                result.push(CLS_HALF)
            }
            //处理星星补足情况 不为5个
            while(result.length < LENGTH){
                result.push(CLS_OFF);
            }

            return result;
        }
    },

    watch: {},
    methods: {},

    created() {
        console.log(this.$props)
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
    @import "../../common/scss/index.scss";

    .star{

        .star-item{
            display: inline-block;
            background-repeat:no-repeat; 
        } 

        &.star-48{

            .star-item{
                width: px2rem(20);
                height: px2rem(20);
                border: 1px solid red;
                margin-right: px2rem(12);

                &:last-child{
                    margin-right: 0;
                }
                &.on{
                    background: green; //全星星
                    :after{
                        content:"满";
                        font-size:12px;
                        color: #ffffff;
                    }
                }
                &.half{
                    background: orangered; //半星星
                    :after{
                        content:"半";
                        font-size:12px;
                        color: #ffffff;
                    }
                }
                &.off{
                    background: aqua; //没有星星
                    :after{
                        content:"无";
                        font-size:12px;
                        color: #ffffff;
                    }
                }
            }
        }
        &.star-36{
            
            .star-item{
                width: px2rem(12);
                height: px2rem(12);
                border: 1px solid blue;
                margin-right: px2rem(6);

                &:last-child{
                    margin-right: 0;
                }
                &.on{
                    background: green; //全星星
                    :after{
                        content:"满"
                    }
                }
                &.half{
                    background: orangered; //半星星
                    :after{
                        content:"半"
                    }
                }
                &.off{
                    background: aqua; //没有星星
                    :after{
                        content:"无"
                    }
                }
            }
        }
        &.star-24{
            
            .star-item{
                width: px2rem(8);
                height: px2rem(8);
                border: 1px solid orange;
                margin-right: px2rem(3);

                &:last-child{
                    margin-right: 0;
                }
                &.on{
                    background: green; //全星星
                    :after{
                        content:"满"
                    }
                }
                &.half{
                    background: orangered; //半星星
                    :after{
                        content:"半"
                    }
                }
                &.off{
                    background: aqua; //没有星星
                    :after{
                        content:"无"
                    }
                }
            }
        }
        
    }
</style>