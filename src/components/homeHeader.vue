<template>
  <div class="header">
    <div class="headerLeft"><span class='iconfont'>&#xe600;</span></div>
    <div class="headerInput"> <span class='iconfont'>&#xe601;</span> 游玩景点/美食/美女</div>
    <div class="headerRight">城市 <span class='iconfont'>&#xe64a;</span></div>
  </div>
</template>
<script>

</script>
<style lang="stylus" scoped>
@import '~commonStyls/varible.styl'
.header
  display :flex
  height : .86rem
  background-color :$bgc
  color :#fff
  line-height :.86rem
  .headerLeft
    width : .64rem
    float: left
    text-align :center
  .headerInput
    flex :1
    background-color :#fff
    border-radius :.1rem
    margin-top :.12rem
    height :.62rem
    margin-left :.1rem
    color :#ccc
    line-height :.62rem
    padding-left:.1rem
  .headerRight
    width : 1.24rem
    float :right
    text-align :center
</style>

