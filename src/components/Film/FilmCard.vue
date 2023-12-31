<template>
  <div
    class="film-card text-white text-center rounded-lg p-5 flex flex-col items-center relative space-y-5 cursor-pointer"
  >
    <li @click="navigateToFilmDetail" class="flex flex-col">
      <p
        class="bg-red-700 p-3 rounded-full absolute -top-4 -right-3 w-10 h-10 flex justify-center items-center font-medium"
      >
        {{ film.vote_average }}
      </p>
      <img
        :src="'https://image.tmdb.org/t/p/w300' + film.poster_path"
        alt="film_image"
        class="h-48 object-contain"
      />
      <h2 class="font-bold">{{ film.original_title }}</h2>
      <p>Yayın Tarihi: {{ film.release_date }}</p>
    </li>
    <button
      v-if="!isFilmInFavorites"
      @click="addToFavorites"
      class="bg-transparent border-solid border-2 border-red-700 p-3 text-red-700 font-medium rounded-full"
    >
      Add Favorite
    </button>
    <button
      v-else
      @click="removeFromFavorites"
      class="bg-transparent border-solid border-2 border-red-700 p-3 text-red-700 font-medium rounded-full"
    >
      Remove from Favorites
    </button>

    <div
      v-if="showAlert"
      class="bg-white border-t border-b border-red-700 text-red-700 px-4 py-3 rounded-full"
      role="alert"
    >
      <p class="font-bold">
        Added to favorites <i class="fa-solid fa-star"></i>
      </p>
    </div>
  </div>
</template>

<script>
import { useFilmStore } from "@/stores/filmStore";

export default {
  props: {
    film: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showAlert: false,
    };
  },
  methods: {
    addToFavorites() {
      const favoriteFilms = useFilmStore().getFavoriteFilms;
      const isFilmInFavorites = favoriteFilms.some(
        (favoriteFilm) => favoriteFilm.id === this.film.id
      );

      if (!isFilmInFavorites) {
        useFilmStore().addFavoriteFilm(this.film);
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    },
    removeFromFavorites() {
      useFilmStore().removeFavoriteFilm(this.film.id);
    },
    navigateToFilmDetail() {
      this.$router.push(`/film/${this.film.id}`);
    },
  },
  computed: {
    isFilmInFavorites() {
      const favoriteFilms = useFilmStore().getFavoriteFilms;
      return favoriteFilms.some(
        (favoriteFilm) => favoriteFilm.id === this.film.id
      );
    },
  },
};
</script>

<style>
.film-card {
  background: #1c1c1c;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
}

button:hover {
  color: #b10b05;
  box-shadow: 0 0 10px #b10b05;
  text-shadow: 0 0 8px #b10b05;
}
</style>
