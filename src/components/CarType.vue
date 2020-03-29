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
            <b-img :style="imgCartype" thumbnail fluid :src="car.img" :alt="car.name"></b-img>
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
      buttonColor: "light",
      imgCar: [
        require("../assets/ImgCarType/icon_001_1.1.png"),
        require("../assets/ImgCarType/icon_002.png"),
        require("../assets/ImgCarType/icon_003.png"),
        require("../assets/ImgCarType/icon_004.png"),
        require("../assets/ImgCarType/icon_005_5.1.png"),
        require("../assets/ImgCarType/icon_007_6.1.png"),
        require("../assets/ImgCarType/icon_007_7.1.png"),
        require("../assets/ImgCarType/icon_008.png"),
        require("../assets/ImgCarType/icon_009.png")
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
  },
  computed: {
    imgCartype() {
      return {
        "padding-left": "unset",
        "padding-right": "unset",
        width: "150px"
      };
    }
  }
};
</script>
<style lang="css" scoped>
.img-thumbnail {
  width: 60%;
}
.carstyle {
  padding-left: unset;
  padding-right: unset;
  height: 100%;
  width: 60%;
  border: solid;
}
/* .imgCartype {
  padding-left: unset;
  padding-right: unset;
  width: 150px;
} */
.carstyle:focus {
  background-color: #b8b2a6;
}
</style>