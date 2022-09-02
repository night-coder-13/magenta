<template>
<div class="flex w-full ">
  <div class="flex-1 pt-1">
    <span class="ml-8 caveat capitalize text-3xl">mohito</span>
  </div>
  <div class="flex justify-end flex-1 py-3 px-6">
    <span @click="activeMenu()" class="font-bold text-2xl hover:text-gray-600 cursor-pointer"><i class="fa-solid fa-bars"></i></span>
  </div>
</div>
<div id="body--menu" :class="statusMenu" class="w-full h-full sm:hidden fixed top-0 text-gray-700 z-50">
    <div class="w-full h-full fixed bg-dark">
        <div id="hed--profile" class="flex justify-end text-2xl">
          <span  @click="activeMenu()" class="cursor-pointer text-red-600 hover:text-red-400"><i class="fa-solid fa-xmark my-3 mx-4"></i></span>
        </div>
        <hr class="mt-4 mb-1">
        <div class="p-4" id="body--profile">
            <ul class="text-lg font-bold">
              <li><router-link  @click="activeMenu()" :to="{name : 'Home'}">Home</router-link></li>
              <li><router-link  @click="activeMenu()" :to="{name : 'Cart'}">Cart</router-link></li>
              <li><router-link  @click="activeMenu()" :to="{name : 'Home'}">Contact us</router-link></li>
              <li><router-link  @click="activeMenu()" :to="{name : 'Interest'}">Interest</router-link></li>
              <li><router-link  @click="activeMenu()" :to="{name : 'Profile'}">About me</router-link></li>
            </ul>
        </div>
    </div>
    <div class="w-full h-full" ></div>
</div>
</template>

<script setup>
const { computed }=require('@vue/runtime-core');
const {useStore}=require('vuex')

const store = useStore()
const statusMenu= computed(()=> store.state.statusMenu);

function activeMenu(){
  store.commit('changeStatusMenu')
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#body--menu{
    left: -105%;
    transition: .7s;
    background-color: white;
}
#body--menu.active{
    left: 0;
}
</style>
