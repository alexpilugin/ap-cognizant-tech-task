<template>
  <div class="loading-screen modal is-active" v-if="loading">
    <div class="modal-background"></div>
    <div>Loading... Please stand by</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "loading-screen",
  computed: {
    ...mapState({
      loading: (state) => state.loading,
    }),
  },
  methods: {
    ...mapActions({
      startLoading: "startLoading",
      stopLoading: "stopLoading",
    }),
  },
};
</script>

<style>
.modal {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: none;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  z-index: 20;
}
.modal.is-active {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.modal-background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(10, 10, 10, 0.75);
}

.modal-content,
.modal-card {
  margin: 0 20px;
  max-height: calc(100vh - 160px);
  overflow: auto;
  position: relative;
  width: 100%;
}

.box {
  background-color: white;
  border-radius: 5px;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  display: block;
  padding: 1.25rem;
}

.box:not(:last-child) {
  margin-bottom: 1.5rem;
}
</style>
