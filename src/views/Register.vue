<template>
  <div class="mt-5">
    <div class="container px-8 mx-auto">
      <!-- start form -->
      <form @submit.prevent="onSubmit">
        <div class="flex flex-col justify-start gap-6">
          <div class="flex flex-col row">
            <label for="fullName">
              <span class="font-semibold">Full name</span>
            </label>
            <input
              type="text"
              id="fullName"
              class="px-4 py-3 mt-1 border border-gray-300 rounded-lg outline-none"
              placeholder="iMoney..."
              v-model="fullName"
            />
          </div>
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
          <!-- button submit -->
          <div class="row">
            <button
              type="submit"
              class="w-full px-4 py-3 min-h-[52px] font-bold text-center text-white rounded-lg bg-primary flex justify-center items-center"
              :disabled="isPending"
              :class="{ 'bg-opacity-60': isPending }"
            >
              <p v-if="!isPending">Sign Up</p>
              <div
                class="w-7 h-7 border-[3px] border-t-transparent rounded-full animate-spin"
                v-if="isPending"
              ></div>
            </button>
          </div>
        </div>
      </form>

      <div v-if="error" class="text-left text-red mt-4">
        <span>{{ error }}</span>
      </div>
      <!-- start redirect -->
      <div class="w-full mt-6 text-center">
        <span>I'm already a remember.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Login', params: {} }"
            class="font-bold text-primary"
            >Sign in</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignUp } from "@/composables/useSignUp";
import { toast } from "vue3-toastify";

export default {
  setup() {
    const { error, isPending, signup } = useSignUp();
    const fullName = ref("");
    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      const user = await signup(email.value, password.value, fullName.value);
      if (user.user.email) {
        toast.success("create user successfully!");
      }
    }

    return { fullName, email, password, onSubmit, error, isPending };
  },
};
</script>

<style></style>
