<template>
  <div>
    <br />
    <b-row>
      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button class="carstyle" :variant="buttonColor" @click="bumpertype('รถบรรทุกถังคอนกรีต')">
          <b-col>
            <h6>รถบรรทุกถังคอนกรีต</h6>
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
        <b-button
          class="carstyle"
          :variant="buttonColor"
          @click="bumpertype('บรรทุกเครื่องทุ่นแรง')"
        >
          <b-col>
            <h6>บรรทุกเครื่องทุ่นแรง</h6>
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
        <b-button class="carstyle" :variant="buttonColor" @click="bumpertype('บรรทุกปูนซิเมนต์ผง')">
          <b-col>
            <h6>บรรทุกปูนซิเมนต์ผง</h6>
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

    <b-row>
      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          @click="bumpertype('รถดูดฝุ่นและกวาดถนน')"
        >
          <b-col>
            <h6>รถดูดฝุ่นและกวาดถนน</h6>
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
        <b-button class="carstyle" :variant="buttonColor" @click="bumpertype('รถเก็บขยะ')">
          <b-col>
            <h6>รถเก็บขยะ</h6>
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
        <b-button class="carstyle" :variant="buttonColor" @click="bumpertype('รถสไลด์')">
          <b-col>
            <h6>รถสไลด์</h6>
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

    <b-row>
      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button class="carstyle" :variant="buttonColor" @click="bumpertype('เทรลเลอร์สองชั้น')">
          <b-col>
            <h6>เทรลเลอร์สองชั้น</h6>
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