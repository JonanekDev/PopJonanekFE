<template>
    <h2 class="text-primary text-2xl font-bold mb-4">Registrace</h2>
    Vytvoř si svůj PopJonanek účet!
    <div class="w-1/2 mx-auto mt-2">
      <input type="text" placeholder="Vaše přezdívka" name="username" autocomplete="nickname" class="block w-full mt-3 rounded-md border-0 py-1.5 text-primary bg-secondary shadow-sm ring-0 placeholder:text-text px-3 focus:ring-2 sm:text-sm sm:leading-6">
      <input type="email" placeholder="Váš email" name="email" autocomplete="email" class="block w-full mt-4 rounded-md border-0 py-1.5 text-primary bg-secondary shadow-sm ring-0 placeholder:text-text px-3 focus:ring-2 sm:text-sm sm:leading-6">
      <input type="password" placeholder="Váše heslo" name="password" autocomplete="new-password" class="block w-full mt-4 rounded-md border-0 py-1.5 text-primary bg-secondary shadow-sm ring-0 placeholder:text-text px-3 focus:ring-2 sm:text-sm sm:leading-6">
      <input type="password" placeholder="Váše heslo znovu" name="repassword" autocomplete="email" class="block w-full mt-4 rounded-md border-0 py-1.5 text-primary bg-secondary shadow-sm ring-0 placeholder:text-text px-3 focus:ring-2 sm:text-sm sm:leading-6">
      <button class="bg-secondary hover:bg-primary text-primary hover:text-secondary px-4 py-2 rounded-lg mr-10 duration-500 mt-4"
       >Registrovat</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  //props: 
  })
</script>