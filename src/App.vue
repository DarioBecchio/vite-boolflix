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
</template>

<style></style>
