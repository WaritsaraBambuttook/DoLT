<template >
  <div class="lf">
    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="F1: Attach to chassis STAY design">
          <b-form-radio-group stacked>
            <b-form-radio name="some-radios" value="c-type" @change="one('C-type')">C-type</b-form-radio>
            <b-form-radio name="some-radios" value="i-Type" @change="one('I-type')">I-type</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="F2: Mount to chassis Fixing method">
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
        <b-form-group label="F3.1: Avoid interference STAY attachment ">
          <b-form-radio-group stacked>
            <b-form-radio name="some-radios" value="vertical" @change="three('Vertical')">Vertical</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="horizontal"
              @change="three('Horizontal')"
            >Horizontal</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="F3.2: Avoid interference SUPPORT BEAM  profile">
          <b-form-radio-group stacked>
            <b-form-radio name="some-radios" value="C-section" @change="four('C-section')">C-section</b-form-radio>
            <b-form-radio name="some-radios" value="Circle" @change="four('Circle')">Circle</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="F3.3: Avoid interference SPACER design / Power source ">
          <b-form-radio-group stacked>
            <b-form-radio name="some-radios" value="Fixed" @change="five('Fixed')">Fixed</b-form-radio>
            <b-form-radio name="some-radios" value="Foldable" @change="five('Foldable')">Foldable</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col class="col-12 col-sm-6 outline">
        <b-form-group label="F4: Absorb impact energy Protective beam">
          <b-form-radio-group stacked>
            <b-form-radio name="some-radios" value="Csection" @change="six('C-section')">C-section</b-form-radio>
            <b-form-radio
              name="some-radios"
              value="Rectangular"
              @change="six('Rectangular')"
            >Rectangular</b-form-radio>
            <b-form-radio name="some-radios" value="Wsection" @change="six('W-section')">W-section</b-form-radio>
            <b-form-radio name="some-radios" value="Circle" @change="six('Circle')">Circle</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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