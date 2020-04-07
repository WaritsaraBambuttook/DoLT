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
            <b-img :style="imgTypeseven" thumbnail fluid :src="allData.img" alt="Image 1"></b-img>
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
      buttonColor: "light",
      type: [],
      index: [],
      CarImg: [
        require("../../assets/ImgCarType/icon_007_7.1.png"),
        require("../../assets/ImgCarType/icon_007_7.2.png")
      ],
      allData: []
    };
  },
  methods: {
    subType: function(data) {
      for (let index = 0; index <= 1; index++) {
        if (data == this.type[index]) {
          this.$store.commit("setnumberOfSubType", this.index[index]);
        }
      }
      this.$store.commit("setBumpertype", data);
    }
  },

  mounted() {
    this.one = this.$store.getters.CarStyle;
    var instance = this;
    var url =
      "https://sheets.googleapis.com//v4/spreadsheets/1AYlNYc_so8jGRhNoNK_PGJ1XSHwOrhvOoW76UVpCoek/values/A1:AQ76/?key=AIzaSyBdDxNQXwJyowwndJy54wQoynwFvQJiK_g";
    axios
      .get(url)
      .then(function(response) {
        var data = response.data.values;
        for (let i = 1; i < 2; i++) {
          for (let j = 38; j < 40; j++) {
            instance.type.push(data[i][j]);
            instance.index.push(j);
          }
        }
        for (let i = 0; i < instance.type.length; i++) {
          instance.allData.push({
            name: instance.type[i],
            img: instance.CarImg[i]
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  computed: {
    imgTypeseven() {
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
/* .imgTypeseven {
  padding-left: unset;
  padding-right: unset;
  width: 150px;
} */
.carstyle:focus {
  background-color: #b8b2a6;
}
</style>