<template>

 <Header />
 <Hed title_header="My Cart" />

<div class="w-full" v-if="cart">
  <div class="flex justify-center mt-5">
      <span class="text-lg flex-1 pl-2">Total : ${{ totalAmount }}</span>
      <button @click="payment()" class="flex-1 bg-yellow-500 mx-3 shadow rounded-lg text-white">bill payment</button>
    </div>
    <hr class="my-2">

  <div id="box--product" v-for="product in products" :key="product.id" class="flex w-11/12 m-auto my-3 rounded-xl items-center justify-center shadow-md py-2 px-4">
    <div class="w-5/12">
      <img :src="require('../../assets/'+product.image)" class="w-48 max-h-40" alt="">
    </div>
    <div class="w-7/12">
      <router-link class="text-md -my-1 capitalize	text-gray-700 block" :to="{name:'Product',params:{id:product.id}}" v-text="product.name"></router-link>
      <small class="text-xs text-gray-600">by {{ product.by }}</small>
      <p class="text-lg flex-1">${{ product.price * product.quantity }}</p>
      <div class="flex justify-center mt-5">
        <button @click="removeCart(product.id)" class="w-4/12 bg-red-500 rounded-lg text-white"><i class="fa-solid fa-trash-can"></i></button>
        <div class="text-lg flex pl-2 ml-2 w-8/12">
          <button @click="minusCart(product.id)" class="flex-1 flex justify-center cursor-pointer items-center"><i class="fa-solid fa-minus"></i></button>
          <span class="flex-1 flex justify-center items-center">{{ product.quantity }}</span>
          <button @click="plusCart(product.id)" class="flex-1 flex justify-center cursor-pointer items-center"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
    </div>
  </div>
</div> 
<div v-else>
  <div class=" grid justify-center">
    <img src="../../assets/empty_cart.png" class="w-9/12 m-auto mt-16" alt="">
    <span class="m-auto mt-2 text-lg " >Empty Cart!!</span>
  </div>
</div>

 <MenuBar />

<br><br><br>
</template>

<script setup>
import Swal from 'sweetalert2';
import Header from '../mobile/header.vue'
import Hed from '../mobile/hed.vue'
import MenuBar from '../mobile/menuBar.vue'

const { computed }=require("@vue/runtime-core");
const { useStore }=require("vuex");

const store = useStore();
const products = computed(()=>store.state.cart)
const totalAmount = computed(()=>store.getters.totalAmount)
let cart = computed(()=> store.state.statusCart);


function plusCart(id){
   store.dispatch('plusCart',id)
}
function minusCart(id){
   store.dispatch('minusCart',id)
}
function removeCart(id){

    Swal.fire({
        icon: 'warning',
        title: 'Delete Product?',       
        showCancelButton: true,
        cancelButtonColor: '#4e9fc7',
        confirmButtonText: 'Delete',
        confirmButtonColor: '#ef4444',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          store.dispatch('removeCart',id)
        }
    })

}
function payment(){
  store.dispatch('clearCart')
  Swal.fire({
        icon: 'success',
        title: 'The bill was paid',       
    })
}

</script>

<style scoped>

</style>