<template>
  <div>
    <vue-good-wizard :steps="steps" :onNext="nextClicked" :onBack="backClicked">
      <div slot="page1">
        <Order />
      </div>
      <div slot="page2">
        <bumberType />
      </div>
      <div slot="page3">
        <h4>Step 3</h4>
        <p>This is step 3</p>
      </div>
      <div slot="page4">
        <h4>Step 4</h4>
        <p>This is step 4</p>
      </div>
    </vue-good-wizard>
  </div>
</template>
 
<script>
// import Stepper from "vuejs-stepper";
import Order from "./Order";
import bumberType from "./Bumpertype";
export default {
  components: { Order, bumberType },
  data() {
    return {
      steps: [
        {
          label: "ลักษณะของรถ",
          slot: "page1"
        },
        {
          label: "ประเภทรถย่อย",
          slot: "page2"
        },
        {
          label: "ประเภทกันชน",
          slot: "page3"
        },
        {
          label: "ฟังก์ชั่นกันชน",
          slot: "page4"
        },
        {
          label: "สรุปผล",
          slot: "page5"
        }
      ]
    };
  },
  methods: {
    nextClicked(currentPage) {
      console.log("next clicked", currentPage);
      let carStyle = this.$store.getters.CarStyle;
      let Bumpertype = this.$store.getters.Bumpertype;
      if (currentPage == 0) {
        if (carStyle == "") {
          return false;
        } else {
          return true; //return false if you want to prevent moving to next page
        }
      } else if (currentPage == 1) {
        if (Bumpertype == "") {
          return false;
        } else {
          return true; //return false if you want to prevent moving to next page
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
      }
      console.log("back clicked", currentPage);
      return true; //return false if you want to prevent moving to previous page
    }
  }
};
</script> 