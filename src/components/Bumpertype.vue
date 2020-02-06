<template>
  <div>
    <br />
    <b-row>
      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typeone"
          @click="bumpertype('Pickuptruck')"
        >
          <b-col>
            <h6>กระบะบรรทุก</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typeone"
          @click="bumpertype('dumper')"
        >
          <b-col>
            <h6>ยกเท</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typeone"
          @click="bumpertype('rampcar')"
        >
          <b-col>
            <h6>รถพื้นเรีบทางลาด</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
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
          :disabled="!typetwo"
          @click="bumpertype('van')"
        >
          <b-col>
            <h6>รถตู้บรรทุก</h6>
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
            <h6>รถบรรทุกของเหลว</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typefour"
          @click="bumpertype('HMtruck')"
        >
          <b-col>
            <h6>รถบรรทุกวัสดุอันตราย</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
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
          :disabled="!typefive"
          @click="bumpertype('concreteTruck')"
        >
          <b-col>
            <h6>รถบรรทุกถังคอนกรีต</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typefive"
          @click="bumpertype('LaborsavingTruck')"
        >
          <b-col>
            <h6>บรรทุกเครื่องทุ่นแรง</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typefive"
          @click="bumpertype('cementPowderTruck')"
        >
          <b-col>
            <h6>บรรทุกปูนซิเมนต์ผง</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
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
          :disabled="!typefive"
          @click="bumpertype('vacuumTrucks')"
        >
          <b-col>
            <h6>รถดูดฝุ่นและกวาดถนน</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typefive"
          @click="bumpertype('garbageTruck')"
        >
          <b-col>
            <h6>รถเก็บขยะ</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typefive"
          @click="bumpertype('slideCar')"
        >
          <b-col>
            <h6>รถสไลด์</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
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
          :disabled="!typefive"
          @click="bumpertype('doubleTrailer')"
        >
          <b-col>
            <h6>เทรลเลอร์สองชั้น</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typesix"
          @click="bumpertype('tankerTrailers')"
        >
          <b-col>
            <h6>รถพ่วงบรรทุก</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typesix"
          @click="bumpertype('dumpTrailers')"
        >
          <b-col>
            <h6>พ่วงยกเท</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
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
          :disabled="!typeseven"
          @click="bumpertype('semiTrailer')"
        >
          <b-col>
            <h6>รถกึ่งพ่วง</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typeeight"
          @click="bumpertype('vehicleTransport')"
        >
          <b-col>
            <h6>รถกึ่งพ่วงวัสดุยาว</h6>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typenine"
          @click="bumpertype('towingCar')"
        >
          <b-col>
            <h6>รถลากจูง</h6>
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
      typeone: false,
      typetwo: false,
      typethree: false,
      typefour: false,
      typefive: false,
      typesix: false,
      typeseven: false,
      typeeight: false,
      typenine: false,
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
      this.typeone = true;
    } else if (this.one == "carstyleTwo") {
      this.typetwo = true;
    } else if (this.one == "carstyleThree") {
      this.typethree = true;
    } else if (this.one == "carstyleFour") {
      this.typefour = true;
    } else if (this.one == "carstyleFive") {
      this.typefive = true;
    } else if (this.one == "carstyleSix") {
      this.typesix = true;
    } else if (this.one == "carstyleSeven") {
      this.typeseven = true;
    } else if (this.one == "carstyleEight") {
      this.typeeight = true;
    } else if (this.one == "carstyleNine") {
      this.typenine = true;
      console.log("33333");
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