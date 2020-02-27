<template>
  <div class="f1">
    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="1. วิธีการติดต้ังเข้ากับคัสซี">
          <b-form-radio-group stacked>
            <b-form-radio name="some-radios" value="C-type" @change="one('C-type')">แบบ C-type</b-form-radio>
            <b-form-radio name="some-radios" value="I-Type" @change="one('I-type')">แบบ I-type</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="2. วิธีการจับยึดเข้ากับคัสซี ">
          <b-form-radio-group stacked>
            <b-form-radio
              name="some-radios"
              value="Bolts-nuts"
              @change="two('ยึดด้วยโบลต์(Bolts-nuts)')"
            >ยึดด้วยโบลต์ (Bolts-nuts)</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="Welding"
              @change="two('ยึดด้วยการเชื่อม(Welding)')"
            >ยึดด้วยการเชื่อม (Welding)</b-form-radio>
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
              <h5>ส่วนต่างระหว่างความกว้างตัวรถและคัสซี W/2 มากกว่า 775 mm</h5>
              <b-form-radio
                name="some-radios"
                value="Trapezord"
                @change="three('ขายึดแบบที่1(stay)')"
                :disabled="MoreThan"
              >ขายึดแบบที่ 1(Trapezord-stay)</b-form-radio>
            </b-col>
            <br />

            <b-col>
              <h5>ส่วนต่างระหว่างความกว้างตัวรถและคัสซี W/2 น้อยกว่าหรือเท่ากับ 775mm</h5>
              <b-form-radio
                name="some-radios"
                value="Trapezord-stay"
                @change="three('ขายึดแบบที่1(stay)')"
                :disabled="LessEqual"
              >ขายึดแบบที่ 1 (Trapezord-stay)</b-form-radio>
              <b-form-radio
                name="some-radios"
                value="2-axles"
                @change="three('ขายึดสำหรับเทรลเลอร์3เพลา แบบที่1')"
                :disabled="LessEqual"
              >ขายึดสำหรับเทรลเลอร์ 3 เพลา แบบที่ 1</b-form-radio>
              <b-form-radio
                name="some-radios"
                value="3-axles"
                @change="three('ขายึดสำหรับเทรลเลอร์3เพลา แบบที่2')"
                :disabled="LessEqual"
              >ขายึดสำหรับเทรลเลอร์ 3 เพลา แบบที่ 2</b-form-radio>
              <b-form-radio
                name="some-radios"
                value="Tipping-vechincle"
                @change="three('ขายึดสำหรับรถดั๊มพ์(Tipping vehicle)')"
                :disabled="LessEqual"
              >ขายึดสำหรับรถดั๊มพ์ (Tipping vehicle)</b-form-radio>
              <b-form-radio
                name="some-radios"
                value="Trailer-coupling"
                @change="three('สำหรับรถที่มีข้อต่อพ่วง(trailer coupling)')"
                :disabled="LessEqual"
              >สำหรับรถที่มีข้อต่อพ่วง (trailer coupling)</b-form-radio>
            </b-col>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="4.  รูปแบบชิ้นส่วนสำหรับป้องกันการมุด">
          <b-form-radio-group stacked>
            <b-form-radio
              name="some-radios"
              value="Tube+C-beam"
              @change="six('แบบผสมท่อและตัวซี(Tube+C-beam)')"
            >แบบผสมท่อและตัวซี (Tube และ C-beam)</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="Double-recht"
              @change="six('แบบผสมสี่เหลี่ยมประกบ(Double-recht)')"
            >แบบผสมสี่เหลี่ยมประกบ (Double recht)</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="LIP-channel"
              @change="six('แบบผสมตัวซีประกบ(LIP-channel)')"
            >แบบผสมตัวซีประกบ (LIP channel)</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="Circle"
              @change="six('แบบท่อเดี่ยว(Circle)')"
            >แบบท่อเดี่ยว (Circle)</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="Square"
              @change="six('แบบกล่องเดี่ยว(Square)')"
            >แบบกล่องเดี่ยว (Square)</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="Recht"
              @change="six('แบบกล่องผืนผ้าเดี่ยว(Recht)')"
            >แบบกล่องผืนผ้าเดี่ยว (Recht)</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="C-beam"
              @change="six('แบบตัวซีเดี่ยว(C-beam)')"
            >แบบตัวซีเดี่ยว (C-beam)</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="5. การปรับได้ของขายึด (Stay)">
          <b-form-radio-group stacked>
            <b-form-radio
              name="some-radios"
              value="fixed"
              @change="four('แบบยึดตายตัว(Fixed)')"
            >แบบยึดตายตัว (Fixed)</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="slidable"
              @change="four('แบบเลื่อนได้(Slidable)')"
            >แบบเลื่อนได้ (Slidable)</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="foldable"
              @change="four('แบบพับได้(Foldable)')"
            >แบบพับได้ (Foldable)</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="6. การใช้แรงคนในการปรับตำแหน่ง">
          <b-form-radio-group stacked>
            <b-form-radio
              name="some-radios"
              value="No-power"
              @change="five('ไม่ใช้แรงคน(No-power)')"
            >ไม่ใช้แรงคน (No power)</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="Human-power"
              @change="five('ใช้แรงคน(Human-power)')"
            >ใช้แรงคน (Human power)</b-form-radio>
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
      let less =
        "ส่วนต่างระหว่างความกว้างตัวรถและคัสซี W/2น้อยกว่าหรือเท่ากับ775mm";
      let more = "ส่วนต่างระหว่างความกว้างตัวรถและคัสซี W/2มากกว่า775mm";
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