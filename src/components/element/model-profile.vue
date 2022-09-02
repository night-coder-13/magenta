<template>
<div v-if="props.status_model_setting === 'true'" class="fixed top-0 w-full h-full" >
  <div @click="$emit('callBackStatus','false')" class="fixed top-0 z-40 w-full h-full bg-model" style="background:#2d2d2d54;"></div>
  <div class="relative w-8/12 z-50 h-auto m-auto mt-36 rounded-md bg-white px-4 py-2 text-center model">
    <span @click="logout()">Log out</span>
    <hr class="bg-red-400 my-2">
    <p>Contact support</p>
    <p class="text-red-600 mt-5 bg-red-50 rounded-md" @click="$emit('callBackStatus','false')">Close</p>
  </div>
</div>

<div v-if="props.status_model_edit === 'true'" class="fixed top-0 w-full h-full" >
  <div @click="$emit('callBackStatusEdit','false')" class="fixed top-0 z-40 w-full h-full bg-model" style="background:#2d2d2d54;"></div>
  <div class="relative w-10/12 z-50 h-auto m-auto mt-20 rounded-md bg-white px-4 py-5 text-center model">
    <p class="font-bold text-lg mb-2">Edit profile</p>
    <form action="" @submit.prevent="submit(profile)">
      <input type="text" class="w-full p-2 bg-gray-50 rounded-md my-1 shadow" v-model="profile.name" placeholder="Name">
      <input type="text" class="w-full p-2 bg-gray-50 rounded-md my-1 shadow" v-model="profile.family" placeholder="Family">
      <input type="text" class="w-full p-2 bg-gray-50 rounded-md my-1 shadow" v-model="profile.number" placeholder="Number">
      <input type="email" class="w-full p-2 bg-gray-50 rounded-md my-1 shadow" v-model="profile.email" placeholder="Email">
      <div class="mt-5 w-full flex">
        <p class="text-red-600 bg-red-50 rounded-md p-1 w-4/12 mx-1" @click="$emit('callBackStatusEdit','false')">Close</p>
        <input type="submit" value="Submit" class="w-8/12 rounded-md mx-1 bg-blue-500 text-white font-medium p-1">
      </div>
    </form>
    
  </div>
</div>
</template>

<script setup>
import Swal from 'sweetalert2'
import {defineProps , defineEmits} from 'vue'

import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

const store = useStore();
const profile = computed(() => store.getters['profile/Profile'])

const props = defineProps(['status_model_setting','status_model_edit'])
const emit = defineEmits(['callBackStatusEdit:false','callBackStatus:false'])
function submit(p){
  store.dispatch('profile/editProfile',p)
  Swal.fire({
      icon: 'success',
      title: 'Information changed successfully :)',
      timerProgressBar: true,
      showConfirmButton: false,
      timer: '3000',
      toast: true,
      position : 'top'
  })
  emit('callBackStatusEdit')
}
function logout(){
  store.dispatch('profile/logout')
  emit('callBackStatus')
}

</script>

<style scoped>
/* 5892101261539999 */
.model{
  animation-name: alert;
  animation-direction: initial;
  animation-duration: .2s;
}
.bg-model{
  animation-name: faed;
  animation-direction: initial;
  animation-duration: .3s;
}
@keyframes alert {
  0%{
    transform: scale(0.9);
  }
  100%{
    transform: scale(1);
  }
}
@keyframes faed {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>