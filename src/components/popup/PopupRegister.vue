<template>
  <h2 class="text-primary text-2xl font-bold mb-4">Registrace</h2>
  Vytvoř si svůj PopJonanek účet!
  <div class="w-1/2 mx-auto mt-2">
    <input
      type="text"
      placeholder="Vaše přezdívka"
      name="username"
      autocomplete="nickname"
      required="true"
      class="block w-full mt-3 rounded-md border-0 py-1.5 text-primary bg-secondary shadow-sm ring-0 placeholder:text-text px-3 focus:ring-2 sm:text-sm sm:leading-6"
    />
    <input
      type="email"
      placeholder="Váš email"
      name="email"
      autocomplete="email"
      required="true"
      class="block w-full mt-4 rounded-md border-0 py-1.5 text-primary bg-secondary shadow-sm ring-0 placeholder:text-text px-3 focus:ring-2 sm:text-sm sm:leading-6"
    />
    <input
      type="password"
      placeholder="Váše heslo"
      name="password"
      autocomplete="new-password"
      required="true"
      class="block w-full mt-4 rounded-md border-0 py-1.5 text-primary bg-secondary shadow-sm ring-0 placeholder:text-text px-3 focus:ring-2 sm:text-sm sm:leading-6"
    />
    <input
      type="password"
      placeholder="Váše heslo znovu"
      name="repassword"
      autocomplete="email"
      required="true"
      class="block w-full mt-4 rounded-md border-0 py-1.5 text-primary bg-secondary shadow-sm ring-0 placeholder:text-text px-3 focus:ring-2 sm:text-sm sm:leading-6"
    />
    <button
      class="bg-secondary hover:bg-primary text-primary hover:text-secondary px-4 py-2 rounded-lg mr-10 duration-500 mt-4"
      @click="register()"
    >
      Registrovat
    </button>
  </div>
</template>

<script lang="ts">
import axiosBase from '@/axios';
import router from '@/router';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    closeCallback: {
      type: Function,
      required: true,
    },
  },
  mounted() {
    if (localStorage.getItem('token')) {
      this.closeCallback();
      router.push('/');
    }
  },
  methods: {
    register() {
      axiosBase
        .post('/auth/register', {
          username: (
            document.getElementsByName('username')[0] as HTMLInputElement
          ).value,
          email: (document.getElementsByName('email')[0] as HTMLInputElement)
            .value,
          password: (
            document.getElementsByName('password')[0] as HTMLInputElement
          ).value,
        })
        .then((response) => {
          localStorage.setItem('token', response.data.data.token);
          console.log(response.data);
          router.push('/');
        });
    },
  },
});
</script>
