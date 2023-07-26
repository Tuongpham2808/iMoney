<template>
  <div class="mt-5">
    <div class="container px-8 mx-auto">
      <form @submit.prevent="onSubmit">
        <div class="flex flex-col justify-start gap-6">
          <div class="flex flex-col row">
            <label for="email">
              <span class="font-semibold">Email address</span>
            </label>
            <input
              type="text"
              id="email"
              class="px-4 py-3 mt-1 border border-gray-300 rounded-lg outline-none"
              placeholder="example@gmail.com"
              v-model="email"
            />
          </div>
          <div class="flex flex-col row">
            <label for="password">
              <span class="font-semibold">Password</span>
            </label>
            <input
              type="text"
              id="password"
              class="px-4 py-3 mt-1 border border-gray-300 rounded-lg outline-none"
              placeholder="Example123"
              v-model="password"
            />
          </div>
          <div class="row">
            <button
              type="submit"
              class="w-full px-4 py-3 font-bold text-center text-white rounded-lg bg-primary"
            >
              Sign In
            </button>
          </div>
        </div>
      </form>

      <div class="w-full mt-6 text-center">
        <span>I'm a new user.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Register', params: {} }"
            class="font-bold text-primary"
            >Sign up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    function onSubmit() {}
    return { onSubmit, email, password };
  },
};
</script>

<style></style>
