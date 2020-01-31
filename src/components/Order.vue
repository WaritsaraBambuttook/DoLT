<template>
  <div>
    <!-- <b-row>
      <b-col>
        <h3>ลักษณะของรถ</h3>
      </b-col>
    </b-row>-->
    <br />
    <b-row>
      <b-col class="col-12 col-sm-4">
        <b-button
          class="carstyle"
          ref="myid"
          id="one"
          :variant="buttonColor"
          @click="carstyle('carstyleOne')"
        >
          <b-col>
            <h5>ประเภทที่ 1</h5>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button class="carstyle" id="two" :variant="buttonColor" @click="carstyle('carstyleTwo')">
          <b-col>
            <h5>ประเภทที่ 2</h5>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          id="three"
          :variant="buttonColor"
          @click="carstyle('carstyleThree')"
        >
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
      buttonColor: "outline-success"
    };
  },
  methods: {
    carstyle: function(type) {
      // let color = this.$refs["myid"].id;

      console.log("commit car style  " + type);
      this.$store.commit("setCarStyle", type);
      // this.$router.push({ path: "/Bumpertype" });
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
.carstyle:focus {
  background-color: darkgreen;
}
</style>