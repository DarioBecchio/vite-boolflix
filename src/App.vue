<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { state } from "./state.js";
export default {
  components: { AppHeader, AppMain },
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
  <AppHeader></AppHeader>
  <AppMain></AppMain>

  <div class="card" v-for="movie in movies">
    <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="" />
    <h3>{{ movie.title }}</h3>
    <h5>{{ movie.original_title }}</h5>
    <p>{{ movie.original_language }}</p>
    <p>{{ movie.vote_average }}</p>
  </div>
</template>

<style></style>
