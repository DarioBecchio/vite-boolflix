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
  <header>
    <div class="container">
      <!-- Logo-->
      <div class="logo">
        <img
          src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
          alt="logo Netflix"
        />
      </div>
      <!-- filter -->
      <div class="searchbar">
        <input
          type="text"
          placeholder="Scrivi un titolo o una parola"
          v-model="state.searchKeyWord"
          @keyup.enter="state.getMovies(), state.getTvSeries()"
        />
      </div>
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

  & input {
    height: 40px;
    width: 250px;
  }
}
</style>
