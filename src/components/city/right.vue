<template>
<div>
  <ul class='alllist'>
    <li v-for='(value,key) in cities' :key='key'
     @click='handltest'
   


     >{{key}}</li>
  </ul>
  </div>
</template>
<script>
  export default {
    props:{
      cities:Object
    },
    methods:{
      handltest(e){
        this.$emit('change',e.target.innerText)


      }
    }

  }
</script>
<style lang="stylus" scoped>
@import '~commonStyls/varible.styl';
  .alllist
    display flex
    flex-direction  column
    justify-content center
    position absolute
    top 1.5rem
    right  .1rem
    bottom 0
    color $bgc


</style>
