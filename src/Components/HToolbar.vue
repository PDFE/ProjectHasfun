<template>
    <div>
        <v-toolbar>
            <v-toolbar-side-icon @click = "toggleMenu"></v-toolbar-side-icon>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat v-for="(m,i) in links" :to="m.link" :key="i">{{m.name}}</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <v-list>
                <v-list-tile style="height:2em">
                    <v-avatar size="2em">
                        <img src="" alt="">
                    </v-avatar>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["links", "title"],
  data: () => ({
    drawer: false
  }),
  methods: {
    toggleMenu: function() {
      this.drawer = !this.drawer;
    }
  }
});
</script>
