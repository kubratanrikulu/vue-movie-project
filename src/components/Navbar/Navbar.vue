<template lang="html">
  <div
    id="#navbar"
    class="navbar md:flex md:justify-around p-3 md:p-0"
  >
    <div class="flex justify-center">
      <img :src="Logo" alt="" width="100px" @click="redirectToHome" />
    </div>

    <menu-links />
  </div>
</template>
<script>
import MenuLinks from "./MenuLinks.vue";
import Logo from "@/assets/logo.png";
export default {
  name: "NavbarComponent",
  components: { MenuLinks },
  data() {
    return {
      Logo: Logo,
    };
  },
  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="css">
.navbar {
  background: #1c1c1c;
}
</style>
