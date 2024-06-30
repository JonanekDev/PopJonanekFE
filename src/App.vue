<script setup lang="ts">
import { routerKey, RouterLink } from 'vue-router';
import Vue from 'vue';
import popup from './components/PopupWindow.vue';
import { ref } from 'vue';
import axiosBase from './axios';
import type { User } from './types/user';
import router from '@/router';

let showPopup = ref(false);
let loggedIn = ref(false);
let clicks = ref(0);
let globalClicks = ref(0);
let lastUpdatedClicks = ref(0);
let user: User = ref(null);

if (window.location.pathname.startsWith('/popup')) {
  showPopup.value = true;
}

axiosBase.get('/clicks/total').then((res) => {
  globalClicks.value = res.data.data;
});

if (localStorage.getItem('token')) {
  axiosBase
    .get('/user')
    .then((res) => {
      if (res.data.status == 'ok') {
        loggedIn.value = true;
        user.value = res.data.data;
        clicks.value = user.value.clicks;
      } else {
        localStorage.removeItem('token');
      }
      setInterval(() => {
        if (clicks.value != lastUpdatedClicks.value) {
          axiosBase
            .post('/user/clicks', { clicks: clicks.value })
            .then((res) => {
              if (res.data.status == 'error') {
              }
              lastUpdatedClicks.value = clicks.value;
            });
        }
      }, 20000);
    })
    .catch((e) => {
      console.log(e);
      localStorage.removeItem('token');
    });
} else {
  const clicksLocal = localStorage.getItem('clicks');
  if (clicksLocal) {
    let clicksLotalNumber = parseInt(clicksLocal);
    if (isNaN(clicksLotalNumber)) {
      clicksLotalNumber = 0;
    }
    clicks.value = clicksLotalNumber;
  } else {
    localStorage.setItem('clicks', clicks.value.toString());
  }
}

let keyboardclick = ref(false);

let currentImage = ref('/Jonanek2.webp');

function Click() {
  currentImage.value = '/Jonanek1.webp';
  var audio = new Audio('/nevim.wav');
  audio.play();
  clicks.value++;
  if (!loggedIn.value) {
    localStorage.setItem('clicks', clicks.value.toString());
  } else {
    globalClicks.value++;
  }
}
function defaultImage() {
  currentImage.value = '/Jonanek2.webp';
}
function openClose() {
  showPopup.value = !showPopup.value;
  router.push('/');
}

window.addEventListener('keydown', () => {
  if (!keyboardclick.value && !showPopup.value) {
    Click();
    keyboardclick.value = true;
  }
});
window.addEventListener('keyup', () => {
  defaultImage();
  keyboardclick.value = false;
});
</script>

<template>

  <popup v-if="showPopup" :closeCallback="openClose" />

  <img id="lol" :src="currentImage" @mousedown="Click" @touchstart="Click" @mouseup="defaultImage"
    @touchend="defaultImage" class="object-fill w-full h-screen" />

  <div class="w-full py-4 flex flex-row items-center font-bold text-text bg-background fixed bottom-0 px-10">
    <div class="w-1/3 text-3xl">{{ globalClicks }}</div>
    <div class="w-1/3 text-center text-6xl text-primary">{{ clicks }}</div>
    <div class="w-1/3 text-right text-lg align-text-middle">
      <RouterLink v-if="!loggedIn" to="/popup/register"
        class="bg-secondary hover:bg-primary text-primary hover:text-secondary px-4 py-2 rounded-lg mr-10 duration-500"
        @click="showPopup = true">Registrovat</RouterLink>
      <RouterLink v-if="!loggedIn" to="/popup/login"
        class="bg-secondary hover:bg-primary text-primary hover:text-secondary px-4 py-2 rounded-lg duration-500"
        @click="showPopup = true">
        Přihlásit
      </RouterLink>
      <button v-if="loggedIn"
        class="bg-secondary hover:bg-primary text-primary hover:text-secondary px-4 py-2 rounded-lg duration-500"
        @click="showPopup = true">
        {{ user?.username }}
      </button>
    </div>
  </div>
</template>
