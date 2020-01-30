<template>
  <div>
    <b-row>
      <b-col>
        <h4>อุปกรณ์ป้องกัน</h4>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="col-12 col-sm-6">
        <b-button class="carstyle" variant="success">
          <b-col>
            <h5>ด้านข้างรถ</h5>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>

      <b-col class="col-12 col-sm-6" style="margin-top: 10px;">
        <b-button class="carstyle" variant="success">
          <b-col>
            <h5>ท้ายรถ</h5>
            <b-img class="img" thumbnail fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
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
      data: ""
    };
  },
  created() {
    this.data = this.$store.getters.Bumpertype;
    var test = this.$store.getters.CarStyle;
    console.log("getters car style = " + test);
    console.log("getters bumper type " + this.data);
  }
};
</script>
<style>
</style>