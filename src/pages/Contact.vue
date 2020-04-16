<template>
  <div>
    <br />
    <br />
    <b-container>
      <b-jumbotron class="jum">
        <b-row>
          <b-col class="col-12 col-sm-5">
            <!-- <b-icon icon="people" style="width: 200px; height: 200px;"></b-icon> -->
            <b-img
              :src="require('../assets/imgDetailProject/contact.jpg')"
              fluid
              rounded
              alt="Rounded image"
              class="imgContact"
            ></b-img>
          </b-col>
          <b-col class="col-12 col-sm-7">
            <br />
            <p
              style="text-align: left; font-size: 18px;"
            >ดร.ศราวุธ เลิศพลังสันติ นักวิจัย(หัวหน้าโครงการ) sarawutl@mtec.or.th</p>
            <p
              style="text-align: left; font-size: 18px;"
            >นางสาวรัตนสุดา แนวเงินดี วิศวกรอาวุโส rattanan@mtec.or.th</p>
            <p
              style="text-align: left; font-size: 18px;"
            >เสาวลักษณ์ ตั้งวานิชกพงษ์ นักวิเคราะห์อาวุโส saowalut@mtec.or.th</p>
            <br />
            <p style="text-align: left; font-size: 18px;">
              ศูนย์เทคโนโลยีโลหะและวัสดุแห่งชาติ
              สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ
              114 อุทยานวิทยาศาสตร์ประเทศไทย ถ.พหลโยธิน ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี 12120
              โทร 025646500
            </p>
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
p {
  margin-top: 0;
  margin-bottom: 0rem;
}
</style>
