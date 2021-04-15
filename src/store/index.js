import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import {
  SET_ERROR,
  SET_LOADING,
  UPDATE_MOVIES,
  SET_MINIMUM_RATING,
} from "./mutation-types.js";

let devMode = process.env.NODE_ENV === "development";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalError: "",
    loading: false,
    movies: [],
    minimumRating: 3.0,
  },
  getters: {
    isMovieListLoaded: (state) => {
      if (state.movies && state.movies.length && state.movies.length > 0)
        return true;
      return false;
    },
    getFiltereList: (state) => {
      if (state.movies && state.movies.length && state.movies.length > 0) {
        const movies = state.movies;
        const minRating = state.minimumRating;
        let filtered = movies.filter(
          (movie) => movie.vote_average >= minRating
        );
        filtered.sort((a, b) => b.popularity - a.popularity); //desc sorting by popularity property
        return filtered;
      }
      return [];
    },
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
    [SET_MINIMUM_RATING]: (state, value) => {
      state.minimumRating = value;
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

      /*
        I have not placed 'https://api.themoviedb.org/3/movie' in .env as a BASE_URL
      */

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
    setMinRating: (context, value) => {
      if (devMode) console.log("Action: store/setMinRating", value);
      context.commit(SET_MINIMUM_RATING, value);
    },
  },
  modules: {},
});
