<template>
  <div>
    <br />
    <b-row>
      <b-col v-for="type in type" :key="type" class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button class="carstyle" :variant="buttonColor" @click="subType(type)">
          <b-col>
            <h6>{{type}}</h6>
            <b-img
              class="img"
              thumbnail
              fluid
              :src="require('../../assets/logo.png')"
              alt="Image 1"
            ></b-img>
          </b-col>
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import axios from "axios";
import { store } from "../../store/store";
export default {
  store,
  data() {
    return {
      one: "",
      buttonColor: "outline-success",
      type: [],
      index: []
    };
  },
  methods: {
    subType: function(data) {
      for (let index = 0; index <= 1; index++) {
        if (data == this.type[index]) {
          console.log("index " + this.index[index]);
          this.$store.commit("setnumberOfSubType", this.index[index]);
        }
      }
      console.log("commit to store " + data);
      this.$store.commit("setBumpertype", data);
    }
  },

  mounted() {
    this.one = this.$store.getters.CarStyle;
    console.log("getters car style  " + this.one);
    var instance = this;
    var url =
      "https://sheets.googleapis.com//v4/spreadsheets/1vfnoJq3AiL0GuHaGhI_q8W2zRUPBM9swH2V5_EW8MlU/values/A1:AP76/?key=AIzaSyBdDxNQXwJyowwndJy54wQoynwFvQJiK_g";
    axios
      .get(url)
      .then(function(response) {
        var data = response.data.values;
        for (let i = 1; i < 2; i++) {
          for (let j = 38; j < 40; j++) {
            console.log(data[i][j]);
            instance.type.push(data[i][j]);
            instance.index.push(j);
          }
        }
        console.log(instance.type);
        console.log("index " + instance.index);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style>
.img-thumbnail {
  width: 60%;
}
.carstyle {
  padding-left: unset;
  padding-right: unset;
  height: 100%;
  width: 60%;
}
.img {
  padding-left: unset;
  padding-right: unset;
  width: 100px;
  height: 100px;
}
.carstyle:focus {
  background-color: darkgreen;
}
</style>