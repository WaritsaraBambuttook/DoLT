<template >
  <div class="lf">
    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="รูปแบบของคัสซี">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="Textf1 in Textf1"
              :key="Textf1.name"
              name="radio-size"
              :value="Textf1.name"
              @change="one(Textf1.name)"
              :disabled=" Textf1.name == VCtype || Textf1.name == VItype"
            >
              แบบ {{Textf1.name}}
              <b-img class="imgf1" :src="Textf1.imgf1" thumbnail fluid :alt="Textf1.name"></b-img>
            </b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="วิธีการจับยึดเข้ากับคัดซี">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="Textf2 in Textf2"
              :key="Textf2"
              name="some-radios"
              :value="Textf2"
              @change="two(Textf2)"
              :disabled="Textf2 == VBoltsNuts || Textf2 == VWelding"
            >{{Textf2}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="รูปแบบของขายึด">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="Textf31 in Textf31"
              :key="Textf31.name"
              name="some-radios"
              :value="Textf31.name"
              @change="three(Textf31.name)"
              :disabled=" Textf31.name == VVertical || Textf31.name == VHorizontal"
            >
              {{Textf31.name}}
              <b-img class="imgf1" :src="Textf31.imgf31" thumbnail fluid :alt="Textf31.name"></b-img>
            </b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="หน้าตัดของขายึด (Stay)">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="Textf32 in Textf32"
              :key="Textf32.name"
              name="some-radios"
              :value="Textf32.name"
              @change="four(Textf32.name)"
              :disabled="Textf32.name == VCsection1 || Textf32.name == VCircle1"
            >
              {{Textf32.name}}
              <b-img class="imgf1" :src="Textf32.imgf32" thumbnail fluid :alt="Textf32.name"></b-img>
            </b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="การปรับได้ของขายึด (Stay)">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="Textf33 in Textf33"
              :key="Textf33.name"
              name="some-radios"
              :value="Textf33.name"
              :disabled="Textf33.name == VFixed || Textf33.name == VFoldable"
              @change="five(Textf33.name)"
            >
              {{Textf33.name}}
              <b-img class="imgf1" :src="Textf33.imgf33" thumbnail fluid :alt="Textf33.name"></b-img>
            </b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="หน้าตัดของด้านป้องกันการมุด (Protective beam cross section)">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="Textf4 in Textf4"
              :key="Textf4.name"
              name="some-radios"
              :value="Textf4.name"
              @change="six(Textf4.name)"
              :disabled="Textf4.name == VCsection2 || Textf4.name == VRectangular || Textf4.name == VWsection || Textf4.name == VCircle2"
            >
              {{Textf4.name}}
              <b-img class="imgf1" :src="Textf4.imgf4" thumbnail fluid :alt="Textf4.name"></b-img>
            </b-form-radio>
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
      Textf1: [],
      Textf2: [],
      Textf31: [],
      Textf32: [],
      Textf33: [],
      Textf4: [],
      Ctype: [],
      Itype: [],
      BoltsNuts: [],
      Welding: [],
      Vertical: [],
      Horizontal: [],
      Csection1: [],
      Circle1: [],
      Fixed: [],
      Foldable: [],
      Csection2: [],
      Rectangular: [],
      Wsection: [],
      Circle2: [],
      VCtype: "",
      VItype: "",
      VBoltsNuts: "",
      VWelding: "",
      VVertical: "",
      VHorizontal: "",
      VCsection1: "",
      VCircle1: "",
      VFixed: "",
      VFoldable: "",
      VCsection2: "",
      VRectangular: "",
      VWsection: "",
      VCircle2: "",
      imgf1: [
        require("../../assets/imgLUPD/ctype.png"),
        require("../../assets/imgLUPD/I-type.png")
      ],
      imgf31: [
        require("../../assets/imgLUPD/vertical.png"),
        require("../../assets/imgLUPD/horizontal.png")
      ],
      imgf32: [
        require("../../assets/imgLUPD/C.png"),
        require("../../assets/imgLUPD/Circle.png")
      ],
      imgf33: [
        require("../../assets/imgLUPD/fixed-LUPD.png"),
        require("../../assets/imgLUPD/foldable.png")
      ],
      imgf4: [
        require("../../assets/imgLUPD/C.png"),
        require("../../assets/imgLUPD/rectangular.png"),
        require("../../assets/imgLUPD/W-section.png"),
        require("../../assets/imgLUPD/Circle.png")
      ]
    };
  },
  methods: {
    one: function(type) {
      console.log(type);

      //เก็บเลขเดียว
      this.$store.commit("setlfone", type);
      this.$store.commit("setnum_lf1", 1);
      // if (type == this.Textf1[0]) {
      //   this.$store.commit("setnum_lf1", 1);
      // }
      // if (type == this.Textf1[1]) {
      //   this.$store.commit("setnum_lf1", 2);
      // }
    },
    two: function(type) {
      console.log(type);
      this.$store.commit("setlftwo", type);
      if (type == this.Textf2[0]) {
        this.$store.commit("setnum_lf2", 1);
      }
      if (type == this.Textf2[1]) {
        this.$store.commit("setnum_lf2", 2);
      }
    },
    three: function(type) {
      console.log(type);
      this.$store.commit("setlfthree", type);
      if (type == this.Textf31[0].name) {
        this.$store.commit("setnum_lf31", 1);
      }
      if (type == this.Textf31[1].name) {
        this.$store.commit("setnum_lf31", 2);
      }
    },
    four: function(type) {
      console.log(type);
      this.$store.commit("setlffour", type);
      if (type == this.Textf32[0].name) {
        this.$store.commit("setnum_lf32", 1);
      }
      if (type == this.Textf32[1].name) {
        this.$store.commit("setnum_lf32", 2);
      }
    },
    five: function(type) {
      console.log(type);
      this.$store.commit("setlffive", type);
      if (type == this.Textf33[0].name) {
        this.$store.commit("setnum_lf33", 1);
      }
      if (type == this.Textf33[1].name) {
        this.$store.commit("setnum_lf33", 2);
      }
    },
    six: function(type) {
      console.log(type);
      this.$store.commit("setlfsix", type);
      if (type == this.Textf4[0].name) {
        this.$store.commit("setnum_lf4", 1);
      }
      if (type == this.Textf4[1].name) {
        this.$store.commit("setnum_lf4", 2);
      }
      if (type == this.Textf4[2].name) {
        this.$store.commit("setnum_lf4", 3);
      }
      if (type == this.Textf4[3].name) {
        this.$store.commit("setnum_lf4", 4);
      }
    }
  },
  mounted() {
    let instance = this;
    const url =
      "https://sheets.googleapis.com//v4/spreadsheets/19DJnQk5pirckQRHjaswBlVJxpY0AUzzkKvTAIZvV2iA/values/A1:P28/?key=AIzaSyBdDxNQXwJyowwndJy54wQoynwFvQJiK_g";
    axios.get(url).then(function(res) {
      let data = res.data.values;
      //f1
      for (let i = 1; i < 3; i++) {
        instance.Textf1.push({
          name: data[1][i],
          imgf1: instance.imgf1[i - 1]
        });
      }

      //f2
      for (let i = 3; i <= 4; i++) {
        instance.Textf2.push(data[1][i]);
      }
      //f31
      for (let i = 5; i <= 6; i++) {
        instance.Textf31.push({
          name: data[1][i],
          imgf31: instance.imgf31[i - 5]
        });
      }
      //f32
      for (let i = 7; i <= 8; i++) {
        instance.Textf32.push({
          name: data[1][i],
          imgf32: instance.imgf32[i - 7]
        });
      }
      //f33
      for (let i = 9; i <= 10; i++) {
        instance.Textf33.push({
          name: data[1][i],
          imgf33: instance.imgf33[i - 9]
        });
      }
      //f4
      for (let i = 11; i <= 14; i++) {
        instance.Textf4.push({
          name: data[1][i],
          imgf4: instance.imgf4[i - 11]
        });
      }

      for (let i = 2; i < data.length; i++) {
        instance.Ctype.push(data[i][1]);
        instance.Itype.push(data[i][2]);

        instance.BoltsNuts.push(data[i][3]);
        instance.Welding.push(data[i][4]);

        instance.Vertical.push(data[i][5]);
        instance.Horizontal.push(data[i][6]);

        instance.Csection1.push(data[i][7]);
        instance.Circle1.push(data[i][8]);

        instance.Fixed.push(data[i][9]);
        instance.Foldable.push(data[i][10]);

        instance.Csection2.push(data[i][11]);
        instance.Rectangular.push(data[i][12]);
        instance.Wsection.push(data[i][13]);
        instance.Circle2.push(data[i][14]);
      }

      //validate
      const arrCtype = instance.Ctype.find(el => el > 0);
      const arrItype = instance.Itype.find(el => el > 0);
      const arrBoltsNuts = instance.BoltsNuts.find(el => el > 0);
      const arrWelding = instance.Welding.find(el => el > 0);
      const arrVertical = instance.Vertical.find(el => el > 0);
      const arrHorizontal = instance.Horizontal.find(el => el > 0);
      const arrCsection1 = instance.Csection1.find(el => el > 0);
      const arrCircle1 = instance.Circle1.find(el => el > 0);
      const arrFixed = instance.Fixed.find(el => el > 0);
      const arrFoldable = instance.Foldable.find(el => el > 0);
      const arrCsection2 = instance.Csection2.find(el => el > 0);
      const arrRectangular = instance.Rectangular.find(el => el > 0);
      const arrWsection = instance.Wsection.find(el => el > 0);
      const arrCircle2 = instance.Circle2.find(el => el > 0);

      if (arrCtype != 1) {
        instance.VCtype = instance.Textf1[0].name;
      }
      if (arrItype != 1) {
        instance.VItype = instance.Textf1[1].name;
      }
      if (arrBoltsNuts != 1) {
        instance.VBoltsNuts = instance.Textf2[0];
      }
      if (arrWelding != 1) {
        instance.VWelding = instance.Textf2[1];
      }
      if (arrVertical != 1) {
        instance.VVertical = instance.Textf31[0].name;
      }
      if (arrHorizontal != 1) {
        instance.Horizontal = instance.Textf31[1].name;
      }
      if (arrCsection1 != 1) {
        instance.VCsection1 = instance.Textf32[0].name;
      }
      if (arrCircle1 != 1) {
        instance.VCircle1 = instance.Textf32[1].name;
      }
      if (arrFixed != 1) {
        instance.VFixed = instance.Textf33[0].name;
      }
      if (arrFoldable != 1) {
        instance.VFoldable = instance.Textf33[1].name;
      }
      if (arrCsection2 != 1) {
        instance.VCsection2 = instance.Textf4[0].name;
      }
      if (arrRectangular != 1) {
        instance.VRectangular = instance.Textf4[1].name;
      }
      if (arrWsection != 1) {
        instance.VWsection = instance.Textf4[2].name;
      }
      if (arrCircle2 != 1) {
        instance.VCircle2 = instance.Textf4[3].name;
      }
    });
  }
};
</script>
<style>
.lf {
  text-align: start;
  font-size: 18px;
}
.outline {
  border-style: groove;
}
.imgf1 {
  width: auto;
  height: 35px;
}
</style>