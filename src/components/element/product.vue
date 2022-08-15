<template>
<div id="box--product" v-for="product in products" :key="product.id" class="flex w-11/12 m-auto my-3 rounded-xl items-center justify-center shadow-md py-2 px-4">
    <div>
      <img :src="'http://localhost/magenta/src/assets/'+product.image" class="w-48 max-h-40" alt="">
    </div>
    <div>
      <router-link class="text-md -my-1 capitalize	text-gray-700 block" :to="{name:'Product',params:{id:product.id}}" v-text="product.name"></router-link>
      <small class="text-xs text-gray-600">by {{ product.by }}</small>
      <p class="text-xs" v-text="product.desc"></p>
      <div class="flex justify-center mt-5">
        <span class="text-lg flex-1">${{ product.price }}</span>
        <button @click="addToCart(product.id)" class="flex-1 bg-yellow-500 rounded-lg text-white">Buy</button>
      </div>
    </div>
  </div>
    <!-- {{ product }} -->
    
</template>

<script setup>
import {defineProps} from 'vue'
let products = defineProps(['product'])
</script>

<style scoped>
small{
  margin: -5px 0 0 5px;
}
</style>