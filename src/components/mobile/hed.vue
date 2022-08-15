<template>
<div class="py-1 px-3">
  <h2 class="text-2xl font-bold" v-text="props.title_header"></h2>
  <p class="text-base pl-2 text-gray-500" v-text="props.sub_title"> </p>
</div> 
<div v-if="props.search_box" class="bg-purple mt-2 flex items-center justify-center w-11/12 m-auto py-1 px-2 rounded-md">
  <span class="text-xl mr-1" @click="search()"><i class="fa-solid fa-magnifying-glass text-gray-600"></i></span>
  <input type="text" v-model="input" @keyup="search()" id="input--search" class="w-full p-1 bg-transparent	mx-1" placeholder="search ...">
  <span class="px-2 py-1 text-gray-600 rounded-md bg-white"><i class="fa-solid fa-wand-magic-sparkles"></i></span>
</div>
<hr class=" bg-gray-500" v-else>
</template>

<script setup>
import {defineProps} from 'vue'
const { ref }=require('@vue/reactivity')
const {useStore}=require('vuex')

const store = useStore()
const input=ref('')
const props = defineProps(['title_header','sub_title','search_box'])

function search(){
  store.commit('search',input.value)
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#input--search:focus{
  border: none;
}
#input--search::placeholder{
  color: #777;
}
</style>
