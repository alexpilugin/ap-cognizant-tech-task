<template>
  <div class="home">
    <LoadingScreen />
    <MovieList />
  </div>
</template>

<script>
// @ is an alias to /src
import LoadingScreen from "@/components/LoadingScreen.vue";
import MovieList from "@/components/MovieList.vue";

export default {
  name: "Home",
  components: {
    LoadingScreen,
    MovieList,
  },
};
</script>
