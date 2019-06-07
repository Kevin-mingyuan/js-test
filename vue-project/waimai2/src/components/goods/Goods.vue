<template>
	<div class='goods-wrap' ref="aa">
		<!-- 商品分类 -->
		<div class="menu-wrapper" ref="menuWrapper">
			<ul>
				<li v-for="(item,index) in goods" :key="index" class="menu-item" :class="{'current':currentIndex===index}" 
				@click="selectMenu(index,$event)">
					<span class="text">
						<span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
						{{item.name}}
					</span>
				</li>
			</ul>
		</div>
		
		<!-- 商品详情 -->
		<div class="foods-wrapper" ref="foodsWrapper"> 
			<ul>
				<li v-for="(item,index) in goods" :key="index" ref="foodWrapper" class="food-list food-list-hook">
					<h1 class="title">{{item.name}}</h1>
					<ul>
						<li v-for="(food,index) in item.food" :key="index" class="food-item">
							<div class="icon">
								<img :src="food.icon" width="30" height="30" alt="error">
							</div>
							<div class="content">
								<h2 class="name">{{food.name}}</h2>
								<p class="desc">{{food.description}}</p>
								<div class="extra">
									<span class="count">月销{{food.sellerCount}}份</span>
									<span>好评率{{food.rating}}%</span>
								</div>
								<div class="price">
									<span class="now">￥{{food.price}}</span>
									<span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
								</div>
								<!-- 购物车加减购买 每个商品对象{} -->
								<div class="cartcontrol-wrapper">
									<Cartcontrol :food="food" />
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>

		<!-- 底部购物车组件  参数：配送费 起送费-->
		<ShopCart :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice" :selectFoods="selectFoods" />
	</div>
</template>

<script>
	import BScroll from 'better-scroll'; //滚动插件
	import ShopCart from '../shopcart/ShopCart'; //底部购物车组件
	import Cartcontrol from '../cartcontrol/Cartcontrol'; //购买商品加减

	export default {
		name: 'Goods',
		components: {
			ShopCart,
			Cartcontrol
		},
		props: {
			seller: {
				type: Object,
			}
		},
		data() {
			return {
				goods: [], //所有分类下的所有商品
				listHeight:[], //存入每个详情商品分类的高度		
				scrollY:0, //定义变量 判断右侧y值多少即滚动至顶部的距离 然后判断是在listHieght哪个范围内 返回其数组内的下标即是左侧对应下标	
			};
		},
		computed: {
			//计算y值来映射左侧的下标 返回对应下标
			currentIndex(){
				for(let i=0; i<this.listHeight.length; i++){
					let height1 = this.listHeight[i];
					let height2 = this.listHeight[i+1];

					if(!height2 ||(this.scrollY >= height1 && this.scrollY < height2)){ //判断在数组内哪两个数之间
						return i;
					}
				}
				return 0;
			},
			//计算购买了几件商品
			selectFoods(){
				let foods = [];
				this.goods.forEach((good,index)=>{
					good.food.forEach((food)=>{
						//判断count是否有 push到数组内 
						if(food.count){
							foods.push(food);
						}
					})
				});
				return foods;//传入购物车组件内进行计算
			}
		},
		watch: {},
		methods: {
			//定义方法实例化 绑定对应ul的dom
			initScroll() {
				this.meunScroll = new BScroll(this.$refs.menuWrapper,{
					click:true,//初始化点击事件生效
				});

				this.foodsScroll = new BScroll(this.$refs.foodsWrapper,{
					startY:true,
					scrollY:true,
					freeScroll:true,
					tap:true,
					probeType:3,//滚动实时监听
					click:true,
				});
				//监听滚动事件
				this.foodsScroll.on('scroll',(pos)=>{
					this.scrollY = Math.abs(Math.round(pos.y)); 
				})
			},
			//需要定义一个数组 需要找到对应分类的高度 然后每次累加高度 将各个对应的分类商品的总高度 push进去数组内 递增区间数组
			//拿到右侧y值和左侧索引值做对比
			calculateHeight(){
				let foodList = this.$refs.foodsWrapper.getElementsByClassName("food-list-hook") //拿到每个商品对应分类的高度
				let height = 0;
				this.listHeight.push(height); //把第一个高度push进去

				for(let i=0; i<foodList.length; i++){
					let item = foodList[i];
					height += item.clientHeight; //累加对应的区间高度;
					this.listHeight.push(height);
				}

				// console.log(this.listHeight);
			},
			//点击切换效果
			selectMenu(index,event){
				//阻止pc端多一次的点击事件
				if(!event._constructed){
					return;
				}
				let foodList1 = this.$refs.foodsWrapper.getElementsByClassName("food-list-hook") //拿到每个商品对应分类的高度
				// console.log(foodList1 , '12313121331');
				let el = foodList1[index];
				// console.log(this.foodsScroll.scroller.scrollToElement , '1231'); //源码已经更改
				this.foodsScroll.scroller.scrollToElement(el,300);
			}
		},

		created() {
			this.classMap = ['decrease', 'descount', 'special', 'invoice', 'guarantee'];

			console.log(this.goods);
			this.$http.get('http://localhost:5000/api/goods')
				.then(res => {
					let data = res.data;
					if (data.errno === 0) {
						this.goods = data.goods;
						console.log(this.goods);

						//dom更新后调用 拿到数据dom更新
						this.$nextTick(()=>{
							this.initScroll(); //传入数据后调用
							//高亮滑动
							this.calculateHeight();
						})
					}
				});
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
	@import '../../common/font/font.css';
	@import '../../common/scss/index.scss';

	.goods-wrap {
		display: flex;
		position: absolute;
		top: px2rem(174);
		bottom: px2rem(46);
		overflow: hidden;
		width: 100%;

		.menu-wrapper {
			flex: 0 0 px2rem(80);
			width: px2rem(80);
			background: #f3f5f7;

			ul {

				.menu-item {
					display: table;
					height: px2rem(54);
					width: px2rem(56);
					line-height: px2rem(14);
					padding:0 px2rem(12);
						
					&.current{
						position: relative;
						margin-top: -1px;
						z-index: 10;
						background: #fff;
						font-weight: 700;
						&.text{
							@include border-none;
						}
					} 
					
					.icon {
						display: inline-block;
						width: px2rem(12);
						height: px2rem(12);
						margin-right: px2rem(4);
						background-size: px2rem(12) px2rem(12);
						background-repeat: no-repeat;

						// 重新定义同级class 放入数组进行判断下标
						&.decrease {
							border: 1px solid red;
							background: red;

							&:after {
								content: "减"
							}
						}

						&.descount {
							border: 1px solid blue;
							background: blue;

							&:after {
								content: "折"
							}
						}

						&.guarantee {
							border: 1px solid orange;
							background: orange;

							&:after {
								content: "优"
							}
						}

						&.invoice {
							border: 1px solid aqua;
							background: aqua;

							&:after {
								content: "速"
							}
						}

						&.special {
							border: 1px solid blueviolet;
							background: blueviolet;

							&:after {
								content: "棒"
							}
						}
					}

					.text{
						display:table-cell;
						width: px2rem(56);
						font-size: 12px;
						@include border-1px(rgba(7,17,27,0.1));
						vertical-align: middle;
  					}

				}
			}
		}

		.foods-wrapper {
			flex: 1;
			background: #fff;

			.title{
				padding-left: px2rem(14);
				height: px2rem(26);
				line-height: px2rem(26);
				border-left:2px solid #d9dde1;
				font-size: 12px;
				color: rgb(147, 153, 159);
				background: #f3f7f7;
				 
			}

			.food-item{
				display: flex;
				margin: px2rem(18);
				padding-bottom: px2rem(18);
				@include border-1px(rgba(7,17,27,0.1));
				&:last-child{
					@include border-none;
					margin-bottom: 0;
				}

				.icon{
					width: px2rem(57);
					height: px2rem(57);
					background: blue;
					flex: 0 0 px2rem(57);
					margin-right: px2rem(10);
				}
				
				.content{
					flex: 1;
					position: relative;

					.name{
						margin: px2rem(2) 0 px2rem(8) 0;
						height: px2rm(14);
						line-height: px2rem(14);
						font-size: 14px;
						color: rgb(7, 17, 27);
					}

					.desc , .extra{
						line-height: px2rem(10);
						font-size: 10px;
						color: rgb(147,153,159);
					}

					.desc{
						margin-bottom: px2rem(8);
					}

					.extra {

						.count{
							margin-right: px2rem(12); 
						}
					}

					.price{
						font-weight: 700;
						line-height: px2rem(24);

						.now{
							margin-right: px2rem(8);
							font-size: 14px;
							color: rgb(240, 20, 20)
						}

						.old{
							text-decoration: line-through;
							font-size: 10px;
							color: rgb(147, 153, 159);
						}
					}

					.cartcontrol-wrapper{
						position: absolute;
						right: 0;
						bottom:px2rem(12);
						   
					}
				}
			}
		}
	}
</style>
