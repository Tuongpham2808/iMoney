<template>
  <div class="mt-5">
    <div class="container px-8 mx-auto">
      <form @submit="onSubmit">
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
            />
          </div>
          <div class="row">
            <button
              type="submit"
              class="w-full px-4 py-3 font-bold text-center text-white rounded-lg bg-primary"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>

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
export default {
  setup() {
    function onSubmit() {}
    return { onSubmit };
  },
};
</script>
  
  <style>
</style>