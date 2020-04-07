<template>
  <div>
    <!-- <b-row>
      <b-col>
        <h4>อุปกรณ์ป้องกัน</h4>
      </b-col>
    </b-row>-->
    <br />
    <b-row>
      <b-col class="col-12 col-sm-6" style="margin-top:10px;">
        <b-button class="RLstyle" :variant="buttonColor" @click="RLtype('LUPD')">
          <b-col>
            <h5>ด้านข้างรถ</h5>
            <b-img
              class="imgRL"
              thumbnail
              fluid
              :src="require('../assets/imgLUPD/beside.png')"
              alt="Image 1"
            ></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-6" style="margin-top:10px;">
        <b-button class="RLstyle" :variant="buttonColor" @click="RLtype('RUPD')">
          <b-col>
            <h5>ด้านท้ายรถ</h5>
            <b-img
              class="imgRL"
              thumbnail
              fluid
              :src="require('../assets/imgRUPD/behind.png')"
              alt="Image 1"
            ></b-img>
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
      buttonColor: "light"
    };
  },
  methods: {
    RLtype: function(type) {
      this.$store.commit("setRLtype", type);
    }
  },
  created() {
    this.data = this.$store.getters.Bumpertype;
    var test = this.$store.getters.CarStyle;
  }
};
</script>
<style lang="css" scoped>
.RLstyle {
  height: 100%;
  width: 60%;
  border: solid;
}
.imgRL {
  width: auto;
  height: auto;
}
.RLstyle:focus {
  background-color: #b8b2a6;
}
</style>