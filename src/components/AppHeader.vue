<script>
export default {
  name: "AppHeader",
};
</script>
<template>
  <header>
    <div class="container">
      <div class="logo">
        <img
          src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
          alt="logo Netflix"
        />
      </div>
      <div class="searchbar"></div>
    </div>
  </header>
</template>
<style scoped>
header {
  background-color: black;
  color: white;
  padding: 0.5rem 0;
}
.container {
  display: flex;
  justify-content: space-between;
}
</style>
