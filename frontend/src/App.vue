<template>
  <div>
    <HelloWorld :msg="message" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { getMessage } from "./api";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      message: "",
    };
  },
  async created() {
    const data = await getMessage();
    this.message = data.message;
  },
};
</script>