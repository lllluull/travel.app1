<template>
<div>
  <cityheader></cityheader>
  <citysearch></citysearch>
  <citylist :hotCities = 'hotCities' :cities = 'cities'></citylist>
  <right :cities = 'cities'></right>
  </div>
</template>
<script>
  import cityheader from './cityheader'
  import citysearch from './citysreach'
  import citylist from './citylist'
  import right from './right'
  import axios from 'axios'
  export default {
    components:{
      cityheader,
      citysearch,
      citylist,
      right
    },
    data(){
      return{
      hotCities:[],
      cities: {}
      }

    },
    mounted(){
      this.getMsg()
    },
    methods:{
      getMsg(){
        axios.get('/api/city.json').then(this.saveMsg)
      },
      showMsg(msg){
        console.log(msg.data.data)
      },
      saveMsg(msg){
        const myMsg = msg.data.data
        this.hotCities = myMsg.hotCities
        this.cities = myMsg.cities

      }
    }
  }
</script>
