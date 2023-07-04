import { defineStore } from "pinia";
import axios from "axios";

export const useFilmStore = defineStore("film", {
  state: () => ({
    films: [],
    favoriteFilms: JSON.parse(localStorage.getItem("favoriteFilms")) || [],
    searchTerm: '',
  }),
  getters: {
    getFilms(state) {
      return state.films;
    },
    getFavoriteFilms(state) {
      return state.favoriteFilms;
    },
    filteredFilms(state) {
      const term = state.searchTerm.toLowerCase();

      if (term === '') {
        return state.films;
      }

      return state.films.filter(
        (film) =>
          film.original_title.toLowerCase().includes(term) ||
          film.release_date.includes(term)
      );
    },
  },
  actions: {
    async fetchFilms() {
      try {
        const apiKey = "c342d34464a7d85ba6d84aa59ee22a90";
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
        const { data } = await axios.get(apiUrl);
        this.films = data.results;
        console.log("Output", this.films);
      } catch (error) {
        console.error("API isteği başarısız:", error);
      }
    },
    addFavoriteFilm(film) {
      this.favoriteFilms.push(film);
      localStorage.setItem("favoriteFilms", JSON.stringify(this.favoriteFilms));
    },
    removeFavoriteFilm(filmId) {
      const favoriteFilms = useFilmStore().getFavoriteFilms;
      const index = favoriteFilms.findIndex((film) => film.id === filmId);
      if (index !== -1) {
        favoriteFilms.splice(index, 1);
        localStorage.setItem("favoriteFilms", JSON.stringify(favoriteFilms));
      }
    },
  },
});
