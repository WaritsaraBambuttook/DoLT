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
      Textf4: []
    };
  },
  methods: {
    one: function(type) {
      console.log("click 1. " + type);
      this.$store.commit("setlfone", type);
      console.log("getter 1 : " + this.$store.getters.lfone);
    },
    two: function(type) {
      console.log("click 2. " + type);
      this.$store.commit("setlftwo", type);
      console.log("getter 2: " + this.$store.getters.lftwo);
    },
    three: function(type) {
      console.log("click 3 : " + type);
      this.$store.commit("setlfthree", type);
      console.log("getter 3 : " + this.$store.getters.lfthree);
    },
    four: function(type) {
      console.log("click 4 : " + type);
      this.$store.commit("setlffour", type);
      console.log("getter 4 : " + this.$store.getters.lffour);
    },
    five: function(type) {
      console.log("click 5 : " + type);
      this.$store.commit("setlffive", type);
      console.log("getter 5 : " + this.$store.getters.lffive);
    },
    six: function(type) {
      console.log("click 6 : " + type);
      this.$store.commit("setlfsix", type);
      console.log("getter 6 : " + this.$store.getters.lfsix);
    }
  },
  mounted() {
    let instance = this;
    const url =
      "https://sheets.googleapis.com//v4/spreadsheets/19DJnQk5pirckQRHjaswBlVJxpY0AUzzkKvTAIZvV2iA/values/A1:O28/?key=AIzaSyBdDxNQXwJyowwndJy54wQoynwFvQJiK_g";
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