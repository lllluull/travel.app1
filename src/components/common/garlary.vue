<template>
  <div class='galery'>
    <div class='galeryinner' >
       <swiper  :options="swiperOption" >

          <swiper-slide ><img src="https://img1.qunarzz.com/p/tts2/1503/6c/0c91b631b505b3.jpg_r_1280x840x90_7168a6f9.jpg"  class='swiperimg'></swiper-slide>
          <swiper-slide ><img src="https://img1.qunarzz.com/p/tts5/1504/5e/f8121aa2269a75.jpg_r_1280x840x90_6689e5d1.jpg"  class='swiperimg'></swiper-slide>
          <swiper-slide ><img src="https://img1.qunarzz.com/p/tts5/1505/df/466f1a92472cb0.jpg_r_1280x840x90_b4b71dcb.jpg"  class='swiperimg'></swiper-slide>
          <swiper-slide ><img src="https://img1.qunarzz.com/p/tts5/1503/d8/ed815982c2ad55.jpg_r_1280x840x90_c0c71878.jpg"  class='swiperimg'></swiper-slide>


        <div class="swiper-pagination"  slot="pagination"></div>


  </swiper>
  <div class="headerLeft iconfont" @click='changeshow' >&#xe602;</div>
    </div>
  </div>
</template>
<script>
  export default {
     data() {
      return {
        swiperOption: {
       pagination: {
            el: '.swiper-pagination',
            paginationType:'fraction'

          }
        },
      }
    },
    props:{
      flag:Boolean,
      showgalary:Function
    },
    methods:{
      changeshow(){
        this.flag=false
         this.showgalary(this.flag)
      }

    }
  }
</script>
<style lang="stylus" scoped>
  .galery >>> .swiper-container
    overflow inherit

  .galery
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background-color black
    z-index 99
    display flex
    align-items center
    .galeryinner
      width 100%
      height 0
      padding-bottom 68%
      .swiperimg
        width 100%
        height 20%
        overflow hidden
      .swiper-pagination
        color  #fff !important
        bottom -1rem
      .headerLeft
        color #fff
        position absolute
        top .3rem
        left .3rem
        font-size 20px;

</style>
