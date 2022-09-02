<template>
<div class="w-full h-full mb-8" >
  <div class="relative w-10/12 z-50 h-auto m-auto mt-12 rounded-md px-4 py-5 text-center model">
    <p class="font-bold text-lg mb-8">Login account</p>
    <form action="" @submit.prevent="login()">
      <input type="text" class="w-full p-2 bg-gray-50 rounded-md my-1 shadow" placeholder="usrname">
      <input type="password" class="w-full p-2 bg-gray-50 rounded-md my-1 shadow" placeholder="password">
      <div class="mt-5 w-full flex">
        <input type="submit" value="Login" class="w-8/12 m-auto rounded-md bg-blue-500 text-white font-medium p-1">
      </div>
    </form>
    
  </div>
</div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore();
function login(){
  store.dispatch('profile/login')
}

</script>

<style scoped>

</style>