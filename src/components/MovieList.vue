<template>
  <div class="movie-list">
    <div v-if="!isLoaded" class="red">
      <b>Something is wrong. The list of movies wasn't loaded so far.</b>
      <p v-if="errorMsg">{{ errorMsg }}</p>
    </div>
    <div v-if="isLoaded" class="movie-container">
      <div
        v-for="(movie, index) in filtereList"
        :key="`movie-${index}`"
        class="movie-item"
      >
        <img :src="getPosterURL(movie.poster_path)" alt="Movie Poster" />
        <h2>{{ movie.title }}</h2>
        <p>
          {{ getGenreNames(movie.genre_ids) }}<br />
          Rating: {{ movie.vote_average }} <br />
          Popularity: {{ movie.popularity }}<br />
        </p>
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
      getGenreNames: "getGenresById",
    }),
  },
  methods: {
    getPosterURL(path) {
      return `https://image.tmdb.org/t/p/w300${path}`;
    },
  },
};
</script>

<style lang="scss">
.red {
  color: red;
}
.movie-list {
  align-content: center;
  margin-left: auto;
  margin-right: auto;

  .movie-container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;

    .movie-item {
      flex: 1 1 auto;
      max-width: 300px;
      padding: 10px;
    }
  }
}
</style>
