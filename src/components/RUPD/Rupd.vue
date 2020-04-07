<template>
  <div class="f1">
    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="วิธีการติดต้ังเข้ากับคัสซี">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="f1 in f1"
              :key="f1"
              name="some-radios"
              :value="f1"
              @change="one(f1)"
              :disabled="f1 == Vctype || f1 == Vitype"
            >แบบ {{f1}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="วิธีการจับยึดเข้ากับคัสซี ">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="f2 in f2"
              :key="f2"
              name="some-radios"
              :value="f2"
              @change="two(f2)"
              :disabled="f2 == Vboltsnuts || f2 == Vwelding"
            >{{f2}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="รูปแบบของขายึด (Stay)  ">
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
                :disabled="MoreThan || f31 == VF31"
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
                :disabled="LessEqual || f311 ==  Vstay2 ||  f311 ==  Vtrailer31 ||  f311 ==  Vtrailer32 ||  f311 ==  Vtipping ||  f311 ==  Vtrailer"
              >{{f311}}</b-form-radio>
            </b-col>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="รูปแบบชิ้นส่วนสำหรับป้องกันการมุด">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="f4 in f4"
              :key="f4"
              name="some-radios"
              :value="f4"
              @change="six(f4)"
              :disabled=" f4 ==  Vtube_cbeam || f4 ==   Vdouble_recht || f4 ==   Vlip || f4 ==   Vcircle || f4 ==   Vsquare || f4 ==   Vrecht || f4 ==   Vcbeam "
            >{{f4}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="การปรับได้ของขายึด (Stay)">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="f32 in f32"
              :key="f32"
              name="some-radios"
              :value="f32"
              @change="four(f32)"
              :disabled="f32 ==   Vfixed ||f32 ==   Vslidable || f32 ==  Vfoldable"
            >{{f32}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="การใช้แรงคนในการปรับตำแหน่ง">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="f33 in f33"
              :key="f33"
              name="some-radios"
              :value="f33"
              @change="five(f33)"
              :disabled="f33 ==   Vnopower || f33 ==  Vhumanpower   "
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
      Vctype: "",
      Vitype: "",
      Vboltsnuts: "",
      Vwelding: "",
      VF31: "",
      Vstay2: "",
      Vtrailer31: "",
      Vtipping: "",
      Vtrailer: "",
      Vfixed: "",
      Vslidable: "",
      Vfoldable: "",
      Vnopower: "",
      Vhumanpower: "",
      Vtube_cbeam: "",
      Vdouble_recht: "",
      Vlip: "",
      Vcircle: "",
      Vsquare: "",
      Vrecht: "",
      Vcbeam: "",
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
      if (type == this.f1[0]) {
        this.$store.commit("setnum_rf1", 1);
      }
      if (type == this.f1[1]) {
        this.$store.commit("setnum_rf1", 2);
      }
      this.$store.commit("setrfone", type);
    },
    two: function(type) {
      if (type == this.f2[0]) {
        this.$store.commit("setnum_rf2", 1);
      }
      if (type == this.f2[1]) {
        this.$store.commit("setnum_rf2", 2);
      }
      this.$store.commit("setrftwo", type);
    },
    three: function(type) {
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
    },
    four: function(type) {
      //อนาคตอาจจะลบตรงนี้///////////////////////////////////////////////////////
      this.validateFixed = type;
      if (this.f32[0] == this.validateFixed) {
        this.humanPower = 0;
        if (this.humanPower == 0) {
          this.Vhumanpower = this.f33[1];
        }
      } else {
        this.humanPower = [];
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
          this.Vhumanpower = this.f33[1];
        } else {
          this.Vhumanpower = this.f33;
          // this.humanPower = Math.max(...this.humanPower);
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
      this.$store.commit("setrffour", type);
    },

    five: function(type) {
      if (type == this.f33[0]) {
        this.$store.commit("setnum_rf33", 1);
      }
      if (type == this.f33[1]) {
        this.$store.commit("setnum_rf33", 2);
      }
      this.$store.commit("setrffive", type);
    },
    six: function(type) {
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
    },
    cal: function() {
      let less =
        "ส่วนต่างระหว่างความกว้างตัวรถและคัสซี W/2น้อยกว่าหรือเท่ากับ890mm";
      let more = "ส่วนต่างระหว่างความกว้างตัวรถและคัสซี W/2มากกว่า890mm";
      if (this.Wch != "" && this.Wveh != "") {
        let calculate = (this.Wveh - this.Wch) / 2;
        this.num = calculate;
        if (this.num > 890) {
          this.MoreThan = false;
          this.LessEqual = true;
          this.$store.commit("setCheckWidth", more);
        } else {
          this.MoreThan = true;
          this.LessEqual = false;
          this.$store.commit("setCheckWidth", less);
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

        //f1
        if (arrFindCtype != 1) {
          instance.Vctype = instance.f1[0];
        }
        if (arrFinditype != 1) {
          instance.Vitype = instance.f1[1];
        }
        //f2
        if (arrFindBoltsNuts != 1) {
          instance.Vboltsnuts = instance.f2[0];
        }
        if (arrFindWelding != 1) {
          instance.Vwelding = instance.f2[1];
        }
        //f31
        if (arrFindstay1 != 1) {
          instance.VF31 = instance.f31;
        }
        //f311
        if (arrFindstay2 != 1) {
          instance.Vstay2 = instance.f311[0];
        }
        if (arrFindtrailer31 != 1) {
          instance.Vtrailer31 = instance.f311[1];
        }
        if (arrFindtrailer32 != 1) {
          instance.Vtrailer32 = instance.f311[2];
        }
        if (arrFindtippingVehicle != 1) {
          instance.Vtipping = instance.f311[3];
        }
        if (arrFindtrailerCoupling != 1) {
          instance.Vtrailer = instance.f311[4];
        }
        //f32
        if (arrFindfixed != 1) {
          instance.Vfixed = instance.f32[0];
        }
        if (arrFindslidable != 1) {
          instance.Vslidable = instance.f32[1];
        }
        if (arrFindfoldable != 1) {
          instance.Vfoldable = instance.f32[2];
        }
        //f33
        if (arrFindnoPower != 1) {
          instance.Vnopower = instance.f33[0];
        }
        if (arrFindhumanPower != 1) {
          instance.Vhumanpower = instance.f33[1];
        }
        //f4
        if (arrFindtubeC != 1) {
          instance.Vtube_cbeam = instance.f4[0];
        }
        if (arrFinddoubleRecht != 1) {
          instance.Vdouble_recht = instance.f4[1];
        }
        if (arrFindlip != 1) {
          instance.Vlip = instance.f4[2];
        }
        if (arrFindcircle != 1) {
          instance.Vcircle = instance.f4[3];
        }
        if (arrFindsquare != 1) {
          instance.Vsquare = instance.f4[4];
        }
        if (arrFindrecht != 1) {
          instance.Vrecht = instance.f4[5];
        }
        if (arrFindcbeam != 1) {
          instance.Vcbeam = instance.f4[6];
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
  font-size: 18px;
}
.outline {
  border-style: groove;
}
</style>