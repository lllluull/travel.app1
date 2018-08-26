<template>
  <div class="icon" >
    <swiper >
      <swiper-slide v-for='(item,index) in pages' :key=index>
    <div class="iconcontent" v-for="img in item" :key=img.id>
      <div   class="iconimg">
      <img  class='imgcontent' :src='img.imgUrl'/>
      </div>
      <p class='des'>{{img.desc}}</p>
    </div>
    </swiper-slide>

    </swiper>
  </div>
</template>
<script>
export default {
  props:{
    iconList:Array
  },
  data(){
    return{

    }
  },
  computed:{
    pages () {
      const pages = []
      this.iconList.forEach((item,index) => {
        const page = Math.floor(index/8)
        if(!pages[page]){
          pages[page]=[]
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}

</script>
<style lang="stylus" scoped>
.icon
  overflow :hidden
  height :0
  height :0
  padding-bottom :50%
  margin-top :.05rem
  .iconcontent
    overflow :hidden
    position :relative
    height :0
    width 25%
    padding-bottom :25%
    float :left
    .iconimg
      position :absolute
      top:0
      left :0
      right :0
      bottom :.44rem
      .imgcontent
        height :100%
        display :block
        margin:0 auto
    .des
      position :absolute
      left :0
      right :0
      bottom :0
      text-align :center
      height :.44rem
      line-height : .44rem
      color :#333
</style>

