<template>
  <div>
    <br />
    <b-row>
      <b-col v-for="type in type" :key="type" class="col-12 col-sm-4" style="margin-top: 10px;">
        <b-button class="carstyle" :variant="buttonColor" @click="subType(type)">
          <b-col>
            <h6>{{type}}</h6>
            <b-img
              :style="imgTypethree"
              thumbnail
              fluid
              :src="require('../../assets/ImgCarType/icon_003.png')"
              alt="Image 1"
            ></b-img>
          </b-col>
        </b-button>
      </b-col>
    </b-row>
    <br />
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
      index: []
    };
  },
  methods: {
    subType: function(data) {
      if (data == this.type[0]) {
        this.$store.commit("setnumberOfSubType", this.index[0]);
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
          for (let j = 27; j < 28; j++) {
            instance.type.push(data[i][j]);
            instance.index.push(j);
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  computed: {
    imgTypethree() {
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
/* .imgTypethree {
  padding-left: unset;
  padding-right: unset;
  width: 150px;
} */
.carstyle:focus {
  background-color: #b8b2a6;
}
</style>