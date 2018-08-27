<template>
  <div class='hotsell'>
   <div class='maintitle'>
     <h1 >热销产品</h1>
     </div>

    <router-link tag='div' class = 'showitem' v-for='item in recommendList' :key=item.id :to="'detail/'+item.id">
      <img class='itemimg' :src="item.imgUrl">
      <div class='iteminfo'>
        <p class='title'>{{item.title}}</p>
        <p class='address'>{{item.desc}}</p>
        <button class='button'>更多详情</button>
      </div>
    </router-link>



  </div>
</template>
<script>
export default {
    props:{
      recommendList:Array
    },
  data () {
    return {

    }
  }
}

</script>
<style lang="stylus" scoped>
.hotsell
  margin-top .2rem

  .maintitle
    background-color #eee
    height .8rem
    line-height .8rem
    padding-left .2rem
    font-weight bolder
  .showitem
    display :flex
    overflow : hidden
    height :1.6rem

    border-bottom 1px #ccc solid
    .itemimg
      width 1.4rem
      height 1.4rem
      margin-top .1rem
      margin-left .1rem
    .iteminfo
      flex:1
      margin-left .2rem
      .title
        font-weight bold
        font-size 18px
      .address
        color #ccc
      .button
        background-color orange
        color white
        outline 0
        border none
        margin-top .2rem
</style>

