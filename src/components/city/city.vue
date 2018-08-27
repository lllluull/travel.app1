<template>
<div>
  <cityheader></cityheader>
  <citysearch :cities = 'cities'></citysearch>
  <citylist
  :hotCities = 'hotCities'
  :cities = 'cities'
  :letter = letter
  ></citylist>
  <right
  :cities = 'cities'
  @change="handleLetterChange"></right>
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
      cities: {},
      letter:''
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

      },
      handleLetterChange(letter){
        this.letter = letter
      }
    }
  }
</script>
