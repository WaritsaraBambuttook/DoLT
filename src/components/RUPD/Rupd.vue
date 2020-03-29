<template>
  <div class="f1">
    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="1. วิธีการติดต้ังเข้ากับคัสซี">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="f1 in f1"
              :key="f1"
              name="some-radios"
              :value="f1"
              @change="one(f1)"
              :disabled="f1 == maxF1_ctype || f1 == maxF1_itype"
            >แบบ {{f1}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="2. วิธีการจับยึดเข้ากับคัสซี ">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="f2 in f2"
              :key="f2"
              name="some-radios"
              :value="f2"
              @change="two(f2)"
              :disabled="f2 == maxF2_boltsnuts || f2 == maxF2_welding"
            >{{f2}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="3. รูปแบบของขายึด (Stay)  ">
          <b-form-radio-group stacked>
            <b-col>
              <b-form-input
                v-model="Wveh"
                type="number"
                placeholder="ความกว้างตัวรถ เช่น 2200 mm"
                min="0"
              ></b-form-input>
              <b-form-input
                v-model="Wch"
                type="number"
                placeholder="ความกว้างคัตซี เช่น 800 mm"
                min="0"
              ></b-form-input>
            </b-col>
            <br />
            <b-col>
              <b-button @click="cal">คำนวณ</b-button>
              <div class="mt-2">Value: {{ num }}</div>
            </b-col>
            <br />

            <b-col>
              <h5>ส่วนต่างระหว่างความกว้างตัวรถและคัสซี W/2 มากกว่า 890 mm</h5>
              <b-form-radio
                v-for="f31 in f31"
                :key="f31"
                name="some-radios"
                :value="f31"
                @change="three(f31)"
                :disabled="MoreThan || f31 == maxF31"
              >{{f31}}</b-form-radio>
            </b-col>
            <br />

            <b-col>
              <h5>ส่วนต่างระหว่างความกว้างตัวรถและคัสซี W/2 น้อยกว่าหรือเท่ากับ 890 mm</h5>
              <b-form-radio
                v-for="f311 in f311"
                :key="f311"
                name="some-radios"
                :value="f311"
                @change="three(f311)"
                :disabled="LessEqual || f311 ==  maxF311_stay2 ||  f311 ==  maxF311_trailer31 ||  f311 ==  maxF311_trailer32 ||  f311 ==  maxF311_tipping ||  f311 ==  maxF311_trailer"
              >{{f311}}</b-form-radio>
            </b-col>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="4.  รูปแบบชิ้นส่วนสำหรับป้องกันการมุด">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="f4 in f4"
              :key="f4"
              name="some-radios"
              :value="f4"
              @change="six(f4)"
              :disabled=" f4 ==   maxF4_tube_cbeam || f4 ==   maxF4_double_recht || f4 ==   maxF4_lip || f4 ==   maxF4_circle || f4 ==   maxF4_square || f4 ==   maxF4_recht || f4 ==   maxF4_cbeam "
            >{{f4}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="5. การปรับได้ของขายึด (Stay)">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="f32 in f32"
              :key="f32"
              name="some-radios"
              :value="f32"
              @change="four(f32)"
              :disabled="f32 ==   maxF32_fixed ||f32 ==   maxF32_slidable || f32 ==   maxF32_foldable"
            >{{f32}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="6. การใช้แรงคนในการปรับตำแหน่ง">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="f33 in f33"
              :key="f33"
              name="some-radios"
              :value="f33"
              @change="five(f33)"
              :disabled="f33 ==   maxF33_nopower || f33 ==   maxF33_humanpower   "
            >{{f33}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selected: "",
      maxF1_ctype: "",
      maxF1_itype: "",
      maxF2_boltsnuts: "",
      maxF2_welding: "",
      maxF31: "",
      maxF311_stay2: "",
      maxF311_trailer31: "",
      maxF311_trailer32: "",
      maxF311_tipping: "",
      maxF311_trailer: "",
      maxF32_fixed: "",
      maxF32_slidable: "",
      maxF32_foldable: "",
      maxF33_nopower: "",
      maxF33_humanpower: "",
      maxF4_tube_cbeam: "",
      maxF4_double_recht: "",
      maxF4_lip: "",
      maxF4_circle: "",
      maxF4_square: "",
      maxF4_recht: "",
      maxF4_cbeam: "",
      Wveh: "",
      Wch: "",
      num: "",
      LessEqual: true,
      MoreThan: true,
      f1: [],
      f2: [],
      f31: [],
      f311: [],
      f32: [],
      f33: [],
      f4: [],
      subType: [],
      index: [],
      type: [],
      ctype: [],
      itype: [],
      BoltsNuts: [],
      Welding: [],
      stay1: [],
      stay2: [],
      trailer31: [],
      trailer32: [],
      tippingVehicle: [],
      trailerCoupling: [],
      fixed: [],
      slidable: [],
      foldable: [],
      noPower: [],
      humanPower: [],
      tubeC: [],
      doubleRecht: [],
      lip: [],
      circle: [],
      square: [],
      recht: [],
      cbeam: [],
      validateFixed: [],
      data: []
    };
  },
  methods: {
    one: function(type) {
      console.log("click 1. " + type);
      if (type == this.f1[0]) {
        this.$store.commit("setnum_rf1", 1);
      }
      if (type == this.f1[1]) {
        this.$store.commit("setnum_rf1", 2);
      }
      this.$store.commit("setrfone", type);
      console.log("getter 1 : " + this.$store.getters.rfone);
      console.log("getter numf1 : " + this.$store.getters.num_rf1);
    },
    two: function(type) {
      console.log("click 2. " + type);
      if (type == this.f2[0]) {
        this.$store.commit("setnum_rf2", 1);
      }
      if (type == this.f2[1]) {
        this.$store.commit("setnum_rf2", 2);
      }
      this.$store.commit("setrftwo", type);
      console.log("getter 2: " + this.$store.getters.rftwo);
      console.log("getter num f2 : " + this.$store.getters.num_rf2);
    },
    three: function(type) {
      console.log("click 3 : " + type);
      if (type == this.f31[0]) {
        this.$store.commit("setnum_rf31", 1);
      }
      if (type == this.f311[0]) {
        this.$store.commit("setnum_rf31", 2);
      }
      if (type == this.f311[1]) {
        this.$store.commit("setnum_rf31", 3);
      }
      if (type == this.f311[2]) {
        this.$store.commit("setnum_rf31", 4);
      }
      if (type == this.f311[3]) {
        this.$store.commit("setnum_rf31", 5);
      }
      if (type == this.f311[4]) {
        this.$store.commit("setnum_rf31", 6);
      }
      this.$store.commit("setrfthree", type);
      console.log("getter 3 : " + this.$store.getters.rfthree);
      console.log("getter num f31 : " + this.$store.getters.num_rf31);
    },
    four: function(type) {
      //อนาคตอาจจะลบตรงนี้///////////////////////////////////////////////////////
      this.validateFixed = type;
      if (this.f32[0] == this.validateFixed) {
        this.humanPower = 0;
        if (this.humanPower == 0) {
          this.maxF33_humanpower = this.f33[1];
          console.log("validate if1.1........", this.maxF33_humanpower);
        }
      } else {
        this.humanPower = [];
        console.log("else");
        var numberOfSubType = this.$store.getters.numberOfSubType;
        var data = this.data;
        for (let i = 3; i < data.length; i++) {
          if (data[i][numberOfSubType] == 1) {
            this.subType.push(data[i][numberOfSubType]);
            this.index.push(i);
            this.type.push(data[i][0]);
            this.noPower.push(data[i][14]);
            this.humanPower.push(data[i][15]);
          }
        }
        if (Math.max(...this.humanPower) == 0) {
          console.log("max......");
          this.maxF33_humanpower = this.f33[1];
          console.log("validate if2........", this.maxF33_humanpower);
        } else {
          this.maxF33_humanpower = this.f33;
          // this.humanPower = Math.max(...this.humanPower);
          console.log("validate else........", this.maxF33_humanpower);
        }
      }
      ///////////////////////////////////////////////////////////////////////
      if (type == this.f32[0]) {
        this.$store.commit("setnum_rf32", 1);
      }
      if (type == this.f32[1]) {
        this.$store.commit("setnum_rf32", 2);
      }
      if (type == this.f32[2]) {
        this.$store.commit("setnum_rf32", 3);
      }
      ///////////////////////////////////////////////////////////////////////
      console.log("click 4 : " + type);
      this.$store.commit("setrffour", type);
      console.log("getter 4 : " + this.$store.getters.rffour);
      console.log("getter num f32 : " + this.$store.getters.num_rf32);
    },

    five: function(type) {
      console.log("click 5 : " + type);
      if (type == this.f33[0]) {
        this.$store.commit("setnum_rf33", 1);
      }
      if (type == this.f33[1]) {
        this.$store.commit("setnum_rf33", 2);
      }
      this.$store.commit("setrffive", type);
      console.log("getter 5 : " + this.$store.getters.rffive);
      console.log("getter num f33 : " + this.$store.getters.num_rf33);
    },
    six: function(type) {
      console.log("click 6 : " + type);
      if (type == this.f4[0]) {
        this.$store.commit("setnum_rf4", 1);
      }
      if (type == this.f4[1]) {
        this.$store.commit("setnum_rf4", 2);
      }
      if (type == this.f4[2]) {
        this.$store.commit("setnum_rf4", 3);
      }
      if (type == this.f4[3]) {
        this.$store.commit("setnum_rf4", 4);
      }
      if (type == this.f4[4]) {
        this.$store.commit("setnum_rf4", 5);
      }
      if (type == this.f4[5]) {
        this.$store.commit("setnum_rf4", 6);
      }
      if (type == this.f4[5]) {
        this.$store.commit("setnum_rf4", 7);
      }
      this.$store.commit("setrfsix", type);
      console.log("getter 6 : " + this.$store.getters.rfsix);
      console.log("getter num f4 : " + this.$store.getters.num_rf4);
    },
    cal: function() {
      let less =
        "ส่วนต่างระหว่างความกว้างตัวรถและคัสซี W/2น้อยกว่าหรือเท่ากับ890mm";
      let more = "ส่วนต่างระหว่างความกว้างตัวรถและคัสซี W/2มากกว่า890mm";
      if (this.Wch != "" && this.Wveh != "") {
        let calculate = (this.Wveh - this.Wch) / 2;
        this.num = calculate;
        console.log("cal :" + this.num);
        if (this.num > 890) {
          this.MoreThan = false;
          this.LessEqual = true;
          this.$store.commit("setCheckWidth", more);
          console.log(
            "getter >> more than : " + this.$store.getters.CheckWidth
          );
        } else {
          this.MoreThan = true;
          this.LessEqual = false;
          this.$store.commit("setCheckWidth", less);
          console.log(
            "getter >> less than and equal : " + this.$store.getters.CheckWidth
          );
        }
      } else {
        if (this.Wveh == "") {
          alert("กรอก 'ความกว้างของตัวรถ' ");
        } else if (this.Wveh == "" && this.Wch == "") {
          alert("กรอก 'ความกว้างของตัวรถ และ ความกว้างของคัตซี' ");
        } else {
          alert("กรอก 'ความกว้างของคัตซี' ");
        }
      }
    }
  },
  mounted() {
    var Bumpertype = this.$store.getters.Bumpertype;
    var numberOfSubType = this.$store.getters.numberOfSubType;
    console.log("getters sub tpye  " + Bumpertype);
    var instance = this;
    var url =
      "https://sheets.googleapis.com//v4/spreadsheets/1AYlNYc_so8jGRhNoNK_PGJ1XSHwOrhvOoW76UVpCoek/values/A1:AQ76/?key=AIzaSyBdDxNQXwJyowwndJy54wQoynwFvQJiK_g";
    axios
      .get(url)
      .then(function(response) {
        var data = response.data.values;
        instance.data = response.data.values;
        //f1
        for (let i = 1; i < 2; i++) {
          for (let j = 1; j < 3; j++) {
            instance.f1.push(data[i][j]);
          }
        }
        //f2
        for (let i = 1; i < 2; i++) {
          for (let j = 3; j <= 4; j++) {
            instance.f2.push(data[i][j]);
          }
        }
        //f31
        for (let i = 2; i < 3; i++) {
          for (let j = 5; j < 6; j++) {
            instance.f31.push(data[i][j]);
          }
        }
        //f311
        for (let i = 2; i < 3; i++) {
          for (let j = 6; j <= 10; j++) {
            instance.f311.push(data[i][j]);
          }
        }
        //f32
        for (let i = 1; i < 2; i++) {
          for (let j = 11; j <= 13; j++) {
            instance.f32.push(data[i][j]);
          }
        }
        //f33
        for (let i = 1; i < 2; i++) {
          for (let j = 14; j <= 15; j++) {
            instance.f33.push(data[i][j]);
          }
        }

        //f4
        for (let i = 1; i < 2; i++) {
          for (let j = 16; j <= 22; j++) {
            instance.f4.push(data[i][j]);
          }
        }
        // console.log("f1 >>" + instance.f1);
        // console.log("f2 >>" + instance.f2);
        // console.log("f31 >>" + instance.f31);
        // console.log("f311 >>" + instance.f311);
        // console.log("f32 >>" + instance.f32);
        // console.log("f33 >>" + instance.f33);
        // console.log("f4 >>" + instance.f4);

        //////////////////////////////////////////////////////////////////////////

        for (let i = 3; i < data.length; i++) {
          if (data[i][numberOfSubType] == 1) {
            instance.subType.push(data[i][numberOfSubType]);
            //index
            instance.index.push(i);
            //แบบที่
            instance.type.push(data[i][0]);

            instance.ctype.push(data[i][1]);
            instance.itype.push(data[i][2]);

            instance.BoltsNuts.push(data[i][3]);
            instance.Welding.push(data[i][4]);

            instance.stay1.push(data[i][5]);

            instance.stay2.push(data[i][6]);
            instance.trailer31.push(data[i][7]);
            instance.trailer32.push(data[i][8]);
            instance.tippingVehicle.push(data[i][9]);
            instance.trailerCoupling.push(data[i][10]);

            instance.fixed.push(data[i][11]);
            instance.slidable.push(data[i][12]);
            instance.foldable.push(data[i][13]);

            instance.noPower.push(data[i][14]);
            instance.humanPower.push(data[i][15]);

            instance.tubeC.push(data[i][16]);
            instance.doubleRecht.push(data[i][17]);
            instance.lip.push(data[i][18]);
            instance.circle.push(data[i][19]);
            instance.square.push(data[i][20]);
            instance.recht.push(data[i][21]);
            instance.cbeam.push(data[i][22]);
          }
        }
        // console.log("f1 " + instance.f1[1]);

        // console.log("subtype " + instance.subType);
        // console.log("index " + instance.index);
        // console.log("type " + instance.type);

        // console.log("ctype" + instance.ctype);
        // console.log("itype" + instance.itype);

        // console.log("BoltsNuts " + instance.BoltsNuts);
        // console.log("Welding" + instance.Welding);

        // console.log("stay1 " + instance.stay1);
        // console.log("stay2" + instance.stay2);
        // console.log("trailer31 " + instance.trailer31);
        // console.log("trailer32" + instance.trailer32);
        // console.log("tippingVehicle " + instance.tippingVehicle);
        // console.log("trailerCoupling" + instance.trailerCoupling);

        // console.log("fixed " + instance.fixed);
        // console.log("slidable" + instance.slidable);
        // console.log("foldable " + instance.foldable);

        // console.log("noPower" + instance.noPower);
        // console.log("humanPower " + instance.humanPower);

        // console.log("tubeC" + instance.tubeC);
        // console.log("doubleRecht " + instance.doubleRecht);
        // console.log("lip" + instance.lip);
        // console.log("circle " + instance.circle);
        // console.log("square" + instance.square);
        // console.log("circle " + instance.recht);
        // console.log("square" + instance.cbeam);

        // //max
        // console.log("Max ctype  " + Math.max(...instance.ctype));
        // console.log("Max itype  " + Math.max(...instance.itype));

        // console.log("Max BoltsNuts  " + Math.max(...instance.BoltsNuts));
        // console.log("Max Welding  " + Math.max(...instance.Welding));

        // console.log("Max stay1  " + Math.max(...instance.stay1));
        // console.log("Max stay2  " + Math.max(...instance.stay2));
        // console.log("Max trailer31  " + Math.max(...instance.trailer31));
        // console.log("Max trailer32  " + Math.max(...instance.trailer32));
        // console.log(
        //   "Max tippingVehicle  " + Math.max(...instance.tippingVehicle)
        // );
        // console.log(
        //   "Max trailerCoupling  " + Math.max(...instance.trailerCoupling)
        // );

        // console.log("Max fixed  " + Math.max(...instance.fixed));
        // console.log("Max slidable  " + Math.max(...instance.slidable));
        // console.log("Max foldable  " + Math.max(...instance.foldable));

        // console.log("Max noPower  " + Math.max(...instance.noPower));
        // console.log("Max humanPower  " + Math.max(...instance.humanPower));

        // console.log("Max tubeC  " + Math.max(...instance.tubeC));
        // console.log("Max doubleRecht  " + Math.max(...instance.doubleRecht));
        // console.log("Max lip  " + Math.max(...instance.lip));
        // console.log("Max circle  " + Math.max(...instance.circle));
        // console.log("Max square  " + Math.max(...instance.square));
        // console.log("Max recht  " + Math.max(...instance.recht));
        // console.log("Max cbeam  " + Math.max(...instance.cbeam));

        const arrFindCtype = instance.ctype.find(el => el > 0);
        const arrFinditype = instance.itype.find(el => el > 0);

        const arrFindBoltsNuts = instance.BoltsNuts.find(el => el > 0);
        const arrFindWelding = instance.Welding.find(el => el > 0);

        const arrFindstay1 = instance.stay1.find(el => el > 0);

        const arrFindstay2 = instance.stay2.find(el => el > 0);
        const arrFindtrailer31 = instance.trailer31.find(el => el > 0);
        const arrFindtrailer32 = instance.trailer32.find(el => el > 0);
        const arrFindtippingVehicle = instance.tippingVehicle.find(
          el => el > 0
        );
        const arrFindtrailerCoupling = instance.trailerCoupling.find(
          el => el > 0
        );

        const arrFindfixed = instance.fixed.find(el => el > 0);
        const arrFindslidable = instance.slidable.find(el => el > 0);
        const arrFindfoldable = instance.foldable.find(el => el > 0);

        const arrFindnoPower = instance.noPower.find(el => el > 0);
        const arrFindhumanPower = instance.humanPower.find(el => el > 0);

        const arrFindtubeC = instance.tubeC.find(el => el > 0);
        const arrFinddoubleRecht = instance.doubleRecht.find(el => el > 0);
        const arrFindlip = instance.lip.find(el => el > 0);
        const arrFindcircle = instance.circle.find(el => el > 0);
        const arrFindsquare = instance.square.find(el => el > 0);
        const arrFindrecht = instance.recht.find(el => el > 0);
        const arrFindcbeam = instance.cbeam.find(el => el > 0);

        console.log("arrFindCtype ", arrFindCtype);
        console.log("arrFinditype ", arrFinditype);
        console.log("arrFindBoltsNuts ", arrFindBoltsNuts);
        console.log("arrFindWelding ", arrFindWelding);
        console.log("arrFindstay1 ", arrFindstay1);
        console.log("arrFindstay2 ", arrFindstay2);
        console.log("arrFindtrailer31 ", arrFindtrailer31);
        console.log("arrFindtrailer32 ", arrFindtrailer32);
        console.log("arrFindtippingVehicle ", arrFindtippingVehicle);
        console.log("arrFindtrailerCoupling ", arrFindtrailerCoupling);
        console.log("arrFindfixed ", arrFindfixed);
        console.log("arrFindslidable ", arrFindslidable);
        console.log("arrFindfoldable ", arrFindfoldable);
        console.log("arrFindnoPower ", arrFindnoPower);
        console.log("arrFindhumanPower ", arrFindhumanPower);
        console.log("arrFindtubeC ", arrFindtubeC);
        console.log("arrFinddoubleRecht ", arrFinddoubleRecht);
        console.log("arrFindlip ", arrFindlip);
        console.log("arrFindcircle ", arrFindcircle);
        console.log("arrFindsquare ", arrFindsquare);
        console.log("arrFindrecht ", arrFindrecht);
        console.log("arrFindcbeam ", arrFindcbeam);

        //f1
        if (arrFindCtype != 1) {
          instance.maxF1_ctype = instance.f1[0];
        }
        if (arrFinditype != 1) {
          instance.maxF1_itype = instance.f1[1];
        }
        //f2
        if (arrFindBoltsNuts != 1) {
          instance.maxF2_boltsnuts = instance.f2[0];
        }
        if (arrFindWelding != 1) {
          instance.maxF2_welding = instance.f2[1];
        }
        //f31
        if (arrFindstay1 != 1) {
          instance.maxF31 = instance.f31;
        }
        //f311
        if (arrFindstay2 != 1) {
          instance.maxF311_stay2 = instance.f311[0];
        }
        if (arrFindtrailer31 != 1) {
          instance.maxF311_trailer31 = instance.f311[1];
        }
        if (arrFindtrailer32 != 1) {
          instance.maxF311_trailer32 = instance.f311[2];
        }
        if (arrFindtippingVehicle != 1) {
          instance.maxF311_tipping = instance.f311[3];
        }
        if (arrFindtrailerCoupling != 1) {
          instance.maxF311_trailer = instance.f311[4];
        }
        //f32
        if (arrFindfixed != 1) {
          instance.maxF32_fixed = instance.f32[0];
        }
        if (arrFindslidable != 1) {
          instance.maxF32_slidable = instance.f32[1];
        }
        if (arrFindfoldable != 1) {
          instance.maxF32_foldable = instance.f32[2];
        }
        //f33
        if (arrFindnoPower != 1) {
          instance.maxF33_nopower = instance.f33[0];
        }
        if (arrFindhumanPower != 1) {
          instance.maxF33_humanpower = instance.f33[1];
        }
        //f4
        if (arrFindtubeC != 1) {
          instance.maxF4_tube_cbeam = instance.f4[0];
        }
        if (arrFinddoubleRecht != 1) {
          instance.maxF4_double_recht = instance.f4[1];
        }
        if (arrFindlip != 1) {
          instance.maxF4_lip = instance.f4[2];
        }
        if (arrFindcircle != 1) {
          instance.maxF4_circle = instance.f4[3];
        }
        if (arrFindsquare != 1) {
          instance.maxF4_square = instance.f4[4];
        }
        if (arrFindrecht != 1) {
          instance.maxF4_recht = instance.f4[5];
        }
        if (arrFindcbeam != 1) {
          instance.maxF4_cbeam = instance.f4[6];
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style>
.f1 {
  text-align: start;
}
.outline {
  border-style: groove;
}
</style>