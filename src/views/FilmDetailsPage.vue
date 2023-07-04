<template>
  <div class="film-detail text-white">
    <div class="background-image" :style="backgroundImageStyle"></div>
    <div class="content  items-center grid grid-cols-1 md:grid-cols-3 justify-between">
      <img
        :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
        alt="movie_image"
        class="poster-image col-span-1"
      />

      <div class="font-medium md:text-lg space-y-3 col-span-2">
        <div class="flex items-center text-2xl">
          <h1 class="font-bold">
            {{ movie.title }}
          </h1>
          <p class="">( {{ movie.release_date }} )</p>
        </div>
        <span
          class="text-gray-400 italic "
          v-for="country in movie.production_countries"
          :key="country.id"
          >{{ country.name }}</span
        >
        <p class="md:space-x-2 space-x-1 text-gray-300 italic ">
          <span class="bg-red-700 md:p-2 p-1 rounded-xl" v-for="genre in movie.genres" :key="genre.id">{{
            genre.name
          }}</span>
        </p>
        <h1>Overview</h1>
        <p class="font-thin italic">{{ movie.overview }}</p>
        <p class="font-normal italic">
          Movie Vote Count:
          <span class="font-medium not-italic">{{ movie.vote_count }}</span>
        </p>
        <p class="font-normal italic">
          Movie Popularity:
          <span class="font-medium not-italic">{{ movie.popularity }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      movie: null,
    };
  },
  computed: {
    backgroundImageStyle() {
      if (this.movie && this.movie.backdrop_path) {
        return {
          backgroundImage: `url('https://image.tmdb.org/t/p/w300${this.movie.backdrop_path}')`,
        };
      } else {
        return {};
      }
    },
  },
  mounted() {
    this.fetchFilm();
  },
  methods: {
    async fetchFilm() {
      try {
        const movieId = this.$route.params.id;
        const apiKey = "c342d34464a7d85ba6d84aa59ee22a90";
        const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
        const { data } = await axios.get(apiUrl);
        this.movie = data;
        console.log("Output", this.movie);
      } catch (error) {
        console.error("API isteği başarısız:", error);
      }
    },
  },
};
</script>

<style scoped>
.film-detail {
  position: relative;
  
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(10px) grayscale(30%) opacity(0.5);
}

.content {
  position: relative;
  z-index: 1;
  padding: 20px;
}

.poster-image {
  display: block;
  max-width: 100%;
  height: 100%;
}
</style>
