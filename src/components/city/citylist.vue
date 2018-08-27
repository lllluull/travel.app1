<template>
<div class="list" ref='wrapper'>
  <div>
  <div>
  <div class='maintitle'>
     您的位置
  </div>
  <div class="positionlist">
    <div class='positionlistinner'>
      <div class="llist" color='green'>{{this.$store.state.city}}</div>
    </div>
  </div>
  </div>
   <div class='maintitle'>
    热门城市
  </div>
  <div class="positionlist">
    <div class='positionlistinner' v-for='item in hotCities' :key = item.id>
      <div class="llist" @click="showname(item.name)">{{item.name}}</div>
    </div>
  </div>
  <div v-for='(value,key) in cities' :key=key :ref=key>
   <div class='maintitle'>
     {{key}}
  </div>
  <div class="alllist" v-for ='item in value' :key=item.id >
    <div class="listcontent">
      <div class='listcontentinner' @click="showname(item.name)">{{item.name}}</div>
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

    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  updated(){

  },
  props:{
    hotCities:Array,
    cities:Object,
    letter:String
  },
  watch:{
    letter () {
      if(this.letter){
        const element = this.$refs[this.letter][0]
        console.log(element)
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods:{
    showname(city){
      console.log(city)
      this.$store.commit('showCity',city)
      this.$router.push('/')
    },
    getCity(){

    }
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

