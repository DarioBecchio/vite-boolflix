<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      base_api_URL:
        "https://api.themoviedb.org/3/search/movie?api_key=95637083a684a97bfbd4044fa4e72f18",
    };
  },
  mounted() {
    console.log(this.base_api_URL);
    axios.get("").then((response) => {
      console.log(response);
    });
  },
};
</script>

<template></template>

<style></style>
