<template>
  <h-container v-bind= "this"></h-container>
</template>

<script lang="ts">
import Vue from "vue";
import HContainer from "../Components/HContainer.vue";

export default Vue.extend({
  data: () => ({
    links: [{ name: "Index", link: "/" }],
    siteName:"Goligoli",
    title:"Index"
  }),
  components: {
    HContainer
  }
});
</script>
