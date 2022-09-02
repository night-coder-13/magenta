<template>
<div class="w-full pt-2 pb-3 bg-gray-100 fixed bottom-0 z-40">
  <div class="w-10/12 m-auto flex items-center justify-center text-purple text-xl">
    <router-link :to="{name:'Home'}" class="flex items-center justify-center flex-1"><i class="fa-solid fa-shop"></i></router-link>
    <router-link :to="{name:'Profile'}" class="flex items-center justify-center flex-1"><i class="fa-solid fa-user"></i></router-link>
    <router-link :to="{name : 'Interest'}" class="flex items-center justify-center flex-1"><i class="fa-solid fa-heart"></i></router-link>
    <router-link :to="{name : 'Cart'}" class="flex items-center justify-center relative flex-1">
      <i class="fa-solid fa-bag-shopping"></i>
        <span v-if="cart > 0" class="relative -top-1 inline-flex rounded-full h-3 w-3 bg-red-500">
          <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
        </span>
    </router-link>
  </div>
</div>
</template>

<script setup>
const { computed }=require("@vue/runtime-core");
const { useStore }=require("vuex");

  
  const store = useStore();
  let cart = computed(()=> store.state.statusCart);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-active{
    animation-name: active;
     animation-duration: .3s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-fill-mode: both;
}
@keyframes active {
  0%{
    margin-top: 0;
    color: #5667e7;
  }
  100%{
    margin-top: -10px;
    color: #273491;
  }
}
</style>
