<template>
  <div>
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>{{$store.getters.CarStyleOne}}</b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>
<script>
import { store } from "../store/store";
export default {
  store,
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
</style>