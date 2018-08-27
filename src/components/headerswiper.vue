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
      }
    },
  }
</script>
<style lang="stylus" scoped>
.wrape >>> .swiper-pagination-bullet-active
  background-color  :white

.swiperimg
    width : 100%
    height :4.8rem





</style>

