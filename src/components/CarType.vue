<template>
  <div>
    <!-- <b-row>
      <b-col>
        <h3>ลักษณะของรถ</h3>
      </b-col>
    </b-row>-->
    <br />
    <b-row style="margin-top: 3px;">
      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          ref="myid"
          :variant="buttonColor"
          @click="carstyle('ประเภทที่1')"
        >
          <b-col>
            <h6>ประเภทที่ 1</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button class="carstyle" :variant="buttonColor" @click="carstyle('ประเภทที่2')">
          <b-col>
            <h6>ประเภทที่ 2</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button class="carstyle" :variant="buttonColor" @click="carstyle('ประเภทที่3')">
          <b-col>
            <h6>ประเภทที่ 3</h6>
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

    <b-row style="margin-top: 3px;">
      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          ref="myid"
          :variant="buttonColor"
          @click="carstyle('ประเภทที่4')"
        >
          <b-col>
            <h6>ประเภทที่ 4</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button class="carstyle" :variant="buttonColor" @click="carstyle('ประเภทที่5')">
          <b-col>
            <h6>ประเภทที่ 5</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button class="carstyle" :variant="buttonColor" @click="carstyle('ประเภทที่6')">
          <b-col>
            <h6>ประเภทที่ 6</h6>
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

    <b-row style="margin-top: 3px;">
      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          ref="myid"
          :variant="buttonColor"
          @click="carstyle('ประเภทที่7')"
        >
          <b-col>
            <h6>ประเภทที่ 7</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button class="carstyle" :variant="buttonColor" @click="carstyle('ประเภทที่8')">
          <b-col>
            <h6>ประเภทที่ 8</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button class="carstyle" :variant="buttonColor" @click="carstyle('ประเภทที่9')">
          <b-col>
            <h6>ประเภทที่ 9</h6>
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
  width: 60%;
}
.img {
  padding-left: unset;
  padding-right: unset;
  width: 100px;
  height: 100px;
}
.carstyle:focus {
  background-color: darkgreen;
}
</style>