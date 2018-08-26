<template>
<div class="list" ref='wrapper'>
  <div>
  <div>
  <div class='maintitle'>
     您的位置
  </div>
  <div class="positionlist">
    <div class='positionlistinner'>
      <div class="llist">北京</div>
    </div>
  </div>
  </div>
   <div class='maintitle'>
    热门城市
  </div>
  <div class="positionlist">
    <div class='positionlistinner' v-for='item in hotCities' :key = item.id>
      <div class="llist">{{item.name}}</div>
    </div>
  </div>
  <div v-for='(value,key) in cities' :key=key>
   <div class='maintitle'>
     {{key}}
  </div>
  <div class="alllist" v-for ='item in value' :key=item.id >
    <div class="listcontent">
      <div class='listcontentinner'>{{item.name}}</div>
      </div>

  </div>
</div>
</div>
</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  mounted(){

    const scroll = new Bscroll(this.$refs.wrapper)
  },
  props:{
    hotCities:Array,
    cities:Object
  }
}
</script>
<style lang="stylus" scoped>
.list
  overflow hidden
  position absolute
  top 1.68rem
  left 0
  right 0
  bottom 0
  .maintitle
      background-color #eee
      height .8rem
      line-height .8rem
      padding-left .3rem
      font-weight bolder
  .positionlist
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .positionlistinner
          float left
          width 33.33%
          .llist
            border 1px #ccc solid
            text-align center
            padding .1rem 0
            margin .1rem
            border-radius .06rem
  .listcontent
    width 100%
    height .7rem
    line-height  .7rem
    border-bottom 1px #ccc solid
    .listcontentinner
      padding-left .2rem




</style>

