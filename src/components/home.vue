<template>
  <div>
  <homeheader></homeheader>
  <headerswiper :swiperList = 'swiperList'></headerswiper>
  <iconhome :iconList = 'iconList'></iconhome>
  <hotsell :recommendList = 'recommendList'></hotsell>
  <weekend :weekendList = 'weekendList'></weekend>
  </div>
</template>
<script>
  import homeheader from './homeHeader'
  import headerswiper from './headerswiper'
  import iconhome from './icon'
  import hotsell from './hotsell'
  import weekend from './weekend'
  import axios from 'axios'
  export default{
    data(){
      return{
        iconList:[],
        recommendList:[],
        swiperList:[],
        weekendList:[]

      }
    },
    components:{
      homeheader,
      headerswiper,
      iconhome,
      hotsell,
      weekend
    },
    methods:{
      getMsg(){
        axios.get('/api/index.json').then(
          this.saveMsg,
        )
      },
      showMsg(msg){
        console.log(msg.data.data)

      },
      saveMsg(msg){
        const myMsg = msg.data.data
        this.iconList = myMsg.iconList
        this.recommendList = myMsg.recommendList
        this.swiperList = myMsg.swiperList
        this.weekendList = myMsg.weekendList

      }
    },
    mounted(){
      this.getMsg()
    }
  }
</script>
<style scoped>

</style>

