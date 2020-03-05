<template>
  <div>
    <!-- <b-button id="authorize_button">Authorize</b-button>
    <b-button id="signout_button">Sign Out</b-button>-->
    <!-- <GChart type="ColumnChart" @ready="onChartReady" /> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      head: [],
      carType: []
    };
  },
  methods: {},
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
            // console.log(filtered);
            instance.carType = filtered;
            console.log(instance.carType);
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>