<template>
  <div class="main">
    <div class="imgshow">
      <img src="https://img1.qunarzz.com/p/tts2/1503/6c/0c91b631b505b3.jpg_r_640x420x90_2c273bdf.jpg" class='img' @click="flag=true">
      <div class="info">
          <div class='num'>产品编号570161546</div>
          <div class="desc">6 <span class='iconfont'>&#xe67b;</span> </div>

      </div>
    </div>
    <galery v-show='flag' :flage='flag' :showgalary = 'showgalary'></galery>
    <detailinfo></detailinfo>



  </div>
</template>

<script>
import detailinfo from './detalinfo.vue'
import galery from './common/garlary.vue'
export default {
  components:{
    detailinfo,
    galery,
  },
  data(){
    return{
      flag:false
    }
  },
  methods:{
    showgalary(flag){
      this.flag = flag
    }
  }
}
</script>
<style lang="stylus" scoped>
.main
  position relative
  .imgshow
    height 5.5rem
    overflow hidden
    .img
      width 100%
  .info
    position absolute
    bottom 0
    left 0
    right 0
    color #fff
    display flex
    justify-content space-between
    background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
    padding .1rem .3rem .1rem .3rem


</style>
