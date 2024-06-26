<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import popup from './components/PopupWindow.vue';
import { ref } from 'vue';

let showPopup = ref(false);

let clicks = ref(0);

let keyboardclick = ref(false);

let currentImage = ref('/Jonanek2.webp');

function Click() {
  currentImage.value = '/Jonanek1.webp';
  var audio = new Audio('/nevim.wav');
  audio.play();
  clicks.value++;
}
function defaultImage() {
  currentImage.value = '/Jonanek2.webp';
}
function openClose() {
  showPopup.value = !showPopup.value;
}

window.addEventListener('keydown', () => {
  if (!keyboardclick.value) {
    Click();
    keyboardclick.value = true;
  }
})
window.addEventListener('keyup', () => {
  defaultImage();
  keyboardclick.value = false;
})


</script>

<template>



  <popup v-if="showPopup" :closeCallback="openClose" />


  <!--<nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />


  -->

  <img id="lol" :src="currentImage" @mousedown="Click" @mouseup="defaultImage" class="object-fill w-full h-screen">


  <div class="w-full py-4 flex flex-row items-center font-bold text-text bg-background fixed bottom-0 px-10">
    <div class="w-1/3 text-3xl">69000</div>
    <div class="w-1/3 text-center text-6xl text-primary">{{ clicks }}</div>
    <div class="w-1/3 text-right text-lg align-text-middle">
      <RouterLink to="/register"
        class="bg-secondary hover:bg-primary text-primary hover:text-secondary px-4 py-2 rounded-lg mr-10 duration-500 "
        @click="showPopup = true">Registrovat</RouterLink>
      <button
        class="bg-secondary hover:bg-primary text-primary hover:text-secondary  px-4 py-2 rounded-lg duration-500">Přihlásit</button>
    </div>
  </div>
</template>
