<template >
  <div class="lf">
    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="วิธีการติดตั้งเข้ากับคัตซี">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="Textf1 in Textf1"
              :key="Textf1"
              name="some-radios"
              :value="Textf1"
              @change="one(Textf1)"
              :disabled=" Textf1 == VCtype || Textf1 == VItype"
            >แบบ {{Textf1}}</b-form-radio>
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
              :key="Textf31"
              name="some-radios"
              :value="Textf31"
              @change="three(Textf31)"
              :disabled=" Textf31 == VVertical || Textf31 == VHorizontal"
            >{{Textf31}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="การปรับได้ของขายึด">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="Textf32 in Textf32"
              :key="Textf32"
              name="some-radios"
              :value="Textf32"
              @change="four(Textf32)"
              :disabled="Textf32 == VCsection1 || Textf32 == VCircle1"
            >{{Textf32}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="การใช้แรงงานคนในการปรับตำปหน่ง">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="Textf33 in Textf33"
              :key="Textf33"
              name="some-radios"
              :value="Textf33"
              :disabled="Textf33 == VFixed || Textf33 == VFoldable"
              @change="five(Textf33)"
            >{{Textf33}}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="รูปแบบชิ้นส่วนสำหรับป้องกันการมุด">
          <b-form-radio-group stacked>
            <b-form-radio
              v-for="Textf4 in Textf4"
              :key="Textf4"
              name="some-radios"
              :value="Textf4"
              @change="six(Textf4)"
              :disabled="Textf4 == VCsection2 || Textf4 == VRectangular || Textf4 == VWsection || Textf4 == VCircle2"
            >{{Textf4}}</b-form-radio>
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
      VCircle2: ""
    };
  },
  methods: {
    one: function(type) {
      this.$store.commit("setlfone", type);
      if (type == this.Textf1[0]) {
        this.$store.commit("setnum_lf1", 1);
      }
      if (type == this.Textf1[1]) {
        this.$store.commit("setnum_lf1", 2);
      }
    },
    two: function(type) {
      this.$store.commit("setlftwo", type);
      if (type == this.Textf2[0]) {
        this.$store.commit("setnum_lf2", 1);
      }
      if (type == this.Textf2[1]) {
        this.$store.commit("setnum_lf2", 2);
      }
    },
    three: function(type) {
      this.$store.commit("setlfthree", type);
      if (type == this.Textf31[0]) {
        this.$store.commit("setnum_lf31", 1);
      }
      if (type == this.Textf31[1]) {
        this.$store.commit("setnum_lf31", 2);
      }
    },
    four: function(type) {
      this.$store.commit("setlffour", type);
      if (type == this.Textf32[0]) {
        this.$store.commit("setnum_lf32", 1);
      }
      if (type == this.Textf32[1]) {
        this.$store.commit("setnum_lf32", 2);
      }
    },
    five: function(type) {
      this.$store.commit("setlffive", type);
      if (type == this.Textf33[0]) {
        this.$store.commit("setnum_lf33", 1);
      }
      if (type == this.Textf33[1]) {
        this.$store.commit("setnum_lf33", 2);
      }
    },
    six: function(type) {
      this.$store.commit("setlfsix", type);
      if (type == this.Textf4[0]) {
        this.$store.commit("setnum_lf4", 1);
      }
      if (type == this.Textf4[1]) {
        this.$store.commit("setnum_lf4", 2);
      }
      if (type == this.Textf4[2]) {
        this.$store.commit("setnum_lf4", 3);
      }
      if (type == this.Textf4[3]) {
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
        instance.Textf1.push(data[1][i]);
      }
      //f2
      for (let i = 3; i <= 4; i++) {
        instance.Textf2.push(data[1][i]);
      }
      //f31
      for (let i = 5; i <= 6; i++) {
        instance.Textf31.push(data[1][i]);
      }
      //f32
      for (let i = 7; i <= 8; i++) {
        instance.Textf32.push(data[1][i]);
      }
      //f33
      for (let i = 9; i <= 10; i++) {
        instance.Textf33.push(data[1][i]);
      }
      //f4
      for (let i = 11; i <= 14; i++) {
        instance.Textf4.push(data[1][i]);
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
        instance.VCtype = instance.Textf1[0];
      }
      if (arrItype != 1) {
        instance.VItype = instance.Textf1[1];
      }
      if (arrBoltsNuts != 1) {
        instance.VBoltsNuts = instance.Textf2[0];
      }
      if (arrWelding != 1) {
        instance.VWelding = instance.Textf2[1];
      }
      if (arrVertical != 1) {
        instance.VVertical = instance.Textf31[0];
      }
      if (arrHorizontal != 1) {
        instance.Horizontal = instance.Textf31[1];
      }
      if (arrCsection1 != 1) {
        instance.VCsection1 = instance.Textf32[0];
      }
      if (arrCircle1 != 1) {
        instance.VCircle1 = instance.Textf32[1];
      }
      if (arrFixed != 1) {
        instance.VFixed = instance.Textf33[0];
      }
      if (arrFoldable != 1) {
        instance.VFoldable = instance.Textf33[1];
      }
      if (arrCsection2 != 1) {
        instance.VCsection2 = instance.Textf4[0];
      }
      if (arrRectangular != 1) {
        instance.VRectangular = instance.Textf4[1];
      }
      if (arrWsection != 1) {
        instance.VWsection = instance.Textf4[2];
      }
      if (arrCircle2 != 1) {
        instance.VCircle2 = instance.Textf4[3];
      }
    });
  }
};
</script>
<style>
.lf {
  text-align: start;
}
.outline {
  border-style: groove;
}
</style>