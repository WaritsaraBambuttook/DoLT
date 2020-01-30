<template>
  <mdb-stepper simpleH :steps="9">
    <template #1>
      <form>
        <mdb-input label="name" />
      </form>
    </template>
    <template #2>
      <form>
        <mdb-input label="email" type="email" />
      </form>
    </template>
    <template #3>
      <form>
        <mdb-input label="message" type="textarea" :rows="4" />
      </form>
    </template>
    <template #4>
      <p>Finish!</p>
    </template>
  </mdb-stepper>
</template>
<script>
import { mdbStepper, mdbInput } from "mdbvue";
export default {
  components: {
    mdbStepper,
    mdbInput
  }
};
</script>