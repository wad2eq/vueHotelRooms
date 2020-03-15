<template>

  <div class="flex">
      <div :key='val' v-for="val in listOfRooms" >
        <div class="el"> {{ val }}</div>
        <div class="close" @click="close(val)">x</div>
      </div>
      {{listOfRooms}}
  </div>
</template>

<script>
export default {
    name:'Rooms',
    props:['listOfRooms'],
    data(){
        return {
            show:true
        }
    },
    methods:{
        close(val){
            this.$emit('rebuild-list', val)
        }
    }
}
</script>

<style>
.flex{
    display: flex;
    flex-wrap: wrap;
}
.el{
    width: 20px;
    height: 20px;
    border:1px solid palevioletred;
    margin:4px;
}
.close{
    height: 10px;
    width:10px;
    background: rebeccapurple;
    text-indent: 1000px;
    overflow: hidden;
}
</style>