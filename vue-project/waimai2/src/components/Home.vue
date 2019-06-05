<template>
  <div class="home">
        <Header :seller="seller" />
         <div class="tab">
            <div class="tab-item">
                <router-link :to="{name:'Goods'}">商品</router-link>
            </div>
            <div class="tab-item">
              <router-link :to="{name:'Ratings'}">评论</router-link>
            </div>
            <div class="tab-item">
              <router-link :to="{name:'Seller'}">商家</router-link>
            </div>
        </div>
        <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/Header';

const ERR_OK = 0; //请求状态码 成功时候

export default {
  name: 'Home',
  components:{
    Header
  },
  data () {
    return {
      seller:{}
    }
  },
  created(){
      this.$http.get("http://localhost:5000/api/seller")
      .then(res=>{
        var data = res.data;
        if(data.errno === ERR_OK){
          console.log("success");
          this.seller = data.seller;
          // console.log(this.seller)
        }
      })
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
