<template>
  <div>
    <b-row>
      <b-row class="col-12 col-sm-12">
        <b-col class="col-12 col-sm-12">
          <h4>ลักษณะรถยนต์ : {{car}} ({{bumper}})</h4>
          <h5>ประเภทกันชน : {{type}}</h5>
        </b-col>
      </b-row>
      <br />
      <b-row class="col-12 col-sm-12">
        <b-col class="col-12 col-sm-6">
          <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
        </b-col>
        <b-col class="col-12 col-sm-6 text-left">
          <p>F1: Attach to chassis STAY design : {{rf1}}</p>
          <p>F2: Mount to chassis Fixing method : {{rf2}}</p>
          <p>F3.1: Avoid interference Width difference △W/2 : {{rf3}}</p>
          <p>F3.2: Avoid interference SPACER design : {{rf4}}</p>
          <p>F3.3: Avoid interference Power source : {{rf5}}</p>
          <p>F4: Absorb impact energy Protective beam : {{rf6}}</p>
        </b-col>
      </b-row>
      <b-row class="col-12 col-sm-12">
        <b-col>
          <b-button>dowload</b-button>
          <br />
        </b-col>
      </b-row>
      <b-row class="col-12 col-sm-12">
        <b-col>
          <br />
        </b-col>
      </b-row>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rf1: "",
      rf2: "",
      rf3: "",
      rf4: "",
      rf5: "",
      rf6: "",
      car: "",
      bumper: "",
      type: ""
    };
  },
  created() {
    this.car = this.$store.getters.CarStyle;
    this.bumper = this.$store.getters.Bumpertype;
    this.type = this.$store.getters.RLtype;
    this.rf1 = this.$store.getters.rfone;
    this.rf2 = this.$store.getters.rftwo;
    this.rf3 = this.$store.getters.rfthree;
    this.rf4 = this.$store.getters.rffour;
    this.rf5 = this.$store.getters.rffive;
    this.rf6 = this.$store.getters.rfsix;

    console.log(
      this.car +
        "  " +
        this.bumper +
        "  " +
        this.type +
        "  " +
        this.rf1 +
        "  " +
        this.rf2 +
        "  " +
        this.rf3 +
        "  " +
        this.rf4 +
        "  " +
        this.rf5 +
        "  " +
        this.rf6
    );
  }
};
</script>
<style>
.img {
  width: 200px;
  height: 200px;
}
.line {
  border-style: ridge;
}
</style>