<template>
  <div>
    <br />
    <b-row>
      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button class="carstyle" :variant="buttonColor" @click="bumpertype('กระบะบรรทุก')">
          <b-col>
            <h6>กระบะบรรทุก</h6>
            <b-img
              class="img"
              thumbnail
              fluid
              :src="require('../../assets/logo.png')"
              alt="Image 1"
            ></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button class="carstyle" :variant="buttonColor" @click="bumpertype('ยกเท')">
          <b-col>
            <h6>ยกเท</h6>
            <b-img
              class="img"
              thumbnail
              fluid
              :src="require('../../assets/logo.png')"
              alt="Image 1"
            ></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button class="carstyle" :variant="buttonColor" @click="bumpertype('รถพื้นเรีบทางลาด')">
          <b-col>
            <h6>รถพื้นเรีบทางลาด</h6>
            <b-img
              class="img"
              thumbnail
              fluid
              :src="require('../../assets/logo.png')"
              alt="Image 1"
            ></b-img>
          </b-col>
        </b-button>
      </b-col>
    </b-row>
    <br />
  </div>
</template>
<script>
import { store } from "../../store/store";
export default {
  store,
  data() {
    return {
      one: "",
      // two: "",
      // three: "",
      // typeone: false,
      // typetwo: false,
      // typethree: false,
      // typefour: false,
      // typefive: false,
      // typesix: false,
      // typeseven: false,
      // typeeight: false,
      // typenine: false,
      buttonColor: "outline-success"
    };
  },
  methods: {
    bumpertype: function(type) {
      console.log("commit to store " + type);
      this.$store.commit("setBumpertype", type);
    }
  },

  mounted() {
    this.one = this.$store.getters.CarStyle;

    console.log("getters car style  " + this.one);

    // if (this.one == "ประเภทที่1") {
    //   this.typeone = true;
    // } else if (this.one == "ประเภทที่2") {
    //   this.typetwo = true;
    // } else if (this.one == "ประเภทที่3") {
    //   this.typethree = true;
    // } else if (this.one == "ประเภทที่4") {
    //   this.typefour = true;
    // } else if (this.one == "ประเภทที่5") {
    //   this.typefive = true;
    // } else if (this.one == "ประเภทที่6") {
    //   this.typesix = true;
    // } else if (this.one == "ประเภทที่7") {
    //   this.typeseven = true;
    // } else if (this.one == "ประเภทที่8") {
    //   this.typeeight = true;
    // } else if (this.one == "ประเภทที่9") {
    //   this.typenine = true;
    // }
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