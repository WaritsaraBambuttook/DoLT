<template>
  <div>
    <b-row class="text-center">
      <b-col>
        <b-card
          overlay
          img-src="https://picsum.photos/900/250/?image=3"
          img-alt="Card Image"
          text-variant="white"
          title="Image Overlay"
          sub-title="Subtitle"
        >
          <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <br />
    <br />
    <b-row class="text-center">
      <b-col cols="*" sm="*" class="bc">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="primary">{{name}}</b-button>
        </b-card>
      </b-col>
      <b-col cols="*" sm="*" class="bc">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
          <b-button href="#" variant="primary">{{mes}}</b-button>
        </b-card>
      </b-col>
      <b-col cols="*" sm="*" class="bc">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
          <b-button href="#" variant="primary">{{mes}}</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mes: "edit",
      name: "four"
    };
  }
};
</script>
<style>
.bc {
  margin: auto;
}
</style>
