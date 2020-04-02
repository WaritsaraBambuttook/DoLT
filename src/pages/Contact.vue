<template>
  <div>
    <br />
    <br />
    <b-container>
      <b-jumbotron class="jum">
        <b-row>
          <b-col class="ol-12 col-sm-3">
            <b-icon icon="people" style="width: 200px; height: 200px;"></b-icon>
          </b-col>
          <b-col class="ol-12 col-sm-9">
            <br />
            <h3 style="text-align: left;">
              ศูนย์เทคโนโลยีโลหะและวัสดุแห่งชาติ 114 อุทยานวิทยาศาสตร์ประเทศไทย ถ.พหลโยธิน ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี 12120
              โทรศัพท์ 0-2564-6500 โทรสาร 0-2564-6501- 5
            </h3>
          </b-col>
        </b-row>
      </b-jumbotron>
    </b-container>

    <br />
    <br />
  </div>
</template>
<script>
export default {
  data() {
    return {
      mes: "edit",
      name: "four"
    };
  }
};
</script>
<style>
.bc {
  margin: auto;
}
.jum {
  background: linear-gradient(to top left, #ff9966 0%, #000066 100%);
  color: white;
}
</style>
