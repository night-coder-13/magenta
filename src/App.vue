<template>
  <router-view></router-view>
</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');
@font-face {
  font-family: open-sans;
  src: url('./assets/font/OpenSans-VariableFont_wdth,wght.ttf') ;
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: Tangerine;
  src: url('https://fonts.googleapis.com/css?family=Tangerine') ;
  font-weight: normal;
  font-style: normal;
}
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Rokkitt:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Heebo&family=Roboto+Slab&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'Fira Sans', sans-serif;
  /* font-family: roboto !important; */
  background-color: rgb(240, 240, 240);
}
.caveat{
  font-family: Caveat  !important;
}
.rokkitt{
  font-family: Rokkitt  !important;
}
.roboto{
  font-family: Roboto  !important;
}
.heebo{
  font-family: Heebo  !important;
}
.bg-purple{
  background-color: #cdd1f1bc;
}
.text-purple{
  color: #5667e7;
}
.text-purple-50{
  color: #5a68d7;
}
@keyframes feedin{
  0%{
    opacity: 0;
    transform: translateX(7px) translateY(7px);
  }
  100%{
    opacity: 1;
    transform: translateX(0px) translateY(0);
  }
}
</style>
