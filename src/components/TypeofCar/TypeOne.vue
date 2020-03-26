<template>
  <div>
    <br />
    <b-row>
      <b-col
        v-for="allData in allData"
        :key="allData.name"
        class="col-12 col-sm-4"
        style="margin-top: 10px;"
      >
        <b-button class="carstyle" :variant="buttonColor" @click="subType(allData.name)">
          <b-col>
            <h6>{{allData.name}}</h6>
            <b-img class="imgTypeone" thumbnail fluid :src="allData.img" alt="Image 1"></b-img>
          </b-col>
        </b-button>
      </b-col>
    </b-row>
    <br />
  </div>
</template>
<script>
import { store } from "../../store/store";
import axios from "axios";
export default {
  store,
  data() {
    return {
      one: "",
      buttonColor: "outline-success",
      type: [],
      index: [],
      CarImg: [
        require("../../assets/ImgCarType/icon_001_1.1.png"),
        require("../../assets/ImgCarType/icon_001_1.2.png"),
        require("../../assets/ImgCarType/icon_001_1.3.png")
      ],
      allData: []
    };
  },
  methods: {
    subType: function(data) {
      console.log("commit to store " + data);
      // if (data == this.type[0]) {
      //   this.$store.commit("setnumberOfSubType", this.index[0]);
      //   console.log("index " + this.index[0]);
      // }
      // if (data == this.type[1]) {
      //   this.$store.commit("setnumberOfSubType", this.index[1]);
      //   console.log("index " + this.index[1]);
      // }
      // if (data == this.type[2]) {
      //   this.$store.commit("setnumberOfSubType", this.index[2]);
      //   console.log("index " + this.index[2]);
      // }
      for (let index = 0; index <= 2; index++) {
        if (data == this.type[index]) {
          console.log("index " + this.index[index]);
          this.$store.commit("setnumberOfSubType", this.index[index]);
        }
      }
      this.$store.commit("setBumpertype", data);
    }
  },

  mounted() {
    this.one = this.$store.getters.CarStyle;
    console.log("getters car style  " + this.one);
    var instance = this;
    var url =
      "https://sheets.googleapis.com//v4/spreadsheets/1AYlNYc_so8jGRhNoNK_PGJ1XSHwOrhvOoW76UVpCoek/values/A1:AQ76/?key=AIzaSyBdDxNQXwJyowwndJy54wQoynwFvQJiK_g";
    axios
      .get(url)
      .then(function(response) {
        var data = response.data.values;
        for (let i = 1; i < 2; i++) {
          for (let j = 23; j < 26; j++) {
            console.log(data[i][j]);
            instance.type.push(data[i][j]);
            instance.index.push(j);
          }
        }
        console.log(instance.type);
        console.log("instance.index " + instance.index);
        for (let i = 0; i < instance.type.length; i++) {
          instance.allData.push({
            name: instance.type[i],
            img: instance.CarImg[i]
          });
        }
        console.log("all data", instance.allData);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style>
/* .img-thumbnail {
  width: 60%;
} */
.carstyle {
  padding-left: unset;
  padding-right: unset;
  height: 100%;
  width: 60%;
}
.imgTypeone {
  padding-left: unset;
  padding-right: unset;
  width: 150px;
}
.carstyle:focus {
  background-color: darkgreen;
}
</style>