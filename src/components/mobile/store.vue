<template>
<div class="w-full">

  <div v-for="product in products" :key="product.id" class="box--product flex w-11/12 m-auto my-3 rounded-xl items-center justify-center shadow-md py-2 px-4">
    <div class="w-5/12">
      <img loading="lazy" :src="'http://shoping.gigfa.com/'+product.image" class="w-48 max-h-40" alt="">
      <!-- <img loading="lazy" :src="'http://localhost/magenta/src/assets/'+product.image" class="w-48 max-h-40" alt=""> -->
    </div>
    <div class="w-7/12">
      <router-link class="text-md -my-1 capitalize	text-gray-700 block" :to="{name:'Product',params:{id:product.id}}" v-text="product.name"></router-link>
      <small class="text-xs text-gray-600">by {{ product.by }}</small>
      <p class="text-xs" v-text="product.desc"></p>
      <div class="flex justify-center mt-5">
        <span class="text-lg flex-1">${{ product.price }}</span>
        <button @click="addToCart(product)" class="flex-1 bg-yellow-500 rounded-lg text-white">Buy</button>
      </div>
    </div>
  </div>
</div> 
<br><br>
</template>

<script setup>
const { computed }=require("@vue/runtime-core");
const { useStore }=require("vuex");

const store = useStore();
const products = computed(()=> store.state.product);


function addToCart(product){
  store.dispatch('addToCart',product)
  store.commit('changeStatusCart')
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
small{
  margin: -5px 0 0 5px;
}
</style>
