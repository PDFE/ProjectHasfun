<template>
    <v-footer>
        <v-layout align-center justify-center>
                © 2018 {{siteName}}
        </v-layout>
    </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        siteName:String
    }
})
</script>
