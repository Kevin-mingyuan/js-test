<template>
    <div class='shop-cart'>
        <div class="content">
            <div class="content-left">
                <div class="logo-wrapper">
                    <div class="logo">
                        <i class="icon-shopping_cart"></i>
                    </div>
                </div>

                <div class="price">

                </div>

                <div class="desc">

                </div>
            </div>
            <div class="content-right"></div>
        </div>
    </div>
</template>

<script>

export default {
    name:'ShopCart',
    components: {},
    props:{},
    data() {
        return {

        };
    },

    computed: {},

    watch: {},
    methods: {},

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

            .content-left{
                flex: 1;

                .logo-wrapper{
                    display: inline-block;
                    position: relative;
                    top: px2rem(-10);
                    margin:0 px2rem(12);
                    padding: px2rem(6);
                    width: px2rem(56);
                    height: px2rem(56);
                    box-sizing: border-box;
                    vertical-align: top;
                    background: aqua;
                    border-radius: 50%;

                    .logo{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        text-align: center;
                        background: #2b343c;

                        .icon-shopping_cart{
                            line-height: px2rem(44);
                            font-size: 24px;
                            color: #80858a;
                            &::after{
                                content: "cart";
                            }
                        }
                    }
                }

                .price{
                    display: inline-block;

                }

                .desc{
                    display: inline-block;

                }
            }

            .content-right{
                flex: 0 0 px2rem(105);
                width: px2rem(105);
            }
        }
    }

</style>