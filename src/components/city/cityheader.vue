<template>
<div>

  <div class="cityselector">
    <router-link to="/home"><div class='iconfont cityheaderleft'>&#xe600;</div></router-link>
    城市选择
  </div>
  </div>
</template>
<script>

</script>
<style lang="stylus" scoped>
@import '~commonStyls/varible.styl'
  .cityselector
    overflow :hidden
    position relative
    height .86rem
    line-height  .86rem
    text-align center
    color #ffffff
    background-color $bgc
    font-size .36rem
    .cityheaderleft
      position absolute
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>

