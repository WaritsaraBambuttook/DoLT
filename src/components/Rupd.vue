<template>
  <div class="f1">
    <!-- <b-row class="text-center">
      <b-col>
        <h3>เลือกฟังก็ชันของรถ</h3>
      </b-col>
    </b-row>
    <br />-->
    <!-- <br /> -->
    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="F1: Attach to chassis STAY design">
          <b-form-radio-group stacked>
            <b-form-radio name="some-radios" value="c-type" @change="one('ctype')">C-type</b-form-radio>
            <b-form-radio name="some-radios" value="i-Type" @change="one('itype')">I-type</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="F2: Mount to chassis Fixing method">
          <b-form-radio-group stacked>
            <b-form-radio
              name="some-radios"
              value="Bolts-nuts"
              @change="two('Boltsnuts')"
            >Bolts & nuts</b-form-radio>
            <b-form-radio name="some-radios" value="Welding" @change="two('Welding')">Welding</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="F3.1: Avoid interference Width difference △W/2 ">
          <b-form-radio-group stacked>
            <b-form-input v-model="text" type="number" placeholder="กรอกขนาดของรถ"></b-form-input>
            <br />
            <b-button @click="cal">คำนวณ</b-button>
            <div class="mt-2">Value: {{ num }}</div>
            <br />
            <b-form-radio
              name="some-radios"
              id="one"
              value="Bolts-nuts"
              @change="three('over')"
            >W/2 น้อยกว่าหรือเท่ากับ 775 mm</b-form-radio>
            <b-form-radio
              name="some-radios"
              id="two"
              value="Welding"
              @change="three('Lessequal')"
            >W/2 มากกว่า 775 mm</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="F3.2: Avoid interference SPACER design">
          <b-form-radio-group stacked>
            <b-form-radio name="some-radios" value="fixed" @change="four('fixed')">fixed</b-form-radio>
            <b-form-radio name="some-radios" value="slidable" @change="four('slidable')">slidable</b-form-radio>
            <b-form-radio name="some-radios" value="foldable" @change="four('foldable')">foldable</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="F3.3: Avoid interference Power source">
          <b-form-radio-group stacked>
            <b-form-radio
              name="some-radios"
              value="nopower"
              @change="five('nopower')"
            >foldable>no power</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="humanpower"
              @change="five('humanpower')"
            >foldable>human power</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="F4: Absorb impact energy Protective beam">
          <b-form-radio-group stacked>
            <b-form-radio
              name="some-radios"
              value="Circlesquare"
              @change="six('Circlesquare')"
            >Circle Square</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="Doublesquare"
              @change="six('Doublesquare')"
            >Double squarer</b-form-radio>
            <b-form-radio name="some-radios" value="LIP" @change="six('LIP')">LIP channel</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
      text: "",
      num: ""
    };
  },
  methods: {
    one: function(type) {
      console.log("click 1. " + type);
      this.$store.commit("setrfone", type);
      console.log("getter 1 : " + this.$store.getters.rfone);
    },
    two: function(type) {
      console.log("click 2. " + type);
      this.$store.commit("setrftwo", type);
      console.log("getter 2: " + this.$store.getters.rftwo);
    },
    three: function(type) {
      console.log("click 3 : " + type);
      this.$store.commit("setrfthree", type);
      console.log("getter 3 : " + this.$store.getters.rfthree);
    },
    four: function(type) {
      console.log("click 4 : " + type);
      this.$store.commit("setrffour", type);
      console.log("getter 4 : " + this.$store.getters.rffour);
    },
    five: function(type) {
      console.log("click 5 : " + type);
      this.$store.commit("setrffive", type);
      console.log("getter 5 : " + this.$store.getters.rffive);
    },
    six: function(type) {
      console.log("click 6 : " + type);
      this.$store.commit("setrfsix", type);
      console.log("getter 6 : " + this.$store.getters.rfsix);
    },

    cal: function() {
      let calculate = this.text / 2;
      this.num = calculate;
      console.log("cal :" + this.num);
    }
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