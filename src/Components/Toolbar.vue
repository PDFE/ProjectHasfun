<template>
    <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat v-for="(m,i) in links" :to="m.link" :key="i">{{m.name}}</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:["links","title"]
})
</script>
