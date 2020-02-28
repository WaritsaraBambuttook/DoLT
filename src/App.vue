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
    <br />
    <br />
    <footer class="footer">
      <b-card title="Card title" sub-title="Card subtitle">
        <b-card-text>
          Some quick example text to build on the
          <em>card title</em> and make up the bulk of the card's
          content.
        </b-card-text>

        <b-card-text>A second paragraph of text in the card.</b-card-text>

        <a href="#" class="card-link">Card link</a>
        <b-link href="#" class="card-link">Another link</b-link>
      </b-card>
    </footer>
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
html,
body {
  background-color: rgb(248, 239, 252);
  font-family: "Kanit";
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4d2b68;
}
.bg-info {
  background-color: #563d7c !important;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1071;
}
/* .card-body {
  background-color: #6e6081;
  color: white;
  position: fixed;
  width: 100%;
} */
/* .footer {
  bottom: 0px;
  width: 100%;
  position: absolute;
} */

/* @media (max-width: 414) {
  .footer {
    bottom: 0px;
    width: 100%;
    position: absolute;
  }
} */
/* @media (min-width: 768) {
  .footer {
    position: absolute;
    bottom: 0px;
    width: 100%;
  }
} */
/* @media (max-width: 575.98px) {
  .card {
    font-size: 14px;
  }
}

.card {
   display: block;
} */
</style>
