import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("@/components/Home"),
      children:[
        {
          path: 'goods',
          name: 'Goods',
          component: () => import("@/components/goods/Goods")
        },
        {
          path: 'ratings',
          name: 'Ratings',
          component: () => import("@/components/ratings/Ratings")
        },
        {
          path: 'seller',
          name: 'Seller',
          component: () => import("@/components/seller/Seller")
        },
      ],
    },
    
   
  ],
  linkActiveClass:"active"
})
