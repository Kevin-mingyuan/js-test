<template>
  <div class="home">
        <Header/>
         <div class="tab">
            <div class="tab-item">
                <router-link :to="{path:'/goods'}">商品</router-link>
            </div>
            <div class="tab-item">
              <router-link :to="{path:'/ratings'}">评论</router-link>
            </div>
            <div class="tab-item">
              <router-link :to="{path:'/seller'}">商家</router-link>
            </div>
        </div>
        <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/Header';

export default {
  name: 'Home',
  components:{
    Header
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../common/scss/index.scss';
   
    .home{
        .tab{
            display: flex;
            height: px2rem(40);
            // border-bottom: 1px solid  ;
            @include border-1px(rgba(7, 17, 27, 0.1)); //使用mixin
            .tab-item{
              flex: 1;
              text-align: center;
              line-height: px2rem(40);
              
            }
        }
    }
    .active{
      color: #11bbcc;
    }
</style>
