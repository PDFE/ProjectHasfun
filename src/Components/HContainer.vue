<template>
  <v-app>
    <h-toolbar :title="title" :links="links" app></h-toolbar>
    <v-content>
        <v-container fluid>
            <slot></slot>
        </v-container>
    </v-content>
    <h-footer :siteName="siteName"></h-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HToolbar from "./HToolbar.vue";
import HFooter from "./HFooter.vue";

export default Vue.extend({
  props:["links","siteName","title"],
  components: {
    HToolbar,
    HFooter
  }
});
</script>
