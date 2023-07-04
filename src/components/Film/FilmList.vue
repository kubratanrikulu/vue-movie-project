<template>
  <div class="container mx-auto p-4">
    <input class="bg-transparent p-3 rounded-full border-2 border-gray-800 mb-3 text-white" v-model="searchTerm" type="text" placeholder="Search Movie..." />
    <ul class="grid grid-cols-1  md:grid-cols-4 gap-6 justify-center">
      <FilmCard
        v-for="film in filteredFilms"
        :key="film.id"
        :film="film"
        @show-alert="updateShowAlert(film.id, $event)"
      />
    </ul>
  </div>
</template>

<script>
import FilmCard from "./FilmCard.vue";
import { useFilmStore } from "@/stores/filmStore";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    FilmCard,
  },
  data() {
    return {
      searchTerm: "",
      showAlert: {},
    };
  },
  computed: {
    ...mapState(useFilmStore, ["getFilms"]),
    filteredFilms() {
      const films = useFilmStore().films;
      const term = this.searchTerm.toLowerCase();

      if (term === "") {
        return films;
      }

      return films.filter(
        (film) =>
          film.original_title.toLowerCase().includes(term) ||
          film.release_date.includes(term)
      );
    },
  },
  created() {
    this.fetchFilms();
  },
  methods: {
    ...mapActions(useFilmStore, ["fetchFilms"]),
    updateShowAlert(filmId, value) {
    this.$set(this.showAlert, filmId, value);
  },
  },
};
</script>
