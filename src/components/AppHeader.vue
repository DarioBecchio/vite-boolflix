<script>
import axios from "axios";
export default {
  name: "AppHeader",
  name: "App",
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
  </header>
</template>
<style scoped>
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
