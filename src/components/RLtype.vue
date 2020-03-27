<template>
  <div>
    <!-- <b-row>
      <b-col>
        <h4>อุปกรณ์ป้องกัน</h4>
      </b-col>
    </b-row>-->
    <br />
    <b-row>
      <b-col class="col-12 col-sm-6">
        <b-button class="RLstyle" :variant="buttonColor" @click="RLtype('LUPD')">
          <b-col>
            <h5>ด้านข้างรถ</h5>
            <b-img class="imgRL" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-6" style="margin-top: 10px;">
        <b-button class="RLstyle" :variant="buttonColor" @click="RLtype('RUPD')">
          <b-col>
            <h5>ท้ายรถ</h5>
            <b-img class="imgRL" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { store } from "../store/store";
export default {
  store,
  data() {
    return {
      data: "",
      buttonColor: "outline-success"
    };
  },
  methods: {
    RLtype: function(type) {
      console.log(type);
      console.log("commit RUPD or LUPD :  " + type);
      this.$store.commit("setRLtype", type);
    }
  },
  created() {
    this.data = this.$store.getters.Bumpertype;
    var test = this.$store.getters.CarStyle;
    console.log("getters car style = " + test);
    console.log("getters bumper type " + this.data);
  }
};
</script>
<style lang="css" scoped>
.RLstyle {
  padding-left: unset;
  padding-right: unset;
  height: 100%;
  width: 70%;
}
.imgRL {
  padding-left: unset;
  padding-right: unset;
  width: 150px;
  height: 150px;
}
.RLstyle:focus {
  background-color: darkgreen;
}
</style>