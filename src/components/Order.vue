<template>
  <div>
    <b-row>
      <b-col>
        <h4>ลักษณะของรถ</h4>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="col-12 col-sm-4">
        <b-button class="carstyle" variant="success" @click="carstyleOne" to="/Bumpertype">
          <b-col>
            <h5>ประเภทที่ 1</h5>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4">
        <b-button class="carstyle" variant="success" @click="carstyleTwo" to="/Bumpertype">
          <b-col>
            <h5>ประเภทที่ 2</h5>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4">
        <b-button class="carstyle" variant="success" @click="carstyleThree" to="/Bumpertype">
          <b-col>
            <h5>ประเภทที่ 3</h5>
            <b-img
              class="img"
              thumbnail
              fluid
              :src="require('../assets/bfgjlruyz127.jpg')"
              alt="Image 1"
            ></b-img>
          </b-col>
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { store } from "../store/store";
export default {
  store,
  data() {
    return {
      text: ""
    };
  },
  methods: {
    carstyleOne: function() {
      this.text = "carstyleOne";
      console.log(this.text);
      this.$store.commit("setCarStyleOne", this.text);
    },
    carstyleTwo: function() {
      this.text = "carstyleTwo";
      console.log(this.text);
      this.$store.commit("setCarStyleOne", this.text);
    },
    carstyleThree: function() {
      this.text = "carstylethree";
      console.log(this.text);
      this.$store.commit("setCarStyleOne", this.text);
    }
  }
};
</script>
<style>
.img-thumbnail {
  width: 60%;
}
.carstyle {
  padding-left: unset;
  padding-right: unset;
  height: 100%;
  width: 70%;
}
.img {
  padding-left: unset;
  padding-right: unset;
  width: 150px;
  height: 150px;
}
</style>