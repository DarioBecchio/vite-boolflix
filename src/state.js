import { reactive } from "vue";
import axios from "axios";
export const state = reactive({
  /*Reactive object - global state*/
  api_url: "https://api.themoviedb.org/3/",
  movies: [],
  TvSeries: [],
  fetchData(url) {
    axios
      .get(url)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  getMovies() {
    const url = `${state.api_url}search/movie?api_key=95637083a684a97bfbd4044fa4e72f18&query=${this.searchKeyWord}`;
    console.log(url);
    //state.fetchData(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        console.log(response.data.results);
        this.movies = response.data.results;
        console.log(this.movies);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  getTvSeries() {
    const url = `${state.api_url}search/tv?api_key=95637083a684a97bfbd4044fa4e72f18&query=${this.searchKeyWord}`;
    console.log(url);
    //state.fetchData(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        console.log(response.data.results);
        this.TvSeries = response.data.results;
      })

      .catch((error) => {
        console.error(error);
      });
  },
});
