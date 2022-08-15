<template>
<div class="">
    <div class="flex justify-between">
        <router-link :to="{name : 'Home'}" class="py-3 px-5 text-xl"><i class="fa-solid fa-arrow-left"></i></router-link>
        <span class="py-3 px-5 text-xl"><i class="fa-solid fa-gear"></i></span>
    </div>
    <div>
        <img src="http://shoping.gigfa.com/avtar.png" class="w-32 m-auto rounded-full shadow" alt="">
        <!-- <img src="http://localhost/magenta/src/assets/avtar.png" class="w-32 m-auto rounded-full shadow" alt=""> -->
    </div>
    <div class="grid justify-center mt-1">
        <p class="m-auto text-gray-700 text-lg font-bold">Mehdi</p>
        <p class="m-auto text-gray-600 text-sm">09902774517</p>
        <p class="m-auto text-gray-600 text-sm">mahdisosho@gmail.com</p>
    </div>
    <div class="flex mt-6">
        <div class="w-5/12 justify-center flex"><button class="bg-blue-500 ml-3 py-1 px-4 rounded-lg text-white">Edit profile</button></div>
        <div class="w-7/12 justify-center flex"><button class="bg-yellow-500 py-1 px-4 rounded-lg text-white">Change password</button></div>
    </div>
    <div class="w-full mt-4">
        <p class="p-2">Orders</p>
        <div class="w-11/12 m-auto bg-purple p-2 rounded-md shadow my-3">
            <p class="text-lg">Q_order1458</p>
            <p class="text-sm ml-2 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="flex mt-6">
                <div class="flex-1 justify-start flex"><span class="py-1 px-4 text-gray-700">$1240.50</span></div>
                <div class="flex-1 justify-center flex"><button class="bg-white py-1 px-4 rounded-lg text-gray-600 text-sm font-bold">Show more</button></div>
            </div>
        </div>
        <div class="w-11/12 m-auto bg-purple p-2 rounded-md shadow my-3">
            <p class="text-lg">A_order1789</p>
            <p class="text-sm ml-2 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="flex mt-6">
                <div class="flex-1 justify-start flex"><span class="py-1 px-4 text-gray-700">$2004.13</span></div>
                <div class="flex-1 justify-center flex"><button class="bg-white py-1 px-4 rounded-lg text-gray-600 text-sm font-bold">Show more</button></div>
            </div>
        </div>
    </div>
</div>
<br><br><br>
 <MenuBar />

</template>

<script setup>
import MenuBar from '../mobile/menuBar.vue'

// const { computed }=require("@vue/runtime-core");
// const { useRoute }=require("vue-router");
// const { useStore }=require("vuex");

// const store = useStore();
// const route = useRoute();



</script>

<style scoped>

</style>