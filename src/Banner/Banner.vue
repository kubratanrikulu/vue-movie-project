<template lang="html">
  <div id="#banner">
    <img :src="Banner" alt=""  class="banner-image" />
  </div>
</template>
<script>
import Banner from "@/assets/banner.jpg";
export default {
  name: "HomeBanner",
  data() {
    return {
      Banner: Banner,
    };
  },
};
</script>
<style>
.banner-image {
  background-size: cover;
  object-fit: cover;
  width: 100%;
  height: 500px;
  -webkit-mask-image: linear-gradient(black, transparent);
  mask-image: linear-gradient(black, transparent);
}
</style>
