<template>
<div>
  <div class="citysearch">
    <div class="sreachcontent">
      <input type="text" placeholder="请输入您需要的城市" class='sreachinput' v-model="keyword">
    </div>
  </div>
  <div class="showcontent" v-show='keyword' ref='list'>
    <ul>
      <li class='sList' v-for = 'item in citylist' :key = item  @click="showname(item.name)">
       {{item.name}}
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
 data(){
   return{
     keyword:'',
     citylist:[],
     timer : null
   }
 },
 props:{
   cities:Object
 },
 mounted(){
   this.scroll =new Bscroll(this.$refs.list)
 },
 watch: {
   keyword () {
     if (this.timer){
       clearTimeout(this.timer)
     }
     this.timer = setTimeout(() => {
       const result = []
       for (let i in this.cities){
         this.cities[i].forEach(value => {
           if(value.spell.includes(this.keyword)||value.name.includes(this.keyword)){
             result.push(value)
           }
         });
       }
      this.citylist = result
     }, 100)

   }
 },
   methods:{
    showname(city){
      console.log(city)
      this.$store.commit('showCity',city)
      this.$router.push('/')

    }
  }
}

</script>
<style lang="stylus" scoped>
@import '~commonStyls/varible.styl'
  .citysearch
    overflow hidden
    line-height .72rem
    padding .1rem
    background-color  $bgc
    text-align center
    .sreachinput
      box-sizing border-box
      border-radius .06rem
      width 100%
      height  .62rem
      line-height .62rem
      outline 0
      border none
      text-align center
      padding 0 .1rem
  .showcontent
    z-index 1
    overflow hidden
    position absolute
    top 1.68rem
    left 0
    right 0
    bottom 0
    background-color #eee
    .sList
      background-color #fff
      padding-left .2rem
      height .5rem
      line-height .5rem0
      border-bottom #ccc 1px solid



</style>
>
