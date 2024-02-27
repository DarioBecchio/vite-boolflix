<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
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
    /*getFilteredSelection() {
      const urlTvSeries = `${this.base_api_URL}/tv?api_key=95637083a684a97bfbd4044fa4e72f18&query=${this.searchKeyWord}`;
      const urlMovie = `${this.base_api_URL}/movie?api_key=95637083a684a97bfbd4044fa4e72f18&query=${this.searchKeyWord}`;
      console.log(urlMovie, urlTvSeries);
      this.getMovies(urlMovie, urlTvSeries);
    },
    getFilteredTvSeries() {
      const urlTvSeries = `${this.base_api_URL}/tv?api_key=95637083a684a97bfbd4044fa4e72f18&query=${this.searchKeyWord}`;
      console.log(urlTvSeries);
      this.getMovies(urlTvSeries);
    },
    */
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
    },*/
  },

  computed: {
    getResults() {
      return this.movies.length;
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
    </div>
    <div class="results">
      <p>Sono stati trovati</p>
      {{ getResults }}
    </div>
    <div class="card" v-for="movie in movies">
      <img
        :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"
        alt=""
      />
      <h3>{{ movie.title }}</h3>
      <h5>{{ movie.original_title }}</h5>
      <p>
        <span :style="`--rating:${Math.ceil(movie.vote_average / 2)}`"></span
        >{{ Math.ceil(movie.vote_average / 2) }}
      </p>
      <!---->
      <p>
        <span v-bind:class="`fi fi-${movie.original_language}`"></span
        >{{ movie.original_language }}
      </p>
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

[style^="--rating"]::after {
  content: "★★★★★";
  font-size: 2em;
  white-space: nowrap;
  background: linear-gradient(
    90deg,
    #fb0 calc(var(--rating) * 20%),
    #ddd calc(var(--rating) * 20%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: #0000;
}
</style>
