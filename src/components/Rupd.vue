<template>
  <div class="f1">
    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="F1: วิธีการติดต้ังเข้ากับคัสซี">
          <b-form-radio-group stacked>
            <b-form-radio name="some-radios" value="C-type" @change="one('C-type')">C-type</b-form-radio>
            <b-form-radio name="some-radios" value="I-Type" @change="one('I-type')">I-type</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="F2: วิธีการจับยึดเข้ากับคัสซี ">
          <b-form-radio-group stacked>
            <b-form-radio
              name="some-radios"
              value="Bolts-nuts"
              @change="two('Bolts-nuts')"
            >Bolts & nuts</b-form-radio>
            <b-form-radio name="some-radios" value="Welding" @change="two('Welding')">Welding</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="F3.1: รูปแบบของขายึด (Stay)  ">
          <b-form-radio-group stacked>
            <b-form-input v-model="text" type="number" placeholder="กรอกขนาดของรถ"></b-form-input>
            <br />
            <b-button @click="cal">คำนวณ</b-button>
            <div class="mt-2">Value: {{ num }}</div>
            <br />
            <b-form-radio
              name="some-radios"
              @change="three('W/2น้อยกว่าหรือเท่ากับ775mm')"
            >W/2 น้อยกว่าหรือเท่ากับ 775 mm</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="W/2มากกว่า775mm"
              @change="three('W/2มากกว่า775mm')"
            >W/2 มากกว่า 775 mm</b-form-radio>
            <b-form-radio name="some-radios" value="2-axles" @change="three('2-axles')">2-axles</b-form-radio>
            <b-form-radio name="some-radios" value="3-axles" @change="three('3-axles')">3-axles</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="Tipping-vechincle"
              @change="three('Tipping-vechincle')"
            >Tipping-vechincle</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="Trailer-coupling"
              @change="three('Trailer-coupling')"
            >Trailer-coupling</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="F3.2: การปรับได้ของขายึด (Stay)">
          <b-form-radio-group stacked>
            <b-form-radio name="some-radios" value="fixed" @change="four('Fixed')">Fixed</b-form-radio>
            <b-form-radio name="some-radios" value="slidable" @change="four('Slidable')">Slidable</b-form-radio>
            <b-form-radio name="some-radios" value="foldable" @change="four('Foldable')">Foldable</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="F3.3: การใช้แรงคนในการปรับตำแหน่ง">
          <b-form-radio-group stacked>
            <b-form-radio name="some-radios" value="No-power" @change="five('No-power')">No power</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="Human-power"
              @change="five('Human-power')"
            >Human power</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="F4:  รูปแบบชิ้นส่วนสำหรับป้องกันการมุด">
          <b-form-radio-group stacked>
            <b-form-radio
              name="some-radios"
              value="Tube+C-beam"
              @change="six('Tube+C-beam')"
            >Tube และ C-beam</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="Double-recht"
              @change="six('Double-recht')"
            >Double recht</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="LIP-channel"
              @change="six('LIP-channel')"
            >LIP channel</b-form-radio>
            <b-form-radio name="some-radios" value="Circle" @change="six('Circle')">Circle</b-form-radio>
            <b-form-radio name="some-radios" value="Square" @change="six('Square')">Square</b-form-radio>
            <b-form-radio name="some-radios" value="Recht" @change="six('Recht')">Recht</b-form-radio>
            <b-form-radio name="some-radios" value="C-beam" @change="six('C-beam')">C-beam</b-form-radio>
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