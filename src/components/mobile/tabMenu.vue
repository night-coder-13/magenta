<template>
<div>
  <ul class="flex overflow-x-scroll my-3 mx-1">
    <li class="mx-2 py-1 px-3 rounded-full bg-gray-200 text-sm text-gray-600 tab--menu" 
    v-for="(item , index) in menu" :key="item" v-text="item"
    @click="tab($event,item)" :class="index === 0 ? ' active' : ''"
    ></li>
  </ul>
</div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

const store = useStore()
const menu = ref(['All','Table','Chair','Lamp','Flower'])
// const tmenu = document.getElementsByClassName('tab--menu')
  
function tab(e,value){
  let tablinks = document.getElementsByClassName("tab--menu");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  e.target.classList.add('active')
  store.commit('tabMenu',value)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab--menu.active{
  background-color: rgb(125, 125, 125);
  color: white;
}
</style>
