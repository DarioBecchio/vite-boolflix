<script>
import { state } from "../state";
export default {
  name: "filterResults",
  emits: ["filtered"],
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <div class="searchbar">
    <input
      type="text"
      placeholder="Scrivi un titolo o una parola"
      v-model="state.searchKeyWord"
      @keyup.enter="$emit('filtered', state.searchKeyWord)"
    />
    <!-- -->
  </div>
</template>
<style>
input {
  height: 40px;
  width: 250px;
}
</style>
