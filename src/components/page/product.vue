<template>
<div id="hed--product" class="bg-purple-50 pb-1">
    <div class="pt-4 z-10 relative">
        <router-link :to="{name:'Home'}" class="mt-4 ml-6 text-xl bg-white py-2 px-2 rounded-full"><i class="fa-solid fa-arrow-left-long"></i></router-link>
    </div>
    <div class="-mt-4 z-0 relative">
        <img loading="lazy" :src="require('../../assets/'+product[0].image)" alt="">
    </div>
</div>

<div class="mt-3 ml-5 ">
    <div class="m-auto flex items-center justify-start text-xl">
        <div class="w-9/12">
            <h2 class="text-xl font-medium -my-1 capitalize text-gray-800 block" v-text="product[0].name"></h2>
            <small class="text-xs ml-2 text-gray-600">by {{ product[0].by }}</small>
        </div>
        <div class="w-3/12">
            <i class="fa-solid fa-star text-yellow-400 "></i>
            <span class="font-bold text-sm">3.2</span>
        </div>
    </div>
      
    <div class="flex items-center mt-2">
        <span class="text-base text-gray-600 mr-2">color </span>
        <span class="inline-block mx-1 w-5 h-5 bg-red-400 shadow rounded-full"></span>
        <span class="inline-block mx-1 w-5 h-5 bg-green-400 shadow rounded-full"></span>
        <span class="inline-block mx-1 w-5 h-5 bg-yellow-400 border-2 border-red-600 shadow-md rounded-full"></span>
    </div>

    <hr v-if="product[0].details">
    <div class="mt-2 m-1">
        <p class="text-lg" v-if="product[0].details">Details</p>
        <ul class="text-sm ml-2 text-gray-700">
            <li v-for="(details , index) in product[0].details" :key="details" > {{ index }} : {{ details }}</li>
        </ul>
    </div>
    <hr v-if="product[0].details">
    
    <div class="mt-4">
        <div class="text-sm ">
            <span class="p-1 mx-1 tabs" :class="description" @click="comments = 'text-xs';description = 'active'">Description</span>
            <span class="p-1 mx-1 tabs" :class="comments" @click="description = 'text-xs';comments = 'active'">Comments</span>
        </div>
        <div class="text-sm mt-4">
            <div class=" tabs-panel" :class="description">
                <p class="text-sm text-gray-600 px-1 pr-2 py-2" v-text="product[0].description"></p>
            </div>
            <div class=" tabs-panel" :class="comments" >
                <div v-for="(comment , index) in comment" :key="index">
                    <div class="flex w-11/12 px-3 py-4 rounded-md shadow-md bg-gray-50 my-2">
                        <div class="w-11/12" >
                            <p class="text-base font-medium" v-text="comment.title"></p>
                            <p class="text-xs text-gray-600 ml-4" v-text="comment.name"></p>
                            <p class="text-sm ml-2 mt-1" v-text="comment.comment"></p>
                        </div>
                        <div class="flex items-center justify-center text-base w-1/12">
                            <span @click="likeComment($event)">
                                <i class="fa-regular fa-heart" v-if="!comment.like"></i>
                                <i class="fa-solid fa-heart text-red-500" v-else></i>
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
<hr class="my-4">
    <p class="font-medium text-lg">
        Proposed
    </p>
    <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="false"
    class="mySwiper cursor-pointer"
  >
  <swiper-slide v-for="product in products" :key="product.id" class="box--product flex w-11/12 m-auto my-3 rounded-xl items-center justify-center shadow-md py-2 px-4">
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
  </swiper-slide>
  </swiper>
    
</div>
<div>
</div>

<div class="w-full pt-2 pb-3 bg-gray-100 fixed bottom-0 z-40">
  <div class="w-10/12 m-auto flex items-center justify-center text-xl">
    <span class="text-lg flex-1 font-bold">${{ product[0].price }}</span>
    <button @click="addToCart(product[0])" class="flex-1 bg-yellow-500 rounded-lg text-white">Buy</button>
    <!-- <span class="flex items-center justify-center flex-1"><i class="fa-solid fa-shop"></i></span>
    <span class="flex items-center justify-center flex-1"><i class="fa-solid fa-user"></i></span> -->
  </div>
</div>
 <Footer />

</template>

<script setup>
import Footer from '../mobile/footer.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';


import "../../../node_modules/swiper/swiper.min.css";
  // Import Swiper styles
  import 'swiper/css';
  
import "swiper/css/pagination";
import "swiper/css/navigation";

const { computed, ref }=require("@vue/runtime-core");
const { useRoute }=require("vue-router");
const { useStore }=require("vuex");

const store = useStore();
const route = useRoute();

store.commit('getProduct',route.params.id)
const products = computed(()=> store.state.product);
const product = computed(() => store.state.S_product);
const comment = computed(() => store.getters.getComments);

const description = ref('active')
const comments = ref('text-xs')
// const description = ref('active')
// const comments = ref('text-xs')

function addToCart(product){
  store.dispatch('addToCart',product)
  store.commit('changeStatusCart')
}
function likeComment(event){
    event.target.parentNode.classList.add('active')
    event.target.parentNode.innerHTML ='<i class="fa-solid fa-heart text-red-500"></i>'
}
</script>

<style scoped>
.swiper-slide{
    /* width: 90% !important; */
    padding: 10px 40px;
    margin: auto;
}
.tabs{
    opacity: .5;
}
.tabs.active{
    opacity: 1;
    margin: 0;
    color: rgb(81 31 171);
}
.tabs-panel{
    display: none;
    -webkit-animation: fadeEffect 1s;
    animation: fadeEffect 1s;
}
.tabs-panel.active{
    display: block;
}
span.active{
    -webkit-animation: scalEffect .7s;
    animation: scalEffect .7s;
}
@-webkit-keyframes fadeEffect {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes fadeEffect {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes scalEffect {
  0%{transform: scale(1);}
  25%{transform: scale(1.1);}
  50%{transform: scale(1);}
  75%{transform: scale(1.06);}
  100%{transform: scale(1);}
}
</style>