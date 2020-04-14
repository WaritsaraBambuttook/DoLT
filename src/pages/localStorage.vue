<template>
  <div>
    <b-row v-if="check === true">
      <b-row>
        <b-col class="col-4 col-sm-4">
          <label id="name" for="input-live">ชื่อ :</label>
        </b-col>
        <b-col class="col-8 col-sm-8">
          <b-form-input
            type="text"
            v-model="firstname"
            aria-describedby="input-live-help input-live-feedback"
            trim
          ></b-form-input>
          <!-- This will only be shown if the preceding input has an invalid state -->
          <b-form-invalid-feedback id="input-live-feedback">
            <h6>กรุณากรอกชื่อ</h6>
          </b-form-invalid-feedback>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col class="col-4 col-sm-4">
          <label for="input-live">นามสกุล :</label>
        </b-col>
        <b-col class="col-8 col-sm-8">
          <b-form-input
            type="text"
            v-model="lastname"
            aria-describedby="input-live-help input-live-feedback"
            trim
          ></b-form-input>
          <!-- This will only be shown if the preceding input has an invalid state -->
          <b-form-invalid-feedback id="input-live-feedback">
            <h6>กรุณากรอกนามสกุล</h6>
          </b-form-invalid-feedback>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col>
          <b-button type="submit" id="confirm" class="confirm" @click="local">ตกลง</b-button>
        </b-col>
      </b-row>
    </b-row>

    <b-row v-if="check===false">
      <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
      <b-col>
        <b-button type="submit" id="confirm" class="confirm" @click="remove">ลบ</b-button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      check: true,
      firstname: "",
      lastname: ""
    };
  },
  methods: {
    local: function() {
      let data = {
        localName: this.firstname,
        localLastname: this.lastname
      };
      sessionStorage.setItem("data", JSON.stringify(data));
      //   localStorage.setItem("data", JSON.stringify(data));
      //   this.check = false;
    }
    // remove: function() {
    //   sessionStorage.clear();
    // }
  },
  mounted() {
    if (sessionStorage.getItem("data")) {
      this.check = false;
    }
    // else {
    //   this.check = true;
    // }
  }
};
</script>