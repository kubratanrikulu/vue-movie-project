<template lang="">
  
  <div class="text-white container mx-auto justify-center text-lg mt-5 grid grid-cols-1  md:grid-cols-3 p-5 gap-4 space-y-3">
    <div class="md:border-r-2 border-gray-500 flex justify-center ">
      <img :src="Logo" alt="" width="100px">
    </div>
    <ul class="space-y-3 md:border-r-2 border-gray-500 flex flex-col justify-center">
      <li>About Us</li>
      <li>Movies</li>
      <li>Contact</li>
    </ul>

    <ul class="space-y-3 md:border-r-2 border-gray-500 flex  flex-col justify-center" >
      <li>
        <a href=""><i class="fa-brands fa-twitter"></i></a><span>Twitter</span>
      </li>
      <li>
        <a href=""><i class="fa-brands fa-medium"></i></a><span>Medium</span>
      </li>
      <li>
        <a href=""><i class="fa-brands fa-linkedin"></i></a
        ><span>Linkedln</span>
      </li>
      <li>
        <a href=""><i class="fa-brands fa-square-instagram"></i></a
        ><span>Instagram</span>
      </li>
    </ul>
  </div>
</template>
<script>
import Logo from '@/assets/logo.png'
export default {
  data() {
    return {
      Logo: Logo,
    };
  },
};
</script>
<style lang=""></style>
