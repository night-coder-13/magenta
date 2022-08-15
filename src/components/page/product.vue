<template>
<div id="hed--product" class="bg-purple-50 pb-1">
    <div class="pt-4 z-10 relative">
        <router-link :to="{name:'Home'}" class="mt-4 ml-6 text-xl bg-white py-2 px-2 rounded-full"><i class="fa-solid fa-arrow-left-long"></i></router-link>
    </div>
    <div class="-mt-4 z-0 relative">
        <img :src="'http://shoping.gigfa.com/'+product[0].image" alt="">
        <!-- <img :src="'http://localhost/magenta/src/assets/'+product[0].image" alt=""> -->
    </div>
</div>
<div class="mt-3 ml-5 ">
    <div class="m-auto flex items-center justify-start text-xl">
        <div class="w-9/12">
            <h2 class="text-xl -my-1 capitalize text-gray-800 block" v-text="product[0].name"></h2>
            <small class="text-xs ml-2 text-gray-600">by {{ product[0].by }}</small>
        </div>
        <div class="w-3/12">
            <i class="fa-solid fa-star text-yellow-400 "></i>
            <span class="font-bold text-sm">3.2</span>
        </div>
    </div>
    
      <p class="text-sm text-gray-600 px-1 pr-2 py-2" v-text="product[0].description"></p>
      
    <div class="flex items-center mt-2">
        <span class="text-base text-gray-600 mr-2">color </span>
        <span class="inline-block mx-1 w-5 h-5 bg-red-400 shadow rounded-full"></span>
        <span class="inline-block mx-1 w-5 h-5 bg-green-400 shadow rounded-full"></span>
        <span class="inline-block mx-1 w-5 h-5 bg-yellow-400 border-2 border-red-600 shadow-md rounded-full"></span>
    </div>
</div>
<div>
</div>

<div class="w-full pt-2 pb-3 bg-gray-100 fixed bottom-0 ">
  <div class="w-10/12 m-auto flex items-center justify-center text-xl">
    <span class="text-lg flex-1 font-bold">${{ product[0].price }}</span>
    <button class="flex-1 bg-yellow-500 rounded-lg text-white">Buy</button>
    <!-- <span class="flex items-center justify-center flex-1"><i class="fa-solid fa-shop"></i></span>
    <span class="flex items-center justify-center flex-1"><i class="fa-solid fa-user"></i></span> -->
  </div>
</div>
<br><br><br>
</template>

<script setup>
const { computed }=require("@vue/runtime-core");
const { useRoute }=require("vue-router");
const { useStore }=require("vuex");

const store = useStore();
const route = useRoute();

store.commit('getProduct',route.params.id)
const product = computed(() => store.state.product);


</script>

<style scoped>

</style>