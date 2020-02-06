<template>
  <div>
    <b-row>
      <b-col>
        <h3>ระบบการสั่งจองกันชน</h3>
      </b-col>
    </b-row>
    <br />
    <br />
    <b-row>
      <b-col>
        <vue-good-wizard
          :steps="steps"
          :onNext="nextClicked"
          :onBack="backClicked"
          finalStepLabel="final"
        >
          <div slot="page1">
            <Order />
          </div>
          <div slot="page2">
            <bumberType />
          </div>
          <div slot="page3">
            <RLtype />
          </div>
          <div slot="page4">
            <component v-bind:is="checkRLtype" />
          </div>
          <div slot="page5">
            <component v-bind:is="summary" />
          </div>
        </vue-good-wizard>
      </b-col>
    </b-row>
  </div>
</template>
 
<script>
// import Stepper from "vuejs-stepper";
import Order from "./Order";
import bumberType from "./Bumpertype";
import RLtype from "./RLtype";
import RUPD from "./Rupd";
import LUPD from "./Lupd";
import Rsummary from "./Rsummary";
import Lsummary from "./Lsummary";
export default {
  components: { Order, bumberType, RLtype, RUPD, LUPD, Rsummary, Lsummary },
  data() {
    return {
      steps: [
        {
          label: "1.ลักษณะของรถ",
          slot: "page1"
        },
        {
          label: "2.ประเภทรถย่อย",
          slot: "page2"
        },
        {
          label: "3.ประเภทกันชน",
          slot: "page3"
        },
        {
          label: "4.ฟังก์ชั่นกันชน",
          slot: "page4"
        },
        {
          label: "5.สรุปผล",
          slot: "page5",
          options: {
            nextDisabled: true // control whether next is disabled or not
          }
        }
      ],
      checkRLtype: "",
      summary: ""
    };
  },
  methods: {
    nextClicked(currentPage) {
      console.log("next clicked", currentPage);
      let carStyle = this.$store.getters.CarStyle;
      let Bumpertype = this.$store.getters.Bumpertype;
      let RLtype = this.$store.getters.RLtype;
      this.checkRLtype = RLtype;
      console.log("checkRLtype :" + this.checkRLtype);

      let rf1 = this.$store.getters.rfone;
      let rf2 = this.$store.getters.rftwo;
      let rf3 = this.$store.getters.rfthree;
      let rf4 = this.$store.getters.rffour;
      let rf5 = this.$store.getters.rffive;
      let rf6 = this.$store.getters.rfsix;

      let lf1 = this.$store.getters.lfone;
      let lf2 = this.$store.getters.lftwo;
      let lf3 = this.$store.getters.lfthree;
      let lf4 = this.$store.getters.lffour;
      let lf5 = this.$store.getters.lffive;
      let lf6 = this.$store.getters.lfsix;
      //check car style
      if (currentPage == 0) {
        if (carStyle == "") {
          alert("เลือก 'ลักษณะรถยนต์' ใหม่อีกครั้ง");
          return false;
        } else {
          return true; //return false if you want to prevent moving to next page
        }

        //check Bumper type
      } else if (currentPage == 1) {
        if (Bumpertype == "") {
          alert("เลือก 'ประเภทรถยนต์ย่อย' ใหม่อีกครั้ง");
          return false;
        } else {
          return true; //return false if you want to prevent moving to next page
        }
      }

      //check RL type
      else if (currentPage == 2) {
        if (RLtype == "") {
          alert("เลือก 'ประเภทกันชน' ใหม่อีกครั้ง");
          return false;
        } else {
          return true;
        }
      }
      //check rf
      else if (currentPage == 3) {
        if (RLtype == "RUPD") {
          console.log("9999999");

          if (
            rf1 != "" &&
            rf2 != "" &&
            rf3 != "" &&
            rf4 != "" &&
            rf5 != "" &&
            rf6 != ""
          ) {
            this.summary = "Rsummary";
            return true;
          } else {
            alert("เลือก 'คุณสมบัติของกันชนท้าย' ใหม่อีกครั้งและครบถ้วน");
            return false;
          }
        } else if (RLtype == "LUPD") {
          console.log("lllllllllllllll");
          if (
            lf1 != "" &&
            lf2 != "" &&
            lf3 != "" &&
            lf4 != "" &&
            lf5 != "" &&
            lf6 != ""
          ) {
            this.summary = "Lsummary";
            return true;
          } else {
            alert("เลือก 'คุณสมบัติของกันชนด้านข้าง' ใหม่อีกครั้งและครบถ้วน");

            return false;
          }
        }
      }
    },
    backClicked(currentPage) {
      if (currentPage == 1) {
        this.$store.commit("setCarStyle", "");
        console.log("click back " + this.$store.getters.CarStyle);
      } else if (currentPage == 2) {
        this.$store.commit("setBumpertype", "");
        console.log("click back " + this.$store.getters.Bumpertype);
      } else if (currentPage == 3) {
        this.$store.commit("setRLtype", "");
        console.log("click back " + this.$store.getters.RLtype);
      } else if (currentPage == 4) {
        //rlup
        this.$store.commit("setrfone", "");
        this.$store.commit("setrftwo", "");
        this.$store.commit("setrfthree", "");
        this.$store.commit("setrffour", "");
        this.$store.commit("setrffive", "");
        this.$store.commit("setrfsix", "");

        //lupd
        this.$store.commit("setlfone", "");
        this.$store.commit("setlftwo", "");
        this.$store.commit("setlfthree", "");
        this.$store.commit("setlffour", "");
        this.$store.commit("setlffive", "");
        this.$store.commit("setlfsix", "");
      }
      console.log("back clicked", currentPage);
      return true; //return false if you want to prevent moving to previous page
    }
  }
};
</script> 