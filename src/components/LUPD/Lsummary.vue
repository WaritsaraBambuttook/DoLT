<template>
  <div>
    <br />
    <b-row>
      <b-row class="col-12 col-sm-12">
        <b-col class="col-12 col-sm-12">
          <h4>ลักษณะรถยนต์ : {{car}} ({{bumper}})</h4>
          <h5>ประเภทกันชน : {{type}} (ด้านข้างรถ)</h5>
        </b-col>
      </b-row>
      <br />
      <b-row class="col-12 col-sm-12">
        <b-col class="col-12 col-sm-5">
          <b-col>
            <b-img
              class="imgLsummary"
              thumbnail
              fluid
              :src="require('../../assets/imgLUPD/beside.png')"
              alt="Image 1"
            ></b-img>
          </b-col>
          <br />
          <b-col>{{code}}</b-col>
        </b-col>
        <b-col class="col-12 col-sm-7 text-left">
          <p>1. รูปแบบของคัสซี : {{lf1}}</p>
          <p>2. วิธีการจับยึดเข้ากับคัสซี : {{lf2}}</p>
          <p>3. รูปแบบของขายึด (Stay) : {{lf3}}</p>
          <p>4. การปรับได้ของขายึด (Stay) : {{lf5}}</p>
          <p>5. การใช้แรงคนในการปรับตำแหน่ง : {{lf4}}</p>
          <p>6. รูปแบบชิ้นส่วนสำหรับป้องกันการมุด : {{lf6}}</p>
        </b-col>
      </b-row>
      <br />
      <b-row class="col-12 col-sm-12">
        <b-col class="col-12 col-sm-7 text-right">
          <b-button @click="GeneratePDF" :variant="variant" :disabled="disabled == true">
            <b-icon icon="download" font-scale="2"></b-icon>Download
          </b-button>
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
import axios from "axios";
export default {
  data() {
    return {
      lf1: "",
      lf2: "",
      lf3: "",
      lf4: "",
      lf5: "",
      lf6: "",
      car: "",
      bumper: "",
      type: "",
      allNumber: [],
      index_lf: "",
      pdf: [],
      code: "",
      loading: false,
      disabled: false,
      variant: "success"
    };
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
        }, 4000);
        location.href = this.pdf;
      }
    }
  },
  created() {
    this.car = this.$store.getters.CarStyle;
    this.bumper = this.$store.getters.Bumpertype;
    this.type = this.$store.getters.RLtype;
    this.lf1 = this.$store.getters.lfone;
    this.lf2 = this.$store.getters.lftwo;
    this.lf3 = this.$store.getters.lfthree;
    this.lf4 = this.$store.getters.lffour;
    this.lf5 = this.$store.getters.lffive;
    this.lf6 = this.$store.getters.lfsix;
    //number of LUPD
    var numLf1 = this.$store.getters.num_lf1;
    var numLf2 = this.$store.getters.num_lf2;
    var numLf31 = this.$store.getters.num_lf31;
    var numLf32 = this.$store.getters.num_lf32;
    var numLf33 = this.$store.getters.num_lf33;
    var numLf4 = this.$store.getters.num_lf4;
    //to string
    this.allNumber.push(numLf1, numLf2, numLf31, numLf32, numLf33, numLf4);
    const toString =
      "LUPD-MTEC-" + this.allNumber.toString().replace(/,/g, "-");
    console.log(toString);
    this.code = toString;
    var instance = this;
    var url =
      "https://sheets.googleapis.com//v4/spreadsheets/19DJnQk5pirckQRHjaswBlVJxpY0AUzzkKvTAIZvV2iA/values/A1:P28/?key=AIzaSyBdDxNQXwJyowwndJy54wQoynwFvQJiK_g";
    axios
      .get(url)
      .then(function(response) {
        instance.data = response.data.values;
        for (let i = 2; i < instance.data.length; i++) {
          if (toString == instance.data[i][0]) {
            instance.index_lf = i;
            instance.pdf.push(instance.data[i][15]);
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style>
.imgLsummary {
  width: auto;
  height: 250px;
}
.line {
  border-style: ridge;
}
</style>