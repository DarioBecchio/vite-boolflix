<script>
import { state } from "../state";
export default {
  name: "resultCount",
  data() {
    return {
      state,
    };
  },
  computed: {
    countMovieResults() {
      return state.movies.length
        ? "Totale Film:" + state.movies.length
        : "no results yet";
    },
    countTvSerieResults() {
      return state.TvSeries.length
        ? "Totale serieTv:" + state.TvSeries.length
        : "no results yet"; // 20
    },
  },
};
</script>
<template>
  <div class="container results">
    <p>{{ countMovieResults }}</p>
    <p>{{ countTvSerieResults }}</p>
  </div>
</template>
<style scoped>
.results {
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
}
.results > p {
  font-weight: 600;
  font-size: xx-large;
}
</style>
