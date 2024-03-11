<script>
export default {
  name: "printTvSeriesResult",
  props: {
    TvSerie: Array,
  },
};
</script>
<template>
  <div class="col">
    <div class="card">
      <img
        :src="`https://image.tmdb.org/t/p/w342${TvSerie.poster_path}`"
        alt=""
      />
      <div class="description">
        <h3>{{ TvSerie.name }}</h3>
        <h5>{{ TvSerie.original_name }}</h5>
        <p class="overview">{{ TvSerie.overview }}</p>
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

.overview {
  overflow: hidden;
  white-space: wrap;
}
</style>
