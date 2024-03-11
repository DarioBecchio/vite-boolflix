<script>
export default {
  name: "printMovieResult",
  props: {
    movie: Object,
  },
};
</script>
<template>
  <div class="col">
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
        <p class="overview">{{ movie.overview }}</p>
        <div>
          <span :style="`--rating:${Math.ceil(movie.vote_average / 2)}`">
          </span>
        </div>
        <div>
          <span v-bind:class="`fi fi-${movie.original_language}`"></span
          >{{ movie.original_language }}
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
.overview {
  overflow: hidden;
  white-space: wrap;
}
.card:hover .description {
  right: 0;
}
</style>
