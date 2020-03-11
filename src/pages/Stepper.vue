<template>
  <div>
    <b-row v-if="check === true">
      <b-col>
        <b-jumbotron id="jumbotron" lead="กรุณากรอกข้อมูล">
          <b-row>
            <b-col class="col-4 col-sm-4">
              <label id="name" for="input-live">ชื่อ :</label>
            </b-col>
            <b-col class="col-8 col-sm-8">
              <b-form-input
                type="text"
                v-model="firstname"
                :state="firstnameState"
                aria-describedby="input-live-help input-live-feedback"
                trim
              ></b-form-input>
              <!-- This will only be shown if the preceding input has an invalid state -->
              <b-form-invalid-feedback id="input-live-feedback">กรุณากรอกชื่อ</b-form-invalid-feedback>
            </b-col>
          </b-row>
          <br />

          <b-row>
            <b-col class="col-4 col-sm-4">
              <label for="input-live">นามสกุล :</label>
            </b-col>
            <b-col class="col-8 col-sm-8">
              <b-form-input
                type="text"
                v-model="lastname"
                :state="lastnameState"
                aria-describedby="input-live-help input-live-feedback"
                trim
              ></b-form-input>
              <!-- This will only be shown if the preceding input has an invalid state -->
              <b-form-invalid-feedback id="input-live-feedback">กรุณากรอกนามสกุล</b-form-invalid-feedback>
            </b-col>
          </b-row>
          <br />

          <b-row>
            <b-col class="col-4 col-sm-4">
              <label for="input-live">บริษัท/หน่วยงาน :</label>
            </b-col>
            <b-col class="col-8 col-sm-8">
              <b-form-input
                type="text"
                v-model="company"
                :state="companyState"
                aria-describedby="input-live-help input-live-feedback"
                trim
              ></b-form-input>
              <!-- This will only be shown if the preceding input has an invalid state -->
              <b-form-invalid-feedback id="input-live-feedback">กรุณากรอกบริษัท/หน่วยงาน</b-form-invalid-feedback>
            </b-col>
          </b-row>
          <br />

          <b-row>
            <b-col class="col-4 col-sm-4">
              <label for="input-live">อีเมล :</label>
            </b-col>
            <b-col class="col-8 col-sm-8">
              <b-form-input
                type="email"
                required
                v-model="email"
                :state="emailState"
                aria-describedby="input-live-help input-live-feedback"
                trim
                class="form-control validate"
              ></b-form-input>
              <!-- This will only be shown if the preceding input has an invalid state -->
              <b-form-invalid-feedback
                id="input-live-feedback "
              >กรุณากรอกอีเมล เช่น name@example.com</b-form-invalid-feedback>
            </b-col>
          </b-row>
          <br />

          <b-row>
            <b-col>
              <b-button type="submit" id="confirm" class="confirm" @click="confirm">ตกลง</b-button>
            </b-col>
          </b-row>
        </b-jumbotron>
      </b-col>
    </b-row>
    <!-- slot -->
    <b-row v-if="check===false">
      <b-col>
        <h3>ระบบดาวน์โหลดอุปกรณ์ป้องกันด้านข้างและด้านท้ายรถบรรทุก</h3>
      </b-col>
    </b-row>
    <br />
    <br />
    <b-row v-if="check===false">
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
            <component v-bind:is="checkBumpertype" />
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
import Order from "../components/CarType";
import Bumper1 from "../components/TypeofCar/TypeOne";
import Bumper2 from "../components/TypeofCar/TypeTwo";
import Bumper3 from "../components/TypeofCar/TypeThree";
import Bumper4 from "../components/TypeofCar/TypeFour";
import Bumper5 from "../components/TypeofCar/TypeFive";
import Bumper6 from "../components/TypeofCar/TypeSix";
import Bumper7 from "../components/TypeofCar/TypeSeven";
import Bumper8 from "../components/TypeofCar/TypeEight";
import Bumper9 from "../components/TypeofCar/TypeNine";
import RLtype from "../components/RLtype";
import RUPD from "../components/RUPD/Rupd";
import LUPD from "../components/LUPD/Lupd";
import Rsummary from "../components/RUPD/Rsummary";
import Lsummary from "../components/LUPD/Lsummary";
import axios from "axios";
export default {
  components: {
    Order,
    Bumper1,
    Bumper2,
    Bumper3,
    Bumper4,
    Bumper5,
    Bumper6,
    Bumper7,
    Bumper8,
    Bumper9,
    RLtype,
    RUPD,
    LUPD,
    Rsummary,
    Lsummary
  },
  computed: {
    firstnameState() {
      return this.firstname.length != "" ? true : false;
    },
    lastnameState() {
      return this.lastname.length != "" ? true : false;
    },
    companyState() {
      return this.company.length != "" ? true : false;
    },
    emailState() {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return this.email.length != "" &&
        re.test(String(this.email).toLowerCase())
        ? true
        : false;
    }
  },
  data() {
    return {
      steps: [
        {
          label: "1.ลักษณะรถ",
          slot: "page1"
        },
        {
          label: "2.ลักษณะรถย่อย",
          slot: "page2"
        },
        {
          label: "3.ตำแหน่งติดตั้งอุปกรณ์",
          slot: "page3"
        },
        {
          label: "4.ฟังก์ชั่นอุปกรณ์",
          slot: "page4"
        },
        {
          label: "5.สรุปแบบอุปกรณ์",
          slot: "page5",
          options: {
            nextDisabled: true // control whether next is disabled or not
          }
        }
      ],
      checkRLtype: "",
      summary: "",
      checkBumpertype: "",
      firstname: "",
      lastname: "",
      company: "",
      email: "",
      check: false,
      head: [],
      carType: []
    };
  },
  mounted() {
    var instance = this;
    var url =
      "https://sheets.googleapis.com//v4/spreadsheets/1vfnoJq3AiL0GuHaGhI_q8W2zRUPBM9swH2V5_EW8MlU/values/A1:AP76/?key=AIzaSyBdDxNQXwJyowwndJy54wQoynwFvQJiK_g";
    axios
      .get(url)
      .then(function(response) {
        var data = response.data.values;
        for (let i = 0; i < 1; i++) {
          for (let j = 23; j < 42; j++) {
            // console.log(data[i][j]);
            instance.head.push(data[i][j]);
            var filtered = instance.head.filter(function(el) {
              return el != "";
            });
            // console.log(filtered);
            instance.carType = filtered;
            // console.log(instance.carType);
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });
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
        console.log(this.carType[0]);

        if (carStyle == "") {
          alert("เลือก 'ลักษณะรถยนต์' ใหม่อีกครั้ง");
          return false;
        } else {
          if (carStyle == this.carType[0]) {
            this.checkBumpertype = "Bumper1";
          } else if (carStyle == this.carType[1]) {
            this.checkBumpertype = "Bumper2";
          } else if (carStyle == this.carType[2]) {
            this.checkBumpertype = "Bumper3";
          } else if (carStyle == this.carType[3]) {
            this.checkBumpertype = "Bumper4";
          } else if (carStyle == this.carType[4]) {
            this.checkBumpertype = "Bumper5";
          } else if (carStyle == this.carType[5]) {
            this.checkBumpertype = "Bumper6";
          } else if (carStyle == this.carType[6]) {
            this.checkBumpertype = "Bumper7";
          } else if (carStyle == this.carType[7]) {
            this.checkBumpertype = "Bumper8";
          } else if (carStyle == this.carType[8]) {
            this.checkBumpertype = "Bumper9";
          }
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
    },
    confirm: function() {
      const db = this.$firebase.firestore();
      console.log(this.firstname);
      console.log(this.lastname);
      if (this.firstname == "" && this.lastname == "") {
        alert("กรุณากรอกข้อมูล");
        this.page = true;
      } else {
        var instance = this;
        instance.check = true;
        db.collection("register")
          .add({
            firstname: this.firstname,
            lastname: this.lastname,
            company: this.company,
            email: this.email
          })
          .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            instance.check = false;
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
      }
    }
  }
};
</script> 
<style>
.wizard__step.active .wizard__step__indicator[data-v-c21d83ca] {
  background-color: #4e1771;
}
.wizard__step__indicator[data-v-c21d83ca] {
  width: 20px;
  height: 20px;
  background-color: #d7b0f0;
  border: 3px solid #4e1771;
}
.wizard__step__label[data-v-c21d83ca] {
  color: black;
  font-weight: bold;
}
.wizard__body__actions[data-v-c21d83ca] {
  border-top: 1px solid #4e1771;
  background-color: #d7b0f0;
}
.wizard__body__actions a[data-v-c21d83ca] {
  background-color: #4e1771;
}
.wizard__body__actions a[data-v-c21d83ca]:hover {
  background-color: #4e1771;
}
.wizard__step.active:not(:first-child) .wizard__step__line[data-v-c21d83ca] {
  background-color: #000000;
}
.confirm {
  background-color: #4d2b68; /*Button Color*/
  color: #fff;
  width: 20%;
}
/* #jumbotron {
  background-image: url("../assets/Car-icon.png");
} */
</style>