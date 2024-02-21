<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      base_api_URL:
        "https://api.themoviedb.org/3/search/movie?api_key=95637083a684a97bfbd4044fa4e72f18",
      movies: [],
      loading: true,
      error: false,
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
          this.loading = false;
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
  created() {
    setTimeout(() => {
      this.getMovies(this.base_api_URL);
    }, 3000);
  },
};
</script>

<template>
  <div class="filter">
    <input
      type="text"
      placeholder="Write a Movie Title Here"
      v-model="searchKeyWord"
    />
    <button @click="getFilteredMovies">Search Movies</button>
  </div>
  <div class="row" v-for="movie in movies.results">
    <div class="card">
      <img src="" alt="" />
      <h3>{{ movie.title }}</h3>
      <h5>{{ movie.original_title }}</h5>
      <p>{{ movie.original_language }}</p>
      <p>{{ movie.vote_average }}</p>
    </div>
  </div>
</template>

<style></style>
