<template>
  <div class="w-full mb-8">
    <nav class="w-10/12 m-auto grid grid-cols-2 px-2 py-4">
      <div class="">
        <span class="ml-8 caveat capitalize text-3xl">mohito</span>
        <!-- <img src="" alt=""> -->
      </div>
      <div class="grid justify-items-end">
        <ul class="flex items-center font-bold text-lg">
          <li class="mx-2 capitalize cursor-pointer text-yellow-500 li-active">home</li>
          <li class="mx-2 capitalize cursor-pointer li">about us</li>
          <li class="mx-2 capitalize cursor-pointer li">product</li>
          <li class="mx-2 capitalize cursor-pointer li">contact</li>
        </ul>
      </div>
    </nav>
    <section class="grid grid-cols-2 w-full">
      <div class="pl-32 pt-16">
        <small class="text-xs text-yellow-600 font-bold capitalize ">best choice</small>
        <h2 class="text-5xl -mt-2 capitalize font-bold">amazing</h2>
        <p class="text-base mb-8 mt-4 mx-4 capitalize font-bold rokkitt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <div class="bg-yellow-999 text-white grid grid-cols-2 w-96 rounded-xl m-4 p-4" id="box">
          <div class="grid content-center">
            <h2 class="text-2xl capitalize ">amazing</h2>
            <p class="text-xs m-2 capitalize font-bold rokkitt">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <span  class="text-base ml-4 capitalize cursor-pointer hover:text-gray-700">show more</span>
          </div>
          <div class="relative grid content-center">
            <div class="bg-gray-100 rounded-xl w-10/12 m-auto h-full z-0 grid content-center justify-items-center" id="image-box-header">
              <img src="../../assets/goldan.png" class="w-24 z-10 relative" alt="">
            </div>
          </div>

        </div>
      </div>
      <div class="grid grid-cols-2 justify-items-start place-items-end">
        <div class="relative">
          <span class="circle--product">
            <div class="box grid grid-cols-2 content-center">
              <div class="">
                <p class="text-lg heebo capitalize">amazing</p>
                <p class="text-xs ml-2 heebo capitalize">Lorem ipsum dolor sit</p>
                <span class="px-3 py-1 m-1 rounded-2xl bg-green-700"></span>
                <span class="px-3 py-1 m-1 rounded-2xl bg-red-500"></span>
                <span class="px-3 py-1 m-1 rounded-2xl bg-yellow-400"></span>
              </div>
              <div class="grid justify-items-end content-center">
                <p class="text-lg heebo">$300</p>
              </div>
            </div>
          </span>
          <img src="../../assets/mobl.png" class="h-80 ml-24 -mt-8" alt="">
        </div>
        <div class="relative">
          <div class="circle--product">
            <div class="box grid grid-cols-2 content-center">
              <div class="">
                <p class="text-lg heebo capitalize">amazing</p>
                <p class="text-xs ml-2 heebo capitalize">Lorem ipsum dolor sit</p>
                <span class="px-3 py-1 m-1 rounded-2xl bg-gray-600"></span>
                <span class="px-3 py-1 m-1 rounded-2xl bg-red-400"></span>
                <span class="px-3 py-1 m-1 rounded-2xl bg-blue-400"></span>
              </div>
              <div class="grid justify-items-end content-center">
                <p class="text-lg heebo">$120</p>
              </div>
            </div>
          </div>
          <img src="../../assets/light.png" class="mr-8 max-h-96 -mt-8" alt="">
        </div>
        
      </div>
    </section>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#image-box-header{
  background-color: #ffffff61;
}

.circle--product{
  padding: 10px 10px;
  position: absolute;
  right: 0;
  border-radius: 50%;
  background-color: rgb(192, 192, 192);
  cursor: pointer;
}
.box{
  display: none;
  padding: 15px;
  width: 200px;
  position: absolute;
  right: 10px;
  top: -110px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 5px 10px .5px rgb(216, 216, 216);
  cursor: pointer;
}
.circle--product:hover .box{
    display: grid;
    animation-name: feedin;
    animation-duration: .7s;
}
/* .circle--product::before{
  content: '';
  position: absolute;
  padding: 4px 12px;
  border-radius: 50%;
  background-color: rgb(124, 124, 124);
} */
.li-active::after{
  content: '';
  display: block;
  width: 8px;
  height: 8px;
  position: relative;
  bottom: 3px;
  left: 48%;
  background-color: rgb(235, 146, 14);
  border-radius: 50%;
}
.li:hover{
  color: rgb(235, 146, 14);
}
.li:hover:after{
  content: '';
  display: block;
  width: 8px;
  height: 8px;
  position: relative;
  bottom: 3px;
  left: 48%;
  background-color: rgb(224, 144, 22);
  border-radius: 50%;
}

</style>
