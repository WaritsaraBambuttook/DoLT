<template>
  <div>
    <b-row>
      <b-row class="col-12 col-sm-12">
        <b-col class="col-12 col-sm-12">
          <h4>ลักษณะรถยนต์ : {{car}} ({{bumper}})</h4>
          <h5>ประเภทกันชน : {{type}} (ด้านท้ายรถ)</h5>
        </b-col>
      </b-row>
      <br />
      <b-row class="col-12 col-sm-12">
        <b-col class="col-12 col-sm-4">
          <b-col>
            <!-- <b-img class="imgRsummary" thumbnail fluid :src="pathImg" :alt="pathImg"></b-img> -->
            <b-img
              class="imgRsummary"
              thumbnail
              fluid
              :src="require('../../assets/imgRUPD/behind.png')"
              alt="behind"
            ></b-img>
          </b-col>
          <br />
          <b-col>{{codeID}}</b-col>
        </b-col>
        <b-col class="col-12 col-sm-8 text-left">
          <p>1. รูปแบบของคัสซี : {{rf1}}</p>
          <p>2. วิธีการจับยึดเข้ากับคัสซี : {{rf2}}</p>
          <p>3. รูปแบบของขายึด (Stay) : {{width}} = {{rf3}}</p>
          <p>4. การปรับได้ของขายึด (Stay) : {{rf5}}</p>
          <p>5. การใช้แรงคนในการปรับตำแหน่ง : {{rf4}}</p>
          <p>6. รูปแบบชิ้นส่วนสำหรับป้องกันการมุด : {{rf6}}</p>
        </b-col>
      </b-row>
      <b-row class="col-12 col-sm-12">
        <b-col class="col-12 col-sm-7 text-right">
          <!-- <a :href="locationFile" onclick="return false;"> -->
          <b-button @click="GeneratePDF" :variant="variant" :disabled="disabled == true">
            <b-icon icon="download" font-scale="2"></b-icon>Download
          </b-button>
          <!-- </a> -->
        </b-col>
        <b-col class="col-12 col-sm-5 text-right" v-if="loading == true">
          <strong>Loading...</strong>
          <b-spinner class="ml-auto"></b-spinner>
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
      width: "",
      allnum_rf: [],
      pdf: [],
      data: [],
      index_rf: [],
      // imgType: {
      //   "RUPD-MTEC-1-1-2-1-1-1": require("../../assets/imgRUPD/RUPD-MTEC-1-1-2-1-1-1.jpg"),
      //   "RUPD-MTEC-1-1-2-1-1-2": require("../../assets/imgRUPD/RUPD-MTEC-1-1-2-1-2.jpg")
      // },
      // pathImg: "",
      codeID: "",
      loading: false,
      disabled: false,
      variant: "success"
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

    // this.pathImg = this.imgType[typeName];
    this.codeID = typeName;

    console.log("code", this.codeID);

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
          //  else {
          //   alert(
          //     "ยังไม่มีแบบเชิงวิศวกรรมนี้ กรุณาเลือกฟังก์ชั่นกันในขั้นตอนที่ 4 ใหม่อีกครั้ง "
          //   );
          // }
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
      this.loading = true;
      this.disabled = true;
      this.variant = "dark";
      if (this.pdf == "") {
        alert("ยังไม่มีแบบเชิงวิศวกรรมนี้ กรุณาเลือกใหม่อีกครั้ง");
      } else {
        const instance = this;
        setTimeout(function() {
          instance.loading = false;
          instance.disabled = false;
          instance.variant = "success";
        }, 6000);
        location.href = this.pdf;
      }
    }
  }
  // mounted() {
  //   this.pathImg = require("../../assets/imgRUPD/" + this.imgType + ".jpg");
  // }
  // computed: {
  //   imgRUPD() {
  //     return require(`../../assets/imgRUPD/${this.imgType}.jpg`);
  //   }
  // }
};
</script>
<style>
/* .imgRsummary {
  width: 200px;
  height: aut;
} */
.line {
  border-style: ridge;
}
</style>