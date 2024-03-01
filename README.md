# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

/\*getFilteredMovie() {
const urlMovie = `${this.base_api_URL}/movie?api_key=95637083a684a97bfbd4044fa4e72f18&query=${this.searchKeyWord}`;
console.log(urlMovie);
this.getMovies(urlMovie);
},

    getFilteredTvSeries() {
      const urlTvSeries = `${this.base_api_URL}/tv?api_key=95637083a684a97bfbd4044fa4e72f18&query=${this.searchKeyWord}`;
      console.log(urlTvSeries);
      this.getTvSeries(urlTvSeries);
    },
    /*getFilteredSelection() {
      const urlTvSeries = `${this.base_api_URL}/tv?api_key=95637083a684a97bfbd4044fa4e72f18&query=${this.searchKeyWord}`;
      const urlMovie = `${this.base_api_URL}/movie?api_key=95637083a684a97bfbd4044fa4e72f18&query=${this.searchKeyWord}`;
      console.log(urlMovie, urlTvSeries);
      this.getMovies(urlMovie, urlTvSeries);
    },

    */
