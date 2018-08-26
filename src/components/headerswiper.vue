<template>
<div class="wrape">
  <swiper :options="swiperOption"  >

    <swiper-slide v-for='item of swiperList' :key=item.id><img :src="item.imgUrl" alt="" class='swiperimg'></swiper-slide>


    <div class="swiper-pagination"  slot="pagination"></div>


  </swiper>
   </div>
</template>

<script>
  export default {
    name: 'carrousel',
    props:{
      swiperList:Array
    },
    data() {
      return {
        swiperOption: {
       pagination: {
            el: '.swiper-pagination'
          }
        },
        imgurl:[
          {id:1,url:'http://img1.qunarzz.com/piao/fusion/1712/56/7e62e24499ad4702.jpg_890x330_dd59942e.jpg'},
          {id:2,url:'http://img1.qunarzz.com/piao/fusion/1807/79/e85e78bb69c7b602.jpg_890x330_37eda7df.jpg'},
          {id:3,url:'http://img1.qunarzz.com/piao/fusion/1808/15/c1899b1412c06d02.jpg_890x330_63ad1265.jpg'},
          {id:4,url:'http://img1.qunarzz.com/piao/fusion/1807/b3/5d3cb84223a12402.jpg_890x330_c97eff61.jpg'},
          {id:5,url:'http://img1.qunarzz.com/piao/fusion/1805/7c/f7653a384258c02.jpg_890x330_d1908fb2.jpg'},
        ]
      }
    },


  }
</script>
<style lang="stylus" scoped>
.wrape >>> .swiper-pagination-bullet-active
  background-color  :white

.wrape
  overflow: hidden
  width :100%
  height :0
  padding-bottom: 37%
  .swiperimg
    width : 100%


</style>

