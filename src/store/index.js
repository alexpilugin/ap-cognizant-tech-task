import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import { SET_ERROR, SET_LOADING, UPDATE_MOVIES } from "./mutation-types.js";

let devMode = process.env.NODE_ENV === "development";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalError: "",
    loading: false,
    movies: [],
  },
  mutations: {
    [SET_ERROR]: (state, error) => {
      state.globalError = error;
    },
    [SET_LOADING]: (state, isLoading) => {
      state.loading = isLoading;
    },
    [UPDATE_MOVIES]: (state, payload) => {
      state.movies = payload;
    },
  },
  actions: {
    logError: (context, err) => {
      if (devMode) console.log("Action: store/logError");
      context.commit(SET_ERROR, err);
    },
    stopLoading: (context) => {
      if (devMode) console.log("Action: store/stopLoading");
      context.commit(SET_LOADING, false);
    },
    startLoading: (context) => {
      if (devMode) console.log("Action: store/startLoading");
      context.commit(SET_LOADING, true);
    },
    loadMovies: (context) => {
      if (devMode) console.log("Action: store/loadMovies");
      context.commit(SET_LOADING, true);

      const API_KEY = process.env.VUE_APP_API_KEY; //from .env file

      console.log(API_KEY);

      axios
        .get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
        )
        .then(function (response) {
          context.commit(UPDATE_MOVIES, response.data.results); //mutation
          if (devMode) console.log(response.data);
          context.dispatch("stopLoading"); //action
        })
        .catch((err) => {
          console.error(err);
          context.commit(SET_ERROR, err.toString()); //mutation
          context.dispatch("stopLoading"); //action
        });
    },
  },
  modules: {},
});
