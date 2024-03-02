<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
//import axios from "axios";
import AppHeader from "./AppHeader.vue";
import AppMain from "./AppMain.vue";
import { state } from "./state";
export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    state;
    return {
      base_image_URL: "https://image.tmdb.org/t/p/w342",

      searchKeyWord: "",
    };
  },
  methods: {},

  computed: {
    getMoviesResults() {
      return this.movies.length;
    },
    getTvSeriesResults() {
      return this.TvSeries.length;
    },
  },
  mounted() {
    state.fetchData(state.api_url);
    console.log(state.api_url);
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
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
        @keyup.enter="getMovies(), getTvSeries()"
      />
    </div>
    <div class="results">
      <p>Film trovati: {{ this.movies.length }}</p>
      <p>Serie Tv trovate: {{ this.TvSeries.length }}</p>
    </div>
    <div class="card" v-for="TvSerie in TvSeries">
      <img
        :src="`https://image.tmdb.org/t/p/w342${TvSerie.poster_path}`"
        alt=""
      />
      <h3>{{ TvSerie.title }}</h3>
      <h5>{{ TvSerie.original_title }}</h5>
      <p>
        <span :style="`--rating:${Math.ceil(TvSerie.vote_average / 2)}`"></span
        >{{ TvSerie.vote_count }}
      </p>
      <!---->
      <p>
        <span v-bind:class="`fi fi-${TvSerie.original_language}`"></span
        >{{ TvSerie.original_language }}
      </p>
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
        >{{ movie.vote_count }}
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
