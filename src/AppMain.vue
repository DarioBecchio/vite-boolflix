<script>
import { state } from "./state";
export default {
  name: "AppMain",
  data() {
    return {
      showElement: true,
      state,
    };
  },
};
</script>
<template>
  <section class="showResults">
    <div class="results">
      <p>Film trovati: {{ state.movies.length }}</p>
      <p>Serie Tv trovate: {{ state.TvSeries.length }}</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col" v-for="TvSerie in state.TvSeries">
          <div class="card">
            <div class="poster">
              <img
                :src="`https://image.tmdb.org/t/p/w342${TvSerie.poster_path}`"
                alt=""
              />
            </div>
            <div class="description">
              <h3>{{ TvSerie.name }}</h3>
              <h5>{{ TvSerie.original_name }}</h5>
              <p>
                <span
                  :style="`--rating:${Math.ceil(TvSerie.vote_average / 2)}`"
                ></span
                >{{ TvSerie.vote_count }}
              </p>
              <p>
                <span v-bind:class="`fi fi-${TvSerie.original_language}`"></span
                >{{ TvSerie.origin_country[0] }}
              </p>
            </div>
          </div>
        </div>
        <div class="col" v-for="movie in state.movies">
          <div class="card">
            <div class="poster">
              <img
                :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"
                alt=""
              />
            </div>
            <div class="description" v-if="showElement === true">
              <h3>{{ movie.title }}</h3>
              <h5>{{ movie.original_title }}</h5>
              <p>
                <span
                  :style="`--rating:${Math.ceil(movie.vote_average / 2)}`"
                ></span
                >{{ movie.vote_count }}
              </p>
              <p>
                <span v-bind:class="`fi fi-${movie.original_language}`"></span
                >{{ movie.original_language }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.col {
  background-color: white;
}

.results {
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-evenly;
  color: white;
}
.card {
  position: relative;
}
.poster {
  display: block;
  z-index: 999;
}
.description {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  z-index: 1;
}
</style>
