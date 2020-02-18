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
          <a :href="locationFile">
            <b-button @click="GeneratePDF">download</b-button>
          </a>

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
      type: "",
      locationFile: "",
      nameFile: ""
    };
  },
  methods: {
    GeneratePDF: function() {
      //RUPD1
      if (
        this.rf1 == "C-type" &&
        this.rf2 == "Bolts-nuts" &&
        this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf4 == "Fixed" &&
        this.rf5 == "No-power" &&
        this.rf6 == "Tube+C-beam"
      ) {
        this.locationFile =
          "https://drive.google.com/u/0/uc?id=1qLXN4F8UQl9X8Bt8d84vmWfsWS321OEd&export=download";
        console.log("RUPD 1");
      }
      //RUPD2
      else if (
        this.rf1 == "C-type" &&
        this.rf2 == "Bolts-nuts" &&
        this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf4 == "Fixed" &&
        this.rf5 == "No-power" &&
        this.rf6 == "Double-recht"
      ) {
        this.locationFile =
          "https://drive.google.com/u/0/uc?id=1sVVrm8tA-c6w_zfc4szeB6i_zkoOTPIR&export=download";
        console.log("RUPD 2");
      }
      //RUPD3
      else if (
        this.rf1 == "C-type" &&
        this.rf2 == "Bolts-nuts" &&
        this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf4 == "Fixed" &&
        this.rf5 == "No-power" &&
        this.rf6 == "LIP-channel"
      ) {
        console.log("RUPD 3");
      }
      //RUPD4
      else if (
        this.rf1 == "C-type" &&
        this.rf2 == "Bolts-nuts" &&
        this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf4 == "Fixed" &&
        this.rf5 == "No-power" &&
        this.rf6 == "Circle"
      ) {
        console.log("RUPD 4");
      }
      //RUPD5
      else if (
        this.rf1 == "C-type" &&
        this.rf2 == "Bolts-nuts" &&
        this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf4 == "Fixed" &&
        this.rf5 == "No-power" &&
        this.rf6 == "Square"
      ) {
        console.log("RUPD 5");
      }
      //RUPD6
      else if (
        this.rf1 == "C-type" &&
        this.rf2 == "Bolts-nuts" &&
        this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf4 == "Fixed" &&
        this.rf5 == "No-power" &&
        this.rf6 == "Recht"
      ) {
        console.log("RUPD 6");
      }
      //RUPD7
      else if (
        this.rf1 == "C-type" &&
        this.rf2 == "Bolts-nuts" &&
        this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf4 == "Slidable" &&
        this.rf5 == "Human-power" &&
        this.rf6 == "Tube+C-beam"
      ) {
        console.log("RUPD 7");
      }
      //RUPD8
      else if (
        this.rf1 == "C-type" &&
        this.rf2 == "Bolts-nuts" &&
        this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf4 == "Slidable" &&
        this.rf5 == "Human-power" &&
        this.rf6 == "Double-recht"
      ) {
        console.log("RUPD 8");
      }
      //RUPD9
      else if (
        this.rf1 == "C-type" &&
        this.rf2 == "Bolts-nuts" &&
        this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf4 == "Slidable" &&
        this.rf5 == "Human-power" &&
        this.rf6 == "LIP-channel"
      ) {
        console.log("RUPD 9");
      }
      //RUPD10
      else if (
        this.rf1 == "C-type" &&
        this.rf2 == "Bolts-nuts" &&
        this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf4 == "Slidable" &&
        this.rf5 == "Human-power" &&
        this.rf6 == "Circle"
      ) {
        console.log("RUPD 10");
      }
      //RUPD11
      else if (
        this.rf1 == "C-type" &&
        this.rf2 == "Bolts-nuts" &&
        this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf4 == "Slidable" &&
        this.rf5 == "Human-power" &&
        this.rf6 == "Square"
      ) {
        console.log("RUPD 11");
      }
      //RUPD12
      else if (
        this.rf1 == "C-type" &&
        this.rf2 == "Bolts-nuts" &&
        this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf4 == "Slidable" &&
        this.rf5 == "Human-power" &&
        this.rf6 == "Recht"
      ) {
        console.log("RUPD 12");
      }
      // //RUPD13
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2มากกว่า775mm" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Circle-square"
      // ) {
      //   console.log("RUPD 13");
      // }
      // //RUPD14
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2มากกว่า775mm" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Double-square"
      // ) {
      //   console.log("RUPD 14");
      // }
      // //RUPD15
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2มากกว่า775mm" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "LIP"
      // ) {
      //   console.log("RUPD 15");
      // }
      // //RUPD16
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2มากกว่า775mm" &&
      //   this.rf4 == "Foldable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Circle-square"
      // ) {
      //   console.log("RUPD 16");
      // }
      // //RUPD17
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2มากกว่า775mm" &&
      //   this.rf4 == "Foldable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Double-square"
      // ) {
      //   console.log("RUPD 17");
      // }
      // //RUPD18
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2มากกว่า775mm" &&
      //   this.rf4 == "Foldable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "LIP"
      // ) {
      //   console.log("RUPD 18");
      // }
      // //RUPD19
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Circle-square"
      // ) {
      //   console.log("RUPD 19");
      // }
      // //RUPD20
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Double-square"
      // ) {
      //   console.log("RUPD 20");
      // }
      // //RUPD21
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "LIP"
      // ) {
      //   console.log("RUPD 21");
      // }
      // //RUPD22
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Circle-square"
      // ) {
      //   console.log("RUPD 22");
      // }
      // //RUPD23
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Double-square"
      // ) {
      //   console.log("RUPD 23");
      // }
      // //RUPD24
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "LIP"
      // ) {
      //   console.log("RUPD 24");
      // }
      // //RUPD25
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf4 == "Foldable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Circle-square"
      // ) {
      //   console.log("RUPD 25");
      // }
      // //RUPD26
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf4 == "Foldable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Double-square"
      // ) {
      //   console.log("RUPD 26");
      // }
      // //RUPD27
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf4 == "Foldable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "LIP"
      // ) {
      //   console.log("RUPD 27");
      // }
      // //RUPD28
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2มากกว่า775mm" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Circle-square"
      // ) {
      //   console.log("RUPD 28");
      // }
      // //RUPD29
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2มากกว่า775mm" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Double-square"
      // ) {
      //   console.log("RUPD 29");
      // }
      // //RUPD30
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2มากกว่า775mm" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "LIP"
      // ) {
      //   console.log("RUPD 30");
      // }
      // //RUPD31
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2มากกว่า775mm" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Circle-square"
      // ) {
      //   console.log("RUPD 31");
      // }
      // //RUPD32
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2มากกว่า775mm" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Double-square"
      // ) {
      //   console.log("RUPD 32");
      // }
      // //RUPD33
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2มากกว่า775mm" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "LIP"
      // ) {
      //   console.log("RUPD 33");
      // }
      // //RUPD34
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2มากกว่า775mm" &&
      //   this.rf4 == "Foldable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Circle-square"
      // ) {
      //   console.log("RUPD 34");
      // }
      // //RUPD35
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2มากกว่า775mm" &&
      //   this.rf4 == "Foldable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Double-square"
      // ) {
      //   console.log("RUPD 35");
      // }
      // //RUPD36
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.rf3 == "W/2มากกว่า775mm" &&
      //   this.rf4 == "Foldable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "LIP"
      // ) {
      //   console.log("RUPD 36");
      // }
    }
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