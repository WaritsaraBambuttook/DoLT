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
      subType: [],
      index: [],
      type: [],
      ctype: [],
      itype: [],
      BoltsNuts: [],
      Welding: [],
      stay1: [],
      stay2: [],
      trailer31: [],
      trailer32: [],
      tippingVehicle: [],
      trailerCoupling: [],
      fixed: [],
      slidable: [],
      foldable: [],
      noPower: [],
      humanPower: [],
      tubeC: [],
      doubleRecht: [],
      lip: [],
      circle: [],
      square: [],
      recht: [],
      cbeam: []
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
        //subtpe
        for (let i = 3; i < data.length; i++) {
          if (data[i][23] == 1) {
            instance.subType.push(data[i][23]);
            instance.index.push(i);
            instance.type.push(data[i][0]);

            instance.ctype.push(data[i][1]);
            instance.itype.push(data[i][2]);

            instance.BoltsNuts.push(data[i][3]);
            instance.Welding.push(data[i][4]);

            instance.stay1.push(data[i][5]);

            instance.stay2.push(data[i][6]);
            instance.trailer31.push(data[i][7]);
            instance.trailer32.push(data[i][8]);
            instance.tippingVehicle.push(data[i][9]);
            instance.trailerCoupling.push(data[i][10]);

            instance.fixed.push(data[i][11]);
            instance.slidable.push(data[i][12]);
            instance.foldable.push(data[i][13]);

            instance.noPower.push(data[i][14]);
            instance.humanPower.push(data[i][15]);

            instance.tubeC.push(data[i][16]);
            instance.doubleRecht.push(data[i][17]);
            instance.lip.push(data[i][18]);
            instance.circle.push(data[i][19]);
            instance.square.push(data[i][20]);
            instance.recht.push(data[i][21]);
            instance.cbeam.push(data[i][22]);
          }
        }
        console.log("subtype " + instance.subType);
        console.log("index " + instance.index);
        console.log("type " + instance.type);

        console.log("ctype" + instance.ctype);
        console.log("itype" + instance.itype);

        console.log("BoltsNuts " + instance.BoltsNuts);
        console.log("Welding" + instance.Welding);

        console.log("stay1 " + instance.stay1);
        console.log("stay2" + instance.stay2);
        console.log("trailer31 " + instance.trailer31);
        console.log("trailer32" + instance.trailer32);
        console.log("tippingVehicle " + instance.tippingVehicle);
        console.log("trailerCoupling" + instance.trailerCoupling);

        console.log("fixed " + instance.fixed);
        console.log("slidable" + instance.slidable);
        console.log("foldable " + instance.foldable);

        console.log("noPower" + instance.noPower);
        console.log("humanPower " + instance.humanPower);

        console.log("tubeC" + instance.tubeC);
        console.log("doubleRecht " + instance.doubleRecht);
        console.log("lip" + instance.lip);
        console.log("circle " + instance.circle);
        console.log("square" + instance.square);
        console.log("circle " + instance.recht);
        console.log("square" + instance.cbeam);

        //max
        console.log("Max ctype  " + Math.max(...instance.ctype));
        console.log("Max itype  " + Math.max(...instance.itype));

        console.log("Max BoltsNuts  " + Math.max(...instance.BoltsNuts));
        console.log("Max Welding  " + Math.max(...instance.Welding));

        console.log("Max stay1  " + Math.max(...instance.stay1));
        console.log("Max stay2  " + Math.max(...instance.stay2));
        console.log("Max trailer31  " + Math.max(...instance.trailer31));
        console.log("Max trailer32  " + Math.max(...instance.trailer32));
        console.log(
          "Max tippingVehicle  " + Math.max(...instance.tippingVehicle)
        );
        console.log(
          "Max trailerCoupling  " + Math.max(...instance.trailerCoupling)
        );

        console.log("Max fixed  " + Math.max(...instance.fixed));
        console.log("Max slidable  " + Math.max(...instance.slidable));
        console.log("Max foldable  " + Math.max(...instance.foldable));

        console.log("Max noPower  " + Math.max(...instance.noPower));
        console.log("Max humanPower  " + Math.max(...instance.humanPower));

        console.log("Max tubeC  " + Math.max(...instance.tubeC));
        console.log("Max doubleRecht  " + Math.max(...instance.doubleRecht));
        console.log("Max lip  " + Math.max(...instance.lip));
        console.log("Max circle  " + Math.max(...instance.circle));
        console.log("Max square  " + Math.max(...instance.square));
        console.log("Max recht  " + Math.max(...instance.recht));
        console.log("Max subtype  " + Math.max(...instance.itype));
        console.log("Max cbeam  " + Math.max(...instance.cbeam));

        // //ctype
        // for (let i = 3; i < data.length; i++) {
        //   instance.ctype.push(data[i][1]);
        //   console.log(instance.ctype);
        // }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>