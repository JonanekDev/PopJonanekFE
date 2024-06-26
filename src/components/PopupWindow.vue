<template>
  <div>
    <div class="fixed inset-0 pozadipopup bg-opacity-50 z-49" @click="closeCallback()"></div>

    <div class="fixed inset-0 flex items-top mt-20 justify-center z-50 text-center"> <div class="bg-background text-text p-6 h-min rounded-lg shadow-lg max-w-2xl w-full relative">
        <button @click="closeCallback()" class="absolute top-0 right-0 text-2xl mr-2 p-2 text-primary hover:text-secondary duration-300">
          <FontAwesomeIcon :icon="faXmark"></FontAwesomeIcon>
        </button>
        <RouterView />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
</script>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    closeCallback: {
      type: Function,
      required: true,
    },
  },
});
</script>

<style scoped>
.pozadipopup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  backdrop-filter: blur(3px);
}
</style>
