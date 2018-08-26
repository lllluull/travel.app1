<template>
  <div class='hotsell'>
   <div class='maintitle'>
     <h1 >周末去哪儿了</h1>
     </div>

    <div class = 'showitem' v-for='item in weekendList' :key=item.id>
      <div class="imgouter">
      <img class='itemimg' :src="item.imgUrl">
      </div>
      <div class='iteminfo'>
        <p class='title'>{{item.title}}</p>
        <p class='address'>{{item.desc}}</p>
      </div>
    </div>



  </div>
</template>
<script>
export default {
  props:{
    weekendList:Array
  },
  data () {
    return {

    }
  }
}

</script>
<style lang="stylus" scoped>
.hotsell


  .maintitle
    background-color #eee
    height .8rem
    line-height .8rem
    padding-left .2rem
  .imgouter
    overflow : hidden
    height 0
    padding-bottom:33.3%
    .itemimg
      width 100%
  .iteminfo
    margin-left .2rem
    margin-bottom .1rem
    .title
      font-weight bold
      font-size 18px
    .address
      color #ccc

</style>

