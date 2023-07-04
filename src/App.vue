<template>
  <div id="app">
    <Navbar />
    <div class="container mx-auto">
      <router-view></router-view>
    </div>
    <footer-section/>
  </div>
</template>

<script>
import FooterSection from './components/Footer/FooterSection.vue';
import Navbar from "./components/Navbar/Navbar.vue";
export default {
  name: "App",
  components: { Navbar, FooterSection },
};
</script>

<style>
#app {
  background: #111;
}
</style>
