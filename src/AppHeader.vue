<script>
import filterResults from "./components/filterResults.vue";
import logo from "./components/logo.vue";
import { state } from "./state";
export default {
  name: "AppHeader",
  components: {
    filterResults,
    logo,
  },
  data() {
    return {
      state,
    };
  },
  methods: {
    filteredResults() {
      state.getMovies(), state.getTvSeries();
    },
  },
};
</script>

<template>
  <header>
    <div class="container">
      <!-- Logo-->
      <logo></logo>
      <!-- filter -->
      <filterResults @filtered="filteredResults"></filterResults>
    </div>
  </header>
</template>
<style scoped>
header {
  background-color: black;
  color: white;
  padding: 0.5rem 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
