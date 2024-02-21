<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {
  name: "App",
  data() {
    return {
      base_api_URL:
        "https://api.themoviedb.org/3/search/movie?api_key=95637083a684a97bfbd4044fa4e72f18",
      base_image_URL: "https://image.tmdb.org/t/p/w342",
      movies: [],
      searchKeyWord: "",
      images: [],
    };
  },
  methods: {
    getMovies(url) {
      axios
        .get(url)
        .then((response) => {
          console.log(response);
          console.log(response.data.results);
          this.movies = response.data.results;
          console.log(this.movies);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getFilteredMovies() {
      const url = `${this.base_api_URL}&query=${this.searchKeyWord}`;
      console.log(url);
      this.getMovies(url);
    },
  },
  components: { AppHeader, AppMain },
  computed: {
    getResults() {
      return this.movies.data.results.length;
    },
  },
  created() {},
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <div class="filter">
    <input
      type="text"
      placeholder="Write a Movie Title Here"
      v-model="searchKeyWord"
    />
    <button @click.enter="getFilteredMovies">Search Movies</button>
  </div>

  <div class="card" v-for="movie in movies">
    <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="" />
    <h3>{{ movie.title }}</h3>
    <h5>{{ movie.original_title }}</h5>
    <p>{{ movie.original_language }}</p>
    <p>{{ movie.vote_average }}</p>
  </div>
</template>

<style></style>
