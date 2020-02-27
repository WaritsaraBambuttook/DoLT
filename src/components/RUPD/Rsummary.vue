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
        <b-col class="col-12 col-sm-4">
          <b-img
            class="imgRsummary"
            thumbnail
            fluid
            :src="require('../../assets/logo.png')"
            alt="Image 1"
          ></b-img>
        </b-col>
        <b-col class="col-12 col-sm-8 text-left">
          <p>1. วิธีการติดต้ังเข้ากับคัสซี : {{rf1}}</p>
          <p>2. วิธีการจับยึดเข้ากับคัสซี : {{rf2}}</p>
          <p>3. รูปแบบของขายึด (Stay) : {{width}} = {{rf3}}</p>
          <p>4. การใช้แรงคนในการปรับตำแหน่ง : {{rf4}}</p>
          <p>5. การปรับได้ของขายึด (Stay) : {{rf5}}</p>
          <p>6. รูปแบบชิ้นส่วนสำหรับป้องกันการมุด : {{rf6}}</p>
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
      nameFile: "",
      width: ""
    };
  },
  created() {
    this.width = this.$store.getters.CheckWidth;
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
        this.width +
        " " +
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
  },
  methods: {
    GeneratePDF: function() {
      //RUPD1
      if (
        this.rf1 == "C-type" &&
        this.rf2 == "ยึดด้วยโบลต์(Bolts-nuts)" &&
        this.width ==
          "ส่วนต่างระหว่างความกว้างตัวรถและคัสซี W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf3 == "ขายึดแบบที่1(stay)" &&
        this.rf4 == "แบบยึดตายตัว(Fixed)" &&
        this.rf5 == "ไม่ใช้แรงคน(No-power)" &&
        this.rf6 == "แบบผสมท่อและตัวซี(Tube+C-beam)"
      ) {
        this.locationFile =
          "https://drive.google.com/u/0/uc?id=1qLXN4F8UQl9X8Bt8d84vmWfsWS321OEd&export=download";
        console.log("RUPD 1");
      }
      //RUPD2
      else if (
        this.rf1 == "C-type" &&
        this.rf2 == "ยึดด้วยโบลต์(Bolts-nuts)" &&
        this.width ==
          "ส่วนต่างระหว่างความกว้างตัวรถและคัสซี W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf3 == "ขายึดแบบที่1(stay)" &&
        this.rf4 == "แบบยึดตายตัว(Fixed)" &&
        this.rf5 == "ไม่ใช้แรงคน(No-power)" &&
        this.rf6 == "แบบผสมสี่เหลี่ยมประกบ(Double-recht)"
      ) {
        this.locationFile =
          "https://drive.google.com/u/0/uc?id=1sVVrm8tA-c6w_zfc4szeB6i_zkoOTPIR&export=download";
        console.log("RUPD 2");
      }
      //RUPD3
      else if (
        this.rf1 == "C-type" &&
        this.rf2 == "ยึดด้วยโบลต์(Bolts-nuts)" &&
        this.width ==
          "ส่วนต่างระหว่างความกว้างตัวรถและคัสซี W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf3 == "ขายึดแบบที่1(stay)" &&
        this.rf4 == "แบบยึดตายตัว(Fixed)" &&
        this.rf5 == "ไม่ใช้แรงคน(No-power)" &&
        this.rf6 == "แบบผสมตัวซีประกบ(LIP-channel)"
      ) {
        console.log("RUPD 3");
      }
      //RUPD4
      else if (
        this.rf1 == "C-type" &&
        this.rf2 == "ยึดด้วยโบลต์(Bolts-nuts)" &&
        this.width ==
          "ส่วนต่างระหว่างความกว้างตัวรถและคัสซี W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf3 == "ขายึดแบบที่1(stay)" &&
        this.rf4 == "แบบยึดตายตัว(Fixed)" &&
        this.rf5 == "ไม่ใช้แรงคน(No-power)" &&
        this.rf6 == "แบบท่อเดี่ยว(Circle)"
      ) {
        console.log("RUPD 4");
      }
      //RUPD5
      else if (
        this.rf1 == "C-type" &&
        this.rf2 == "ยึดด้วยโบลต์(Bolts-nuts)" &&
        this.width ==
          "ส่วนต่างระหว่างความกว้างตัวรถและคัสซี W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf3 == "ขายึดแบบที่1(stay)" &&
        this.rf4 == "แบบยึดตายตัว(Fixed)" &&
        this.rf5 == "ไม่ใช้แรงคน(No-power)" &&
        this.rf6 == "แบบกล่องเดี่ยว(Square)"
      ) {
        console.log("RUPD 5");
      }
      //RUPD6
      else if (
        this.rf1 == "C-type" &&
        this.rf2 == "ยึดด้วยโบลต์(Bolts-nuts)" &&
        this.width ==
          "ส่วนต่างระหว่างความกว้างตัวรถและคัสซี W/2น้อยกว่าหรือเท่ากับ775mm" &&
        this.rf3 == "ขายึดแบบที่1(stay)" &&
        this.rf4 == "แบบยึดตายตัว(Fixed)" &&
        this.rf5 == "ไม่ใช้แรงคน(No-power)" &&
        this.rf6 == "แบบกล่องผืนผ้าเดี่ยว(Recht)"
      ) {
        console.log("RUPD 6");
      }
      // //RUPD7
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "ยึดด้วยโบลต์(Bolts-nuts)" &&
      //   this.width ==
      //     "ส่วนต่างระหว่างความกว้างตัวรถและคัสซี W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "ขายึดแบบที่1(stay)" &&
      //   this.rf4 == "แบบยึดตายตัว(Fixed)" &&
      //   this.rf5 == "ไม่ใช้แรงคน(No-power)" &&
      //   this.rf6 == "แบบกล่องผืนผ้าเดี่ยว(Recht)"
      // ) {
      //   console.log("RUPD 7");
      // }
      // //RUPD8
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Double-recht"
      // ) {
      //   console.log("RUPD 8");
      // }
      // //RUPD9
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "LIP-channel"
      // ) {
      //   console.log("RUPD 9");
      // }
      // //RUPD10
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Circle"
      // ) {
      //   console.log("RUPD 10");
      // }
      // //RUPD11
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Square"
      // ) {
      //   console.log("RUPD 11");
      // }
      // //RUPD12
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Recht"
      // ) {
      //   console.log("RUPD 12");
      // }
      // //RUPD13
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2มากกว่า775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Tube+C-beam"
      // ) {
      //   console.log("RUPD 13");
      // }
      // //RUPD14
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2มากกว่า775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Double-recht"
      // ) {
      //   console.log("RUPD 14");
      // }
      // //RUPD15
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2มากกว่า775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "LIP-channel"
      // ) {
      //   console.log("RUPD 15");
      // }
      // //RUPD16
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2มากกว่า775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Circle"
      // ) {
      //   console.log("RUPD 16");
      // }
      // //RUPD17
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2มากกว่า775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Square"
      // ) {
      //   console.log("RUPD 17");
      // }
      // //RUPD18
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2มากกว่า775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Recht"
      // ) {
      //   console.log("RUPD 18");
      // }
      // //RUPD19
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2มากกว่า775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Tube+C-beam"
      // ) {
      //   console.log("RUPD 19");
      // }
      // //RUPD20
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2มากกว่า775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Double-recht"
      // ) {
      //   console.log("RUPD 20");
      // }
      // //RUPD21
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2มากกว่า775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "LIP-channel"
      // ) {
      //   console.log("RUPD 21");
      // }
      // //RUPD22
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2มากกว่า775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Circle"
      // ) {
      //   console.log("RUPD 22");
      // }
      // //RUPD23
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2มากกว่า775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Square"
      // ) {
      //   console.log("RUPD 23");
      // }
      // //RUPD24
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2มากกว่า775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "Recht"
      // ) {
      //   console.log("RUPD 24");
      // }
      // //RUPD25
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Tube+C-beam"
      // ) {
      //   console.log("RUPD 25");
      // }
      // //RUPD26
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Double-recht"
      // ) {
      //   console.log("RUPD 26");
      // }
      // //RUPD27
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "LIP-channel"
      // ) {
      //   console.log("RUPD 27");
      // }
      // //RUPD28
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Circle"
      // ) {
      //   console.log("RUPD 28");
      // }
      // //RUPD29
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Square"
      // ) {
      //   console.log("RUPD 29");
      // }
      // //RUPD30
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Recht"
      // ) {
      //   console.log("RUPD 30");
      // }
      // //RUPD31
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Tube+C-beam"
      // ) {
      //   console.log("RUPD 31");
      // }
      // //RUPD32
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Double-recht"
      // ) {
      //   console.log("RUPD 32");
      // }
      // //RUPD33
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "LIP-channel"
      // ) {
      //   console.log("RUPD 33");
      // }
      // //RUPD34
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Circle"
      // ) {
      //   console.log("RUPD 34");
      // }
      // //RUPD35
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Square"
      // ) {
      //   console.log("RUPD 35");
      // }
      // //RUPD36
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Slidable" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Recht"
      // ) {
      //   console.log("RUPD 36");
      // }
      // //RUPD37
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "2-axle-trailer" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Tube+C-beam"
      // ) {
      //   console.log("RUPD 37");
      // }
      // //RUPD38
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "2-axle-trailer" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Double-recht"
      // ) {
      //   console.log("RUPD 38");
      // }
      // //RUPD39
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "2-axle-trailer" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "LIP-channel"
      // ) {
      //   console.log("RUPD 39");
      // }
      // //RUPD40
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "2-axle-trailer" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Circle"
      // ) {
      //   console.log("RUPD 40");
      // }
      // //RUPD41
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "2-axle-trailer" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Square"
      // ) {
      //   console.log("RUPD 41");
      // }
      // //RUPD42
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "2-axle-trailer" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Recht"
      // ) {
      //   console.log("RUPD 42");
      // }
      // //RUPD43
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "3-axle-trailer" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Tube+C-beam"
      // ) {
      //   console.log("RUPD 43");
      // }
      // //RUPD44
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "3-axle-trailer" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Double-recht"
      // ) {
      //   console.log("RUPD 44");
      // }
      // //RUPD45
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "3-axle-trailer" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "LIP-channel"
      // ) {
      //   console.log("RUPD 45");
      // }
      // //RUPD46
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "3-axle-trailer" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Circle"
      // ) {
      //   console.log("RUPD 46");
      // }
      // //RUPD47
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "3-axle-trailer" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Square"
      // ) {
      //   console.log("RUPD 47");
      // }
      // //RUPD48
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "3-axle-trailer" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Recht"
      // ) {
      //   console.log("RUPD 48");
      // }
      // //RUPD49
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Tipping-vechincle" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Tube+C-beam"
      // ) {
      //   console.log("RUPD 49");
      // }
      // //RUPD50
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Tipping-vechincle" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Double-recht"
      // ) {
      //   console.log("RUPD 50");
      // }
      // //RUPD51
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Tipping-vechincle" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "LIP-channel"
      // ) {
      //   console.log("RUPD 51");
      // }
      // //RUPD52
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Tipping-vechincle" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Circle"
      // ) {
      //   console.log("RUPD 52");
      // }
      // //RUPD53
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Tipping-vechincle" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Square"
      // ) {
      //   console.log("RUPD 53");
      // }
      // //RUPD54
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Tipping-vechincle" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Recht"
      // ) {
      //   console.log("RUPD 54");
      // }
      // //RUPD55
      // else if (
      //   this.rf1 == "I-type" &&
      //   this.rf2 == "Welding" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trapezord-stay" &&
      //   this.rf4 == "Foldable" &&
      //   this.rf5 == "Human-power" &&
      //   this.rf6 == "C-beam"
      // ) {
      //   console.log("RUPD 55");
      // }
      // //RUPD56
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trailer-coupling" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Tube+C-beam"
      // ) {
      //   console.log("RUPD 56");
      // }
      // //RUPD57
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trailer-coupling" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Double-recht"
      // ) {
      //   console.log("RUPD 57");
      // }
      // //RUPD58
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trailer-coupling" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "LIP-channel"
      // ) {
      //   console.log("RUPD 58");
      // }
      // //RUPD59
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trailer-coupling" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Circle"
      // ) {
      //   console.log("RUPD 59");
      // }
      // //RUPD60
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trailer-coupling" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Square"
      // ) {
      //   console.log("RUPD 60");
      // }
      // //RUPD61
      // else if (
      //   this.rf1 == "C-type" &&
      //   this.rf2 == "Bolts-nuts" &&
      //   this.width == "W/2น้อยกว่าหรือเท่ากับ775mm" &&
      //   this.rf3 == "Trailer-coupling" &&
      //   this.rf4 == "Fixed" &&
      //   this.rf5 == "No-power" &&
      //   this.rf6 == "Recht"
      // ) {
      //   console.log("RUPD 61");
      // }
    }
  }
};
</script>
<style>
.imgRsummary {
  width: 200px;
  height: 200px;
}
.line {
  border-style: ridge;
}
</style>