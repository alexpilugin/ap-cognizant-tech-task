<template>
  <div class="navbar">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <RangeSlider />
  </div>
</template>

<script>
import RangeSlider from "@/components/RangeSlider.vue";
export default {
  name: "Navbar",
  components: {
    RangeSlider,
  },
};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: flex-start;
}
</style>
