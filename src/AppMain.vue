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
            <img
              :src="`https://image.tmdb.org/t/p/w342${TvSerie.poster_path}`"
              alt=""
            />
            <div class="description">
              <h3>{{ TvSerie.name }}</h3>
              <h5>{{ TvSerie.original_name }}</h5>
              <p>{{ TvSerie.overview }}</p>
              <div>
                <span
                  :style="`--rating:${Math.ceil(TvSerie.vote_average / 2)}`"
                ></span
                >{{ TvSerie.vote_count }}
              </div>
              <div>
                <span v-bind:class="`fi fi-${TvSerie.original_language}`"></span
                >{{ TvSerie.origin_country[0] }}
              </div>
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
              <p>{{ movie.overview }}</p>
              <div>
                <span
                  :style="`--rating:${Math.ceil(movie.vote_average / 2)}`"
                ></span
                >{{ movie.vote_count }}
              </div>
              <div>
                <span v-bind:class="`fi fi-${movie.original_language}`"></span
                >{{ movie.original_language }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.card {
  position: relative;
  overflow: hidden;
}
.card img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.description {
  background-color: white;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: -100%;
  display: flex;
  flex-direction: column;
}

.card:hover .description {
  right: 0;
}
</style>
