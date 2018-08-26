<template>
  <div class="icon" >
    <swiper >
      <swiper-slide v-for='(item,index) in pages' :key=index>
    <div class="iconcontent" v-for="img in item" :key=img.id>
      <div   class="iconimg">
      <img  class='imgcontent' :src='img.url'/>
      </div>
      <p class='des'>{{img.name}}</p>
    </div>
    </swiper-slide>

    </swiper>
  </div>
</template>
<script>
export default {
  data(){
    return{
      img:[
        {id:1,url:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",name:'景点门票'},
        {id:2,url:"http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",name:'亲子游'},
        {id:3,url:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",name:'金华必游'},
        {id:4,url:"http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",name:'自然风光'},
        {id:5,url:"http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",name:'一日游'},
        {id:6,url:"http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",name:'普陀山'},
        {id:7,url:"http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",name:'横店'},
        {id:8,url:"http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",name:'圆明园'},
        {id:9,url:"http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",name:'其他'},
        {id:10,url:"http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",name:'另外'},

      ]
    }
  },
  computed:{
    pages () {
      const pages = []
      this.img.forEach((item,index) => {
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
  margin-top :.1rem
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

