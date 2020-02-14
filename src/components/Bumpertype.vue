<template>
  <div>
    <br />
    <b-row>
      <b-col class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button
          class="carstyle"
          :variant="buttonColor"
          :disabled="!typeone"
          @click="bumpertype('กระบะบรรทุก')"
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
          @click="bumpertype('ยกเท')"
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
          @click="bumpertype('รถพื้นเรีบทางลาด')"
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
          @click="bumpertype('รถตู้บรรทุก')"
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
          @click="bumpertype('รถบรรทุกของเหลว')"
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
          @click="bumpertype('รถบรรทุกวัสดุอันตราย')"
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
          @click="bumpertype('รถบรรทุกถังคอนกรีต')"
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
          @click="bumpertype('บรรทุกเครื่องทุ่นแรง')"
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
          @click="bumpertype('บรรทุกปูนซิเมนต์ผง')"
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
          @click="bumpertype('รถดูดฝุ่นและกวาดถนน')"
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
          @click="bumpertype('รถเก็บขยะ')"
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
          @click="bumpertype('รถสไลด์')"
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
          @click="bumpertype('เทรลเลอร์สองชั้น')"
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
          @click="bumpertype('รถพ่วงบรรทุก')"
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
          @click="bumpertype('พ่วงยกเท')"
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
          @click="bumpertype('รถกึ่งพ่วง')"
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
          @click="bumpertype('รถกึ่งพ่วงวัสดุยาว')"
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
          @click="bumpertype('รถลากจูง')"
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

    if (this.one == "ประเภทที่1") {
      this.typeone = true;
    } else if (this.one == "ประเภทที่2") {
      this.typetwo = true;
    } else if (this.one == "ประเภทที่3") {
      this.typethree = true;
    } else if (this.one == "ประเภทที่4") {
      this.typefour = true;
    } else if (this.one == "ประเภทที่5") {
      this.typefive = true;
    } else if (this.one == "ประเภทที่6") {
      this.typesix = true;
    } else if (this.one == "ประเภทที่7") {
      this.typeseven = true;
    } else if (this.one == "ประเภทที่8") {
      this.typeeight = true;
    } else if (this.one == "ประเภทที่9") {
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