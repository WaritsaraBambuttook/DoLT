<template>
  <div>
    <br />
    <b-row>
      <b-col class="col-12 col-sm-4">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typeOne"
          @click="bumpertype('Pickuptruck')"
        >
          <b-col>
            <h5>กระบะบรรทุก</h5>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typeOne"
          @click="bumpertype('dumper')"
        >
          <b-col>
            <h5>ยกเท</h5>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typeOne"
          @click="bumpertype('rampcar')"
        >
          <b-col>
            <h5>รถพื้นเรีบทางลาด</h5>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col class="col-12 col-sm-4">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typeTwo"
          @click="bumpertype('van')"
        >
          <b-col>
            <h5>รถตู้บรรทุก</h5>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typethree"
          @click="bumpertype('Liquidtruck')"
        >
          <b-col>
            <h5>รถบรรทุกของเหลว</h5>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typethree"
          @click="bumpertype('HMtruck')"
        >
          <b-col>
            <h5>รถบรรทุกวัสดุอันตราย</h5>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
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
      one: "",
      two: "",
      three: "",
      typeOne: true,
      typeTwo: true,
      typethree: true,
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

    if (this.one == "carstyleOne") {
      this.typeOne = true;
      this.typeTwo = false;
      this.typethree = false;
      console.log("1111111");
    } else if (this.one == "carstyleTwo") {
      this.typeOne = false;
      this.typeTwo = true;
      this.typethree = false;
      console.log("2222");
    } else if (this.one == "carstyleThree") {
      this.typeOne = false;
      this.typeTwo = false;
      this.typethree = true;
      console.log("3333");
    }
  }
};
</script>
<style>
.carstyle:focus {
  background-color: darkgreen;
}
</style>