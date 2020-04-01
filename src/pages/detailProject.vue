<template>
  <div>
    <b-container fluid>
      <b-row class="allStyle">
        <b-col class="titleProject">
          <h3
            style="margin-top: 10px;"
          >โครงการศึกษาเพื่อจัดทำแบบมาตรฐานของอุปกรณ์ป้องกันด้านข้างและด้านท้ายของรถที่ใช้ในการขนส่ง</h3>
        </b-col>
      </b-row>
      <br />
      <br />
      <b-row class="allStyle">
        <b-col class="col-12 col-sm-7" style="margin-top: 10px">
          <b-embed
            class="video"
            type="iframe"
            src="https://www.youtube.com/embed/_3-d0JEq1gE"
            allowfullscreen
          ></b-embed>
        </b-col>
        <b-col class="col-12 col-sm-5" style="margin-top: 10px">
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            controls
            indicators
            img-width="1024"
            img-height="580"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide
              caption="First slide"
              class="imgCarousel"
              :img-src="require('../assets/imgDetailProject/Cover001.png')"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Second Slide"
              :img-src="require('../assets/imgDetailProject/Cover002.png')"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Third Slide"
              :img-src="require('../assets/imgDetailProject/Cover003.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="fourth Slide"
              :img-src="require('../assets/imgDetailProject/Cover004.jpg')"
            ></b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
      <br />
      <b-row class="allStyle">
        <b-col class="col-12 col-sm-12" style="margin-top: 10px">
          <b-card
            header="ที่มาและความสำคัญของโครงการ"
            header-text-variant="white"
            header-tag="header"
            header-bg-variant="secondary"
            style="max-width: 150rem;"
          >
            <b-img thumbnail fluid :src="require('../assets/imgDetailProject/content.png')" alt="q"></b-img>
            <p></p>
            <b-card-text class="info" style="margin-top: 10px">
              จากข้อมูลของศูนย์วิชาการเพื่อความปลอดภัยทางถนน (ศวปถ.)
              พบว่าหนึ่งในรูปแบบอุบัติเหตุที่พบบ่อยและมีความรุนแรงมากที่สุดคือ
              การที่รถบรรทุกถูกชนท้ายหรือชนจากด้านข้างที่จอดพักรถริมทาง โดยมีจำนวนไม่น้อยกว่า 60 ครั้งต่อปี
              และมีผู้เสียชีวิตเฉลี่ย 1 คนต่อสัปดาห์ โดยส่วนใหญ่เกิดขึ้นในช่วงเวลากลางคืน
              ซึ่งนอกจากการแก้ปัญหาด้วยการจัดการจุดจอดพักรถ วิธีการแก้ปัญหาที่มีประสิทธิภาพที่มีการใช้ในต่างประเทศคือ
              การกำหนดให้ติดตั้งอุปกรณ์ป้องกันด้านข้างและด้านท้ายของรถบรรทุก (Underrun protection device)
              เพื่อลดความรุนแรงของอุบัติเหตุด้วยการป้องกันไม่ให้รถที่เข้ามาชนรถบรรทุกเสียหายและมุดเข้าไปใต้ท้องรถ
              ซึ่งจะต้องป้องกันได้ทั้งในสถานการณ์การชนจากด้านท้ายและด้านข้าง ในสถานการณ์ที่แตกต่างกันไป อาทิ
              การชนด้านหน้าแบบเต็มคัน (Full-width frontal crash) หรือการชนด้านหน้าเยื้องคัน (Overlap frontal crash) ในปัจจุบัน
              มีผู้ผลิตและประกอบรถบรรทุกในประเทศไทยหลายราย ได้เริ่มติดตั้งอุปกรณ์ป้องกันด้านข้างและด้านท้าย ที่เรียกว่า “Lateral underrun protection device (LUPD)”
              และ “Rear underrun protection device (RUPD)” ตามลำดับ แต่ยังไม่แพร่หลายและไม่มีมาตรฐานด้านความแข็งแรงมารองรับ
            </b-card-text>
            <b-card-text class="info" style="margin-top: 10px">
              ด้วยเหตุนี้ คณะทำงานจึงได้ดำเนินการศึกษาอุปกรณ์ป้องกันด้านข้างและด้านท้ายของรถที่ใช้ในการขนส่งสัตว์หรือสิ่งของ
              หรือที่เรียกว่า Lateral Underrun Protection Device (LUPD) และ Rear Underrun Protection Device (RUPD)
              ตามลำดับ เพื่อยกระดับความปลอดภัยของรถบรรทุกที่จดทะเบียนแล้วและใช้งานอยู่ในปัจจุบัน
              โดยเริ่มต้นจากศึกษาแนวทางการนำมาตรฐาน UN R73 และ UN R58 มาประยุกต์ใช้ในการร่างข้อกำหนดในประเทศไทย ทำการออกแบบ
              วิเคราะห์ความแข็งแรงด้วยคอมพิวเตอร์ และดำเนินการทดสอบชิ้นงานจริงในระดับห้องปฏิบัติการ
              พร้อมจัดทำข้อเสนอแนะและแบบเชิงวิศวกรรมของอุปกรณ์ป้องกันด้านข้างและด้านท้ายของรถบรรทุกที่มีความแข็งแรง
              ผ่านการวิเคราะห์และทดสอบตามมาตรฐาน UN R73 และ UN R58 เพื่อใช้เป็นแนวทางตัวอย่างในแก่ผู้ผลิตชิ้นส่วนและประกอบรถที่ใช้ในการขนส่งสัตว์หรือสิ่งของ
              สามารถผลิตและติดตั้งอุปกรณ์ดังกล่าวได้โดยใช้วัตถุดิบภายในประเทศ
            </b-card-text>
          </b-card>
          <b-card-footer class="footerText">
            <b-row>
              <b-col class="col-12 col-sm-6 info" style="margin-top: 10px">
                <b-card-text>โดย</b-card-text>
                <b-card-text>ทีมวิจัยการออกแบบและแก้ปัญหาอุตสาหกรรม</b-card-text>
                <b-card-text>ศูนย์เทคโนโลยีโลหะและวัสดุแห่งชาติ</b-card-text>
                <b-card-text>สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ</b-card-text>
              </b-col>
              <b-col class="col-12 col-sm-6 info" style="margin-top: 10px">
                <b-card-text>เสนอ</b-card-text>
                <b-card-text>กรมการขนส่งทางบก</b-card-text>
                <b-card-text>แหล่งทุน</b-card-text>
                <b-card-text>กองทุนเพื่อความปลอดภัยในการใช้รถใช้ถนน</b-card-text>
              </b-col>
            </b-row>
          </b-card-footer>
        </b-col>

        <!-- <b-col class="col-12 col-sm-5" style="margin-top: 10px">
        <b-card
          header="วัตถุประสงค์"
          header-text-variant="white"
          header-tag="header"
          header-bg-variant="secondary"
          style="max-width: 30rem;"
        >
          <b-card-text
            class="info"
            style="margin-top: 10px"
          >1) ศึกษาแนวทางการนำมาตรฐาน UN R73 และ R58 มาประยุกต์ใช้ในการร่างข้อกำหนดในประเทศไทยเพื่อยกระดับความปลอดภัย และลดความรุนแรงเสียหายที่เกิดขึ้นจากอุบัติเหตุการชนกับรถที่ใช้ในการขนส่งสัตว์หรือสิ่งของ</b-card-text>
          <b-card-text
            class="info"
            style="margin-top: 10px"
          >2) จัดทำแบบเชิงวิศวกรรมของอุปกรณ์ป้องกันด้านข้างและด้านท้ายตามลักษณะของรถที่ใช้ในการขนส่งสัตว์หรือสิ่งของ ตามกฎกระทรวงฉบับที่ 4 (พ.ศ.2524) ออกตามความในพระราชบัญญัติการขนส่งทางบก พ.ศ. 2522 เพื่อเป็นแนวทางในแก่ผู้ผลิตชิ้นส่วนและประกอบรถบรรทุก</b-card-text>
          <b-card-text
            class="info"
            style="margin-top: 10px"
          >3) เสนอแนวทางหรือข้อกำหนดสำหรับตรวจสอบแบบการผลิตและติดตั้งอุปกรณ์ป้องกันด้านข้างและด้านท้าย จัดทำร่างแผนการทำข้อกำหนดไปใช้ปรับปรุงและแก้ปัญหาอุบัติเหตุที่เกิดขึ้นกับรถที่ใช้ในการขนส่งสัตว์หรือสิ่งของ</b-card-text>
        </b-card>
        </b-col>-->
      </b-row>
      <br />
      <br />
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      videos: [
        {
          url: "https://www.youtube.com/embed/4JS70KB9GS0",
          previewImageSize: "maxresdefault"
        }
      ]
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
<style lang="css" scoped>
.titleProject {
  border: 2px solid;
  border-radius: 12px;
}
.info {
  text-align: justify;
  font-size: 18px;
}
.video {
  width: 560;
  height: 315;
}
p {
  margin-top: 0;
  margin-bottom: 0rem;
}
.footerText {
  color: white;
  background-color: darkblue;
}
.allStyle {
  padding: inherit;
  margin: auto;
}
header {
  font-size: 22px;
}
</style>