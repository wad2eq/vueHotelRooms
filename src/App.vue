<template>
  <div>
    <h1>wad</h1>
    <!-- <img alt="Vue logo" :src="hotels.logo"> -->
    <Hotel />
  </div>
</template>

<script>
// App vue pass what hottel do we need
import Hotel from './components/Hotel.vue'

export default {
  name: 'App',
  components:{
    Hotel,
  },
  data(){
    return{
    }
  }
}
</script>
<style lang="scss">
$light-greay: hsla(360, 0%, 78%, 1);
$border:1px solid $light-greay;
* {
  box-sizing: border-box;
}
img{
  max-width: 100%;
  height: auto;
}
.bg-gray{
  background-color: lighten($light-greay, 16);
}
.container {
  max-width: 1200px;
  margin:0 auto;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
.border-light{
  border:$border;
  border-radius: 4px;
}
.card {
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.card:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
</style>
