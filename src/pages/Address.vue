<template>
  <div>
    <b-container>
      <h3>Create your account</h3>
      <b-input-group prepend="Username" class="mt-3">
        <b-form-input v-model="username" placeholder="Enter your Username"></b-form-input>
        <!-- <b-input-group-append>
          <b-button variant="outline-success" @click="submittion">Button</b-button>
        </b-input-group-append>-->
      </b-input-group>
      <b-input-group prepend="Email" class="mt-3">
        <b-form-input v-model="email" placeholder="Enter your email"></b-form-input>
      </b-input-group>
      <b-input-group prepend="Password" class="mt-3">
        <b-form-input v-model="password" type="password" placeholder="Enter your password"></b-form-input>
      </b-input-group>
      <br />
      <b-button variant="outline-success" @click="submittion">Submit</b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    submittion: function() {
      if (this.username != "" && this.email != "" && this.password != "") {
        alert("success");
        // this.username = "";
        // this.email = "";
        // this.password = "";
      } else {
        alert("fail to add");
      }
      console.log("....." + this.username);
      console.log("....." + this.email);
      console.log("....." + this.password);
    }
  }
};
</script>