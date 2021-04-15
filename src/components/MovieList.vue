<template>
  <div class="movie-list">
    <div v-if="!isLoaded" class="red">
      <b>Something is wrong. The list of movies wasn't loaded so far.</b>
      <p v-if="errorMsg">{{ errorMsg }}</p>
    </div>
    <div v-if="isLoaded">
      <div v-for="(movie, index) in filtereList" :key="`movie-${index}`">
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.popularity }}</p>
        <img :src="getPosterURL(movie.poster_path)" alt="Movie Poster" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "MovieList",
  computed: {
    ...mapState({
      movies: (state) => state.movies,
      errorMsg: (state) => state.globalError,
    }),
    ...mapGetters({
      isLoaded: "isMovieListLoaded",
      filtereList: "getFiltereList",
    }),
  },
  methods: {
    getPosterURL(path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    },
  },
};
</script>

<style lang="scss">
.red {
  color: red;
}
</style>
