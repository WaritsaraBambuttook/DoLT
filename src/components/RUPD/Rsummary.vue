<template>
  <div>
    <b-row>
      <b-row class="col-12 col-sm-12">
        <b-col class="col-12 col-sm-12">
          <h4>ลักษณะรถยนต์ : {{car}} ({{bumper}})</h4>
          <h5>ประเภทกันชน : {{type}}</h5>
        </b-col>
      </b-row>
      <br />
      <b-row class="col-12 col-sm-12">
        <b-col class="col-12 col-sm-4">
          <b-img
            class="imgRsummary"
            thumbnail
            fluid
            :src="require('../../assets/logo.png')"
            alt="Image 1"
          ></b-img>
        </b-col>
        <b-col class="col-12 col-sm-8 text-left">
          <p>1. วิธีการติดต้ังเข้ากับคัสซี : {{rf1}}</p>
          <p>2. วิธีการจับยึดเข้ากับคัสซี : {{rf2}}</p>
          <p>3. รูปแบบของขายึด (Stay) : {{width}} = {{rf3}}</p>
          <p>4. การใช้แรงคนในการปรับตำแหน่ง : {{rf4}}</p>
          <p>5. การปรับได้ของขายึด (Stay) : {{rf5}}</p>
          <p>6. รูปแบบชิ้นส่วนสำหรับป้องกันการมุด : {{rf6}}</p>
        </b-col>
      </b-row>
      <b-row class="col-12 col-sm-12">
        <b-col>
          <a :href="locationFile">
            <b-button @click="GeneratePDF" variant="success">download</b-button>
          </a>

          <br />
        </b-col>
      </b-row>
      <b-row class="col-12 col-sm-12">
        <b-col>
          <br />
        </b-col>
      </b-row>
    </b-row>
  </div>
</template>

<script>
var _ = require("lodash");
import axios from "axios";
export default {
  data() {
    return {
      rf1: "",
      rf2: "",
      rf3: "",
      rf4: "",
      rf5: "",
      rf6: "",
      car: "",
      bumper: "",
      type: "",
      locationFile: "",
      nameFile: "",
      width: "",
      allnum_rf: [],
      pdf: [],
      data: [],
      index_rf: []
    };
  },
  created() {
    this.width = this.$store.getters.CheckWidth;
    this.car = this.$store.getters.CarStyle;
    this.bumper = this.$store.getters.Bumpertype;
    this.type = this.$store.getters.RLtype;
    this.rf1 = this.$store.getters.rfone;
    this.rf2 = this.$store.getters.rftwo;
    this.rf3 = this.$store.getters.rfthree;
    this.rf4 = this.$store.getters.rffour;
    this.rf5 = this.$store.getters.rffive;
    this.rf6 = this.$store.getters.rfsix;

    ///////////////////
    var f1 = this.$store.getters.num_rf1;
    var f2 = this.$store.getters.num_rf2;
    var f31 = this.$store.getters.num_rf31;
    var f32 = this.$store.getters.num_rf32;
    var f33 = this.$store.getters.num_rf33;
    var f4 = this.$store.getters.num_rf4;
    this.allnum_rf.push(f1, f2, f31, f32, f33, f4);

    // console.log("all ", this.allnum_rf);
    const typeName =
      "RUPD-MTEC-" + this.allnum_rf.toString().replace(/,/g, "-");
    console.log("typeName", typeName);

    var instance = this;
    var url =
      "https://sheets.googleapis.com//v4/spreadsheets/1AYlNYc_so8jGRhNoNK_PGJ1XSHwOrhvOoW76UVpCoek/values/A1:AQ76/?key=AIzaSyBdDxNQXwJyowwndJy54wQoynwFvQJiK_g";
    axios
      .get(url)
      .then(function(response) {
        // var data = response.data.values;
        instance.data = response.data.values;
        // console.log(instance.data);

        //
        for (let i = 3; i < instance.data.length; i++) {
          // instance.allTpye.push(instance.data[i][0]);
          if (typeName == instance.data[i][0]) {
            instance.index_rf = i;
            instance.pdf.push(instance.data[i][42]);
          }
        }

        console.log("pdf ", instance.pdf);
        console.log("instance.index_rf", instance.index_rf);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    GeneratePDF: function() {
      this.locationFile = this.pdf;
    }
  }
};
</script>
<style>
.imgRsummary {
  width: 200px;
  height: 200px;
}
.line {
  border-style: ridge;
}
</style>