<script>
import axios from "axios";
import { state } from "./state.js";
export default {
  name: "App",
  data() {
    return {
      base_api_URL: "https://api.themoviedb.org/3/search",
      base_image_URL: "https://image.tmdb.org/t/p/w342",
      movies: [],
      TvSeries: [],
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

    getFilteredMovie() {
      const urlMovie = `${this.base_api_URL}/movie?api_key=95637083a684a97bfbd4044fa4e72f18&query=${this.searchKeyWord}`;
      console.log(urlMovie);
      this.getMovies(urlMovie);
    },

    /*getTvSeries(url) {
      axios
        .get(url)
        .then((response) => {
          console.log(response);
          console.log(response.data.results);
          this.TvSeries = response.data.results;
          console.log(this.TvSeries);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getFilteredTvSeries() {
      const urlTvSeries = `${this.base_api_URL}/tv?api_key=95637083a684a97bfbd4044fa4e72f18&query=${this.searchKeyWord}`;
      console.log(urlTvSeries);
      this.getTvSeries(urlTvSeries);
    },*/
  },

  computed: {
    getResults() {
      return this.movies.total_results;
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

      <input
        type="text"
        placeholder="Scrivi un titolo o una parola"
        v-model="searchKeyWord"
        @keyup.enter="getFilteredMovie"
      />
      <!--<button @click.enter="getFilteredMovies">Search Movies</button>-->
    </div>
    <div class="results">{{ getResults }}</div>
    <div class="card" v-for="movie in movies">
      <img
        :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"
        alt=""
      />
      <h3>{{ movie.title }}</h3>
      <h5>{{ movie.original_title }}</h5>
      <p>{{ Math.ceil(movie.vote_average / 2) }}</p>
      <p><span class="fi fi-{{ movie.original_language }} fis"></span></p>
    </div>
    <!-- <div class="card" v-for="serie in TvSeries">
      <img
        :src="`https://image.tmdb.org/t/p/w342${serie.poster_path}`"
        alt=""
      />
      <h3>{{ serie.title }}</h3>
      <h5>{{ serie.original_title }}</h5>
      <p>{{ Math.ceil(serie.vote_average / 2) }}</p>
      <p>{{ serie.original_language }}</p>
    </div> -->
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
