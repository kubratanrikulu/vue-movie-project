<template lang="">
  <div class="flex gap-x-5 items-center">
    <router-link v-for="item in menuItems" :key="item.path" :to="item.path">
      <span
        class="text-white font-medium text-lg p-3 flex items-center rounded-lg"
        >{{ item.label }}</span
      >
    </router-link>
  </div>
</template>
<script>
import { menuItems } from "./menuItems";

export default {
  name: "MenuLinks",
  data() {
    return {
      menuItems: menuItems,
    };
  },
};
</script>
<style lang=""></style>
