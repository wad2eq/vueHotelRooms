<template>
  <div>
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
  }
}
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
.text{
  font-family: $font;
  color:$yellow2;
  @media screen and (min-width:800px){
    max-width: 70%;
    margin:0 auto;
    .note{
      padding: 0 $input-size;
    }
  }
}
.note{
  display: flex;
  color:$gray;
  font-weight: 300;
  font-size: .9em;
  font-style: italic;

}
.title{
  font-family: $header;
  color: $gray;
  border-bottom: 1px solid $green3;
  &:after{
    content: '';
    display: block;
    height: 1px;
    width: 50%;
    margin:0 auto;
    margin-bottom: -1px;
    background:$green1;
  }

}
h2, h3{
  font-weight: 400;
  font-family: $header;
}
body{
  font-family: $font;
  color:$color5;
  background: $color1;
}
img{
  max-width: 100%;
  height: auto;
}
.svg-ikon{
  width:30px;
  height: 30px;
}
.svg-color-yellow{
  fill:$yellow2;
  // stroke:$yellow2;
}
.errorMessage{
  color: $red3;
  text-align: center;
  font-family: $big-header;
  font-size: 17px;
}
.box-container{
  padding: $input-size/2;
  margin:$input-size/2;
  box-shadow:0 1px 1px 0 rgba(38,39,48,.5),0 1px 3px 1px rgba(38, 39, 48, .9);
  transition:box-shadow 135ms cubic-bezier(.4,0,.2,1),width 235ms cubic-bezier(.4,0,.2,1);
  background: $color2;
  position: relative;
  color:#fff;
}
.box-container:hover{
  box-shadow: 0 1px 3px 1px rgba(38,39,48,.3),0 2px 8px 4px rgba(38,39,48,.5);
  background: darken($color2, 2);
}
.bg-gray{
  background-color: lighten($light-greay, 16);
}
.container {
  max-width: 1200px;
  margin:0 auto;
}
.padding{
  padding:.5em ;
  @media screen and(min-width:800px){
    padding:1em 3em 3em ;
  }
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
.flex-center{
  justify-content: center;
  align-items: center;
}
.text-center{
  text-align: center;
}
.border-light{
  border:$border;
}
.card {
  background: $gray;
  color: $color1 !important;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.btn{
  padding:1em 2em;
  border: 1px solid darken($green3, 14);
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0 3px 4px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.24);
  background: darken($green1, 10);
  border-radius:$input-size/4 ;
  cursor: pointer;
}
.btn:hover{
   box-shadow: 0 6px 6px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22);
}
.btn:active{
  box-shadow: 0 2px 3px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.22);
}
.card:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.remove-block{
  display: block;
  position: absolute;
  color:$light-greay;
  right: $switcher-size/2;
  top: $switcher-size/2;
  height: $switcher-size;
  width: $switcher-size;
  padding:$switcher-size/2;
  box-sizing: border-box;
  &:hover{
    color:$color4;
    cursor: pointer;
    &:after, &:before{
      background-color:$red2;
    }
  }
  &:after, &:before{
    position: absolute;
    content: '';
    display: block;
    width: $switcher-size;
    height: 2px;
    margin: auto;
    left:0;
    margin: 0;
    background-color:$red1;
  }
  &:after{
    transform: rotate(45deg);
  }
  &:before{
    transform: rotate(-45deg);
  }
      }
</style>
