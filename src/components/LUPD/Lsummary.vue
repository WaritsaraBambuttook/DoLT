<template>
  <div>
    <br />
    <b-row>
      <b-row class="col-12 col-sm-12">
        <b-col class="col-12 col-sm-12">
          <h4>ลักษณะรถยนต์ : {{car}} ({{bumper}})</h4>
          <h5>ประเภทกันชน : {{type}}</h5>
        </b-col>
      </b-row>
      <br />
      <b-row class="col-12 col-sm-12">
        <b-col class="col-12 col-sm-5">
          <b-img class="img" thumbnail fluid :src="require('../../assets/logo.png')" alt="Image 1"></b-img>
        </b-col>
        <b-col class="col-12 col-sm-7 text-left">
          <p>F1: Attach to chassis STAY design : {{lf1}}</p>
          <p>F2: Mount to chassis Fixing method : {{lf2}}</p>
          <p>F3.1: Avoid interference STAY attachment : {{lf3}}</p>
          <p>F3.2: Avoid interference SUPPORT BEAM profile : {{lf4}}</p>
          <p>F3.3: Avoid interference SPACER design / Power source : {{lf5}}</p>
          <p>F4: Absorb impact energy Protective beam : {{lf6}}</p>
        </b-col>
      </b-row>
      <br />
      <b-row class="col-12 col-sm-12">
        <b-col>
          <b-button @click="GeneratePDF">dowload</b-button>
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
      lf1: "",
      lf2: "",
      lf3: "",
      lf4: "",
      lf5: "",
      lf6: "",
      car: "",
      bumper: "",
      type: ""
    };
  },
  methods: {
    GeneratePDF: function() {
      //LUPD 1
      if (
        this.lf1 == "C-type" &&
        this.lf2 == "Bolts-nuts" &&
        this.lf3 == "Vertical" &&
        this.lf4 == "C-section" &&
        this.lf5 == "Fixed" &&
        this.lf6 == "C-section"
      ) {
        console.log("LUPD 1");
      }
    }
  },
  created() {
    this.car = this.$store.getters.CarStyle;
    this.bumper = this.$store.getters.Bumpertype;
    this.type = this.$store.getters.RLtype;
    this.lf1 = this.$store.getters.lfone;
    this.lf2 = this.$store.getters.lftwo;
    this.lf3 = this.$store.getters.lfthree;
    this.lf4 = this.$store.getters.lffour;
    this.lf5 = this.$store.getters.lffive;
    this.lf6 = this.$store.getters.lfsix;

    console.log(
      this.car +
        "  " +
        this.bumper +
        "  " +
        this.type +
        "  " +
        this.lf1 +
        "  " +
        this.lf2 +
        "  " +
        this.lf3 +
        "  " +
        this.lf4 +
        "  " +
        this.lf5 +
        "  " +
        this.lf6
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