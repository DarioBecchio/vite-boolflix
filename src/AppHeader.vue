<script>
import { state } from "./state";
export default {
  name: "AppHeader",
  data() {
    return {
      state,
    };
  },
};
</script>
<template>
  <div class="container">
    <!-- Logo-->
    <div class="logo">
      <img
        src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        alt="logo Netflix"
      />
    </div>
    <!-- filter -->

    <input
      type="text"
      placeholder="Scrivi un titolo o una parola"
      v-model="searchKeyWord"
      @keyup.enter="getMovies(), getTvSeries()"
    />
  </div>
</template>
<style></style>
