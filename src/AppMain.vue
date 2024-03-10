<script>
import { state } from "./state";
import resultCount from "./components/resultCount.vue";
export default {
  name: "AppMain",
  components: {
    resultCount,
  },
  data() {
    return {
      state,
    };
  },
};
</script>
<template>
  <section class="showResults">
    <resultCount></resultCount>
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
            <div class="description">
              <h3>{{ movie.title }}</h3>
              <h5>{{ movie.original_title }}</h5>
              <div>
                <span
                  :style="`--rating:${Math.ceil(movie.vote_average / 2)}`"
                ></span
                >{{ movie.vote_count }}
              </div>
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

.card {
  position: relative;
  min-width: 100%;
  min-height: 300px;
}
.poster {
  display: block;
  position: absolute;
  top: 0;
  z-index: 999;

  &:hover {
    display: none;
  }
}
.description {
  position: absolute;
  top: 0;
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: block;
}

.show {
  display: block;
}
.hide {
  display: none;
}
</style>
