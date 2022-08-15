<template>
<Desktop class="desktop" v-if="!responsive" />
<Mobile class="mobile" v-else />
</template>

<script setup>
import { ref } from '@vue/reactivity'
import Desktop from './desktop.vue'
import Mobile from './mobile.vue'


  const responsive  = ref()
  setInterval(()=>{
    if(window.screen.width <= 450){
        responsive.value = true
      }else{
        responsive.value = false
      }
  }, 500)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .mobile{
    display: none !important;
  }
@media (max-width : 450px) {
  .desktop{
    display: none;
  }
  .mobile{
    display: flex;
  }
}

</style>
