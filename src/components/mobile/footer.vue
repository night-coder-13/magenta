<template>
<div class="grid pb-16 pt-4 mt-8 shadow-md" style="background : #1b1d27;color:#fff;">
  <div>
    <div class="px-5 py-3">
      <h2 class="text-xl font-bold">YOUR BRAND NAME</h2>
      <div class="relative">
        <p class="ml-2 mt-1 text-xs text-gray-100 desc" :class="showMore">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus.
        </p>
        <button v-if="showMore === ''" @click="showMore = showMore=='active'?'':'active'" :class="showMore" class="absolute grid justify-center items-center w-full text-gray-100 text-sm btn--show--f">Show more</button>
        <button v-else @click="showMore = showMore=='active'?'':'active'" :class="showMore" class="absolute grid justify-center items-center w-full text-gray-100 text-sm btn--show--f">close</button>
      </div>
      
    </div>
    <div class="px-5 py-2">
      <h2 class="text-lg ">About</h2>
      <ul class="ml-2 mt-1 text-sm text-gray-100">
        <li>About us</li>
        <li>News & Blog</li>
        <li>Location</li>
      </ul>
    </div>
    <div class="px-5 py-2">
      <h2 class="text-lg ">Company</h2>
      <ul class="ml-2 mt-1 text-sm text-gray-100">
        <li>Now We Work?</li>
        <li>Copital</li>
        <li>Security</li>
      </ul>
    </div>
  </div>
  
  <div class="grid grid-cols-3 w-44 m-auto my-2">
    <span class="grid justify-center items-center text-xl text-gray-200"><i class="fab fa-instagram"></i></span>
    <span class="grid justify-center items-center text-xl text-gray-200"><i class="fab fa-twitter"></i></span>
    <span class="grid justify-center items-center text-xl text-gray-200"><i class="fab fa-telegram-plane"></i></span>
  </div>
</div>
</template>

<script setup>
const { ref }=require("@vue/reactivity");

const showMore = ref('')
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.desc{
  height: 130px;
  overflow: hidden;
  position: relative;
  transition: .5s;
}
.desc.active{
  height: auto;
}
/* .desc::before{
  display: grid;
  position: absolute;
  top: 90px;
  text-align: center;
  align-content: center;
  content: 'Show more';
  width: 100%;
  font-size: 1.1rem;
  height: 40px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) , rgb(240, 240, 240) 50%);
} */
.btn--show--f{
  top: 95px;
  height: 40px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) , rgb(27, 29, 39) 50%);
}
.btn--show--f.active{
  /* display: none; */
  top: unset;
  bottom: -32px;
}
</style>
