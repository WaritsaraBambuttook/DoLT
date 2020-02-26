<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">หน้าแรก</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/Home">รายละเอียด</b-nav-item>
          <b-nav-item to="/download">ดาวน์โหลดกันชน</b-nav-item>
          <b-nav-item to="/Contact">ติดต่อสอบถาม</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br />
    <b-container>
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
      testCollection: []
    };
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
@import url("https://fonts.googleapis.com/css?family=Kanit&display=swap");
body {
  background-color: rgb(248, 239, 252);
  font-family: "Kanit";
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4d2b68;
}
.bg-info {
  background-color: #853aa8 !important;
}
</style>
