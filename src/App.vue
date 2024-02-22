<script>
import axios from "axios";
import { state } from "./state.js";
export default {
  data() {
    return {
      base_api_URL:
        "https://api.themoviedb.org/3/search/movie?api_key=95637083a684a97bfbd4044fa4e72f18",
      base_image_URL: "https://image.tmdb.org/t/p/w342",
      movies: [],
      searchKeyWord: "",
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
  computed: {
    getResults() {
      return this.movies.data.results.length;
    },
  },
  mounted() {
    console.log(state.api_url);
  },
};
</script>

<template>
  <header>
    <div class="container">
      <!-- Logo-->
      <div class="logo">
        <img
          src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
          alt="logo Netflix"
        />
      </div>
      <!-- filter -->
      <div class="filter">
        <input
          type="text"
          placeholder="Write a Movie Title Here"
          v-model="searchKeyWord"
        />
        <button @click.enter="getFilteredMovies">Search Movies</button>
      </div>
    </div>
    <div class="card" v-for="movie in movies">
      <img
        :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"
        alt=""
      />
      <h3>{{ movie.title }}</h3>
      <h5>{{ movie.original_title }}</h5>
      <p>{{ movie.original_language }}</p>
      <p>{{ movie.vote_average }}</p>
    </div>
  </header>
</template>

<style>
header {
  background-color: black;
  color: white;
  padding: 0.5rem 0;
}
.container {
  display: flex;
  justify-content: space-between;
}
</style>
