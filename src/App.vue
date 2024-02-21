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
        })
        .catch((error) => {
          console.error(error);
        });
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
  <div class="row" v-if="loading"></div>
  <div v-else>Loading...</div>
  <div v-if="movies.results">{{ getResults() }}</div>
  <div>{{ movies.results ? getResults : "No results" }}</div>
</template>

<style></style>
