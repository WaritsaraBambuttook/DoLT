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
            <b-col>
              <b-form-input v-model="Wveh" type="number" placeholder="ความกว้างตัวรถ" min="0"></b-form-input>
              <b-form-input v-model="Wch" type="number" placeholder="ความกว้างคัตซี" min="0"></b-form-input>
            </b-col>
            <br />
            <b-col>
              <b-button @click="cal">คำนวณ</b-button>
              <div class="mt-2">Value: {{ num }}</div>
            </b-col>
            <br />

            <b-col>
              <h5>W/2 น้อยกว่าหรือเท่ากับ 775 mm</h5>
              <b-form-radio
                name="some-radios"
                value="Trapezord"
                @change="three('Trapezord-stay')"
                :disabled="LessEqual"
              >Trapezord-stay</b-form-radio>
            </b-col>
            <br />

            <b-col>
              <h5>W/2 มากกว่า 775mm</h5>
              <b-form-radio
                name="some-radios"
                value="Trapezord-stay"
                @change="three('Trapezord-stay')"
                :disabled="MoreThan"
              >Trapezord-stay</b-form-radio>
              <b-form-radio
                name="some-radios"
                value="2-axles"
                @change="three('2-axle-trailer')"
                :disabled="MoreThan"
              >2-axle-trailer</b-form-radio>
              <b-form-radio
                name="some-radios"
                value="3-axles"
                @change="three('3-axle-trailer')"
                :disabled="MoreThan"
              >3-axle-trailer</b-form-radio>
              <b-form-radio
                name="some-radios"
                value="Tipping-vechincle"
                @change="three('Tipping-vechincle')"
                :disabled="MoreThan"
              >Tipping-vechincle</b-form-radio>
              <b-form-radio
                name="some-radios"
                value="Trailer-coupling"
                @change="three('Trailer-coupling')"
                :disabled="MoreThan"
              >Trailer-coupling</b-form-radio>
            </b-col>
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
        <b-form-group label="F3.2: การปรับได้ของขายึด (Stay)">
          <b-form-radio-group stacked>
            <b-form-radio name="some-radios" value="fixed" @change="four('Fixed')">Fixed</b-form-radio>
            <b-form-radio name="some-radios" value="slidable" @change="four('Slidable')">Slidable</b-form-radio>
            <b-form-radio name="some-radios" value="foldable" @change="four('Foldable')">Foldable</b-form-radio>
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
      Wveh: "",
      Wch: "",
      num: "",
      LessEqual: true,
      MoreThan: true
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
      let less = "W/2น้อยกว่าหรือเท่ากับ775mm";
      let more = "W/2มากกว่า775mm";
      if (this.Wch != "" && this.Wveh != "") {
        let calculate = (this.Wveh - this.Wch) / 2;
        this.num = calculate;
        console.log("cal :" + this.num);
        if (this.num > 775) {
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