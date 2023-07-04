<template>
  <div class="container mx-auto p-4 h-max">
    <h2>Favorite Movies</h2>
    <div v-if="favoriteFilms.length > 0">
      <ul class="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center">
        <FilmCard v-for="film in favoriteFilms" :key="film.id" :film="film" />
      </ul>
    </div>
    <div v-else>
      <p class="text-white text-md">You haven't added any favorite movies yet</p>
    </div>
  </div>
</template>

<script>
import FilmCard from "@/components/Film/FilmCard.vue";
import { useFilmStore } from "@/stores/filmStore";

export default {
  components: {
    FilmCard,
  },
  computed: {
    favoriteFilms() {
      return useFilmStore().getFavoriteFilms;
    },
  },
  methods: {
    addToFavorites(film) {
      const favoriteFilms = useFilmStore().getFavoriteFilms;
      const isFilmInFavorites = favoriteFilms.some(
        (favoriteFilm) => favoriteFilm.id === film.id
      );

      if (!isFilmInFavorites) {
        useFilmStore().addFavoriteFilm(film);
      }
    },
  },
};
</script>

<style>
</style>
