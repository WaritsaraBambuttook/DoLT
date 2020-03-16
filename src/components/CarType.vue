<template>
  <div>
    <br />
    <b-row style="margin-top: 3px;">
      <b-col
        v-for="car in carType"
        :key="car.name"
        class="col-12 col-sm-4"
        style="margin-top: 10px;"
      >
        <b-button class="carstyle" ref="myid" :variant="buttonColor" @click="carstyle(car.name)">
          <h6>{{car.name}}</h6>
          <b-col>
            <b-img thumbnail fluid :src="car.img" :alt="car.name"></b-img>
          </b-col>
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import axios from "axios";
import { store } from "../store/store";
export default {
  store,
  data() {
    return {
      buttonColor: "outline-success",
      imgCar: [
        require("../assets/ImgCarType/1.jpg"),
        require("../assets/ImgCarType/2.jpg"),
        require("../assets/ImgCarType/3.jpg"),
        require("../assets/ImgCarType/4.jpg"),
        require("../assets/ImgCarType/5.jpg"),
        require("../assets/ImgCarType/6.jpg"),
        require("../assets/ImgCarType/7.jpg"),
        require("../assets/ImgCarType/8.jpg"),
        require("../assets/ImgCarType/9.jpg")
      ],
      head: [],
      carType: []
      // object: []
    };
  },
  methods: {
    carstyle: function(data) {
      console.log("commit car style  " + data);
      this.$store.commit("setCarStyle", data);
    }
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
            // instance.carType = filtered;
          }
        }
        for (let i = 0; i < filtered.length; i++) {
          instance.carType.push({
            name: filtered[i],
            img: instance.imgCar[i]
          });
        }
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
  width: 150px;
  height: 150px;
}
.carstyle:focus {
  background-color: darkgreen;
}
</style>