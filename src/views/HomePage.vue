<template lang="">
  <div><Banner />
    <film-list />
  </div>
</template>
<script>
import Banner from "@/Banner/Banner.vue";
import FilmList from '@/components/Film/FilmList.vue';
export default {
  name: "HomePage",
  components: { Banner, FilmList },
};
</script>
<style lang=""></style>
