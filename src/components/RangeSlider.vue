<template>
  <div class="range-slider">
    <span>Rating:</span>
    <input
      type="range"
      min="0"
      max="10"
      v-model="sliderVal"
      @change="onChange"
      step="0.5"
      class="slider"
    />
    <span>{{ sliderVal }}</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "RangeSlider",
  data() {
    return {
      sliderVal: 3,
    };
  },
  methods: {
    ...mapActions({
      setMinRating: "setMinRating",
    }),
    onChange() {
      this.$emit("change", this.sliderVal);
      this.setMinRating(this.sliderVal);
    },
  },
};
</script>

<style lang="scss">
.range-slider {
  display: flex;
  width: 320px;
  padding: 0px 10px;

  .slider {
    float: left;
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .slider:hover {
    opacity: 1;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }
}
</style>
