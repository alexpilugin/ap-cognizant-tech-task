import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Nav Guard
router.beforeEach((to, from, next) => {
  /*
    In order to download data only one time - I place API requests here
  */
  console.log(
    "Before Each Route check if the lists of genred and movies are loaded already"
  );
  if (!store.state.genres.length || store.state.genres.length < 1) {
    store.dispatch("loadGenres");
  }
  if (!store.state.movies.length || store.state.movies.length < 1) {
    store.dispatch("loadMovies");
  }

  // Proceed to route
  next();
});

export default router;
