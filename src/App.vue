<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { PUBLIC_LAYOUT } from "@/constants";
export default {
  setup() {
    const route = useRouter();

    return {
      layout: computed(
        () =>
          route.currentRoute.value.meta.layout + "-layout" ||
          PUBLIC_LAYOUT + "-layout"
      ),
    };
  },
};
</script>

<style></style>
