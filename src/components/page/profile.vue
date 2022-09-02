<template>
<div v-if="login" class="">
    <div class="flex justify-between">
        <router-link :to="{name : 'Home'}" class="py-3 px-5 text-xl"><i class="fa-solid fa-arrow-left"></i></router-link>
        <span class="py-3 px-5 text-xl btn-setting" @click="statusModelSetting()" :class="btnSetting"><i class="fa-solid fa-gear"></i></span>
    </div>
    <div>
        <img src="../../assets/avtar.png" class="w-32 m-auto rounded-full shadow" alt="">
    </div>
    <div class="grid justify-center mt-1">
        <p class="m-auto text-gray-700 text-lg font-bold capitalize" v-text="profile.name"></p>
        <p class="m-auto text-gray-600 text-sm" v-text="profile.number"></p>
        <p class="m-auto text-gray-600 text-sm" v-text="profile.email"></p>
    </div>
    <div class="flex mt-6">
        <div class="w-5/12 justify-center flex"><button @click="statusModelEdit()" class="bg-blue-500 ml-3 py-1 px-4 rounded-lg text-white">Edit profile</button></div>
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
<div v-else><Login /></div>
<br>
 <Footer />

 <MenuBar />
 <ModelSettingProfile
    @call-back-status-edit="statusModelEdit(callback)" :status_model_edit="StatusModelEdit"
    @call-back-status="statusModelSetting(callback)" :status_model_setting="StatusModelSetting" 

/>

</template>

<script setup>
import MenuBar from '../mobile/menuBar.vue'
import Footer from '../mobile/footer.vue'
import ModelSettingProfile from '../element/model-profile.vue'
import Login from '../element/login.vue'
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

const store = useStore();
const StatusModelSetting = ref('false')
const StatusModelEdit = ref('false')
const btnSetting = ref('')
const profile = computed(() => store.getters['profile/Profile'])
const login = computed(() => store.state.profile.login)

function statusModelSetting(callback = ''){
    if(StatusModelSetting.value !== 'true'){
        StatusModelSetting.value = 'true';
        btnSetting.value = 'active';
    }else{
        StatusModelSetting.value = callback;
        btnSetting.value = '';
    }
}
function statusModelEdit(callback = ''){
    if(StatusModelEdit.value !== 'true'){
        StatusModelEdit.value = 'true';
    }else{
        StatusModelEdit.value = callback;
    }
}

</script>

<style scoped>
.btn-setting.active{
 -webkit-animation: scalEffect .7s;
    animation: scalEffect .7s;
}
@keyframes scalEffect {
  0%{transform: scale(1);}
  25%{transform: scale(1.1);}
  50%{transform: scale(1);}
  75%{transform: scale(1.06);}
  100%{transform: scale(1);}
}
</style>