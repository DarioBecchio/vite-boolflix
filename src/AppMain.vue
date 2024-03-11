<script>
import { state } from "./state";
import resultCount from "./components/resultCount.vue";
import printMovieResult from "./components/printMovieResult.vue";
import printTvSeriesResult from "./components/printTvSeriesResult.vue";
export default {
  name: "AppMain",
  components: {
    resultCount,
    printMovieResult,
    printTvSeriesResult,
  },
  data() {
    return {
      state,
      movie: [],
      TvSerie: [],
    };
  },
};
</script>
<template>
  <section class="showResults">
    <resultCount></resultCount>
    <div class="container">
      <div class="row">
        <printTvSeriesResult
          v-for="TvSerie in state.TvSeries"
          :key="TvSerie.id"
          :TvSerie="TvSerie"
        ></printTvSeriesResult>
        <printMovieResult
          v-for="movie in state.movies"
          :key="movie.id"
          :movie="movie"
        ></printMovieResult>
      </div>
    </div>
  </section>
</template>
