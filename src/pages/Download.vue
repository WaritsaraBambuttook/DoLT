<template>
  <div>
    <b-container>
      <b-row v-if="check === true">
        <b-col>
          <b-jumbotron id="jumbotron" class="information">
            <b-row>
              <b-col>
                <h3>กรุณากรอกข้อมูล</h3>
              </b-col>
            </b-row>
            <br />
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
                <b-form-invalid-feedback id="input-live-feedback">
                  <h6>กรุณากรอกชื่อ</h6>
                </b-form-invalid-feedback>
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
                <b-form-invalid-feedback id="input-live-feedback">
                  <h6>กรุณากรอกนามสกุล</h6>
                </b-form-invalid-feedback>
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
                <b-form-invalid-feedback id="input-live-feedback">
                  <h6>กรุณากรอกบริษัท/หน่วยงาน</h6>
                </b-form-invalid-feedback>
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
                <b-form-invalid-feedback id="input-live-feedback ">
                  <h6>กรุณากรอกอีเมล เช่น name@example.com</h6>
                </b-form-invalid-feedback>
              </b-col>
            </b-row>
            <br />
            <br />
            <b-row>
              <b-col>
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >ยอมรับเงื่อนไขและข้อตกลง</b-form-checkbox>
              </b-col>
            </b-row>
            <br />
            <b-row>
              <b-col class="col-12 col-sm-8 text-right">
                <b-button
                  style="width: 250px;"
                  type="submit"
                  id="confirm"
                  class="confirm"
                  @click="confirm"
                >ตกลง</b-button>
              </b-col>
              <b-col class="col-12 col-sm-4 text-right" v-if="loading == true">
                <strong>Loading...</strong>
                <b-spinner class="ml-auto"></b-spinner>
              </b-col>
            </b-row>
          </b-jumbotron>
        </b-col>
      </b-row>
      <!-- slot -->
      <b-row v-if="check===false">
        <b-col class="title">
          <h3 style="margin:10px;">ระบบดาวน์โหลดอุปกรณ์ป้องกันด้านข้างและด้านท้ายรถบรรทุก</h3>
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
      <br />
      <br />
    </b-container>
  </div>
</template>
 
<script>
// import Stepper from "vuejs-stepper";
import wizard from "./Wizard";
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
    Lsummary,
    "vue-good-wizard": wizard
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
    // slot1() {
    //   return {
    //     "background-color": "#4e1771"
    //   };
    // }
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
      status: "not_accepted",
      checkRLtype: "",
      summary: "",
      checkBumpertype: "",
      firstname: "",
      lastname: "",
      company: "",
      email: "",
      check: true,
      head: [],
      carType: [],
      loading: false
    };
  },
  mounted() {
    if (sessionStorage.getItem("setData")) {
      this.check = false;
    }
    var instance = this;
    var url =
      "https://sheets.googleapis.com//v4/spreadsheets/1AYlNYc_so8jGRhNoNK_PGJ1XSHwOrhvOoW76UVpCoek/values/A1:AQ76/?key=AIzaSyBdDxNQXwJyowwndJy54wQoynwFvQJiK_g";
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
      let carStyle = this.$store.getters.CarStyle;
      let Bumpertype = this.$store.getters.Bumpertype;
      let RLtype = this.$store.getters.RLtype;
      this.checkRLtype = RLtype;

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
      if (
        this.firstname == "" ||
        this.lastname == "" ||
        this.company == "" ||
        this.emailState === false ||
        this.status == "not_accepted"
      ) {
        alert("กรุณากรอกข้อมูลให้ถูกต้อง ครบถ้วน และกรุณายินยอมการเก็บข้อมูล");
        console.log("if");
      } else {
        console.log("else");
        this.loading = true;
        let setData = {
          firstname: this.firstname,
          lastname: this.lastname,
          company: this.company,
          email: this.email
        };
        sessionStorage.setItem("setData", JSON.stringify(setData));

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
            instance.loading = false;
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
      }
    }
  }
};
</script> 
<style lang="css" scoped >
.title {
  border: 2px solid;
  border-radius: 8px;
  padding: 0;
}
.confirm {
  background-color: #302b63; /*Button Color*/
  color: #fff;
  width: 20%;
}
.information {
  background: linear-gradient(to bottom right, #302b63 20%, #ffcc66 100%);
  color: black;
  font-size: 18px;
}
h6 {
  color: black;
}
</style>