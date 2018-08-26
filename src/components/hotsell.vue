<template>
  <div class='hotsell'>
   <div class='maintitle'>
     <h1 >热销产品</h1>
     </div>

    <div class = 'showitem' v-for='item in hotList' :key=item.id>
      <img class='itemimg' :src="item.imgurl">
      <div class='iteminfo'>
        <p class='title'>{{item.title}}</p>
        <p class='address'>{{item.address}}</p>
        <button class='button'>更多详情</button>
      </div>
    </div>



  </div>
</template>
<script>
export default {
  data () {
    return {
      hotList:[
        {id:1,imgurl:'http://img1.qunarzz.com/sight/p0/1501/c2/c212a154649088c1.water.jpg_200x200_69d1df69.jpg',
          title:'水立方公园',address:'北京市朝阳区天辰东路11号奥林匹克公园内'},
        {id:2,imgurl:'http://img1.qunarzz.com/sight/p0/1501/c2/c212a154649088c1.water.jpg_200x200_69d1df69.jpg',
          title:'水立方公园',address:'北京市朝阳区天辰东路11号奥林匹克公园内'},
          {id:3,imgurl:'http://img1.qunarzz.com/sight/p0/1501/c2/c212a154649088c1.water.jpg_200x200_69d1df69.jpg',
          title:'水立方公园',address:'北京市朝阳区天辰东路11号奥林匹克公园内'},
          {id:4,imgurl:'http://img1.qunarzz.com/sight/p0/1501/c2/c212a154649088c1.water.jpg_200x200_69d1df69.jpg',
          title:'水立方公园',address:'北京市朝阳区天辰东路11号奥林匹克公园内'},
          {id:5,imgurl:'http://img1.qunarzz.com/sight/p0/1501/c2/c212a154649088c1.water.jpg_200x200_69d1df69.jpg',
          title:'水立方公园',address:'北京市朝阳区天辰东路11号奥林匹克公园内'},
          {id:6,imgurl:'http://img1.qunarzz.com/sight/p0/1501/c2/c212a154649088c1.water.jpg_200x200_69d1df69.jpg',
          title:'水立方公园',address:'北京市朝阳区天辰东路11号奥林匹克公园内'},
      ]
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

