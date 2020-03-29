<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" :style="navCss">
      <b-navbar-brand to="/" id="home">หน้าแรก</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/Home">
            <b-icon icon="tv"></b-icon>รายละเอียดโครงการ
          </b-nav-item>
          <b-nav-item to="/download">
            <b-icon icon="download"></b-icon>ดาวน์โหลดอุปกรณ์ป้องกัน
          </b-nav-item>
          <b-nav-item to="/Contact">
            <b-icon icon="people"></b-icon>ติดต่อสอบถาม
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br />
    <b-container class="wrapper">
      <router-view to="/" />
    </b-container>
  </div>
</template>

<script>
import { store } from "./store/store";

export default {
  store,
  data() {
    return {
      // testCollection: []
    };
  },
  computed: {
    navCss() {
      return {
        "background-color": "#230444 !important",
        position: "-webkit-sticky",
        position: "sticky",
        top: 0,
        "z-index": 1071
      };
    }
  }
  // mounted() {
  //   const db = this.$firebase.firestore();
  //   db.collection("four")
  //     .get()
  //     .then(snap => {
  //       const testCollection = [];
  //       snap.forEach(doc => {
  //         testCollection.push(doc.data());
  //       });
  //       this.testCollection = testCollection;
  //       console.log(this.testCollection);
  //     });
  // }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4d2b68;
}

#sticky-footer {
  flex-shrink: 0;
}
</style>
