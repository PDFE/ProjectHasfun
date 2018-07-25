<template>
    <Toolbar title="Index" :links="links"></Toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
import Toolbar from '../Components/Toolbar.vue'

export default Vue.extend({
    data:()=>({
        links:[{name:"Index",link:"/"}]
    }),
    components:{
        Toolbar
    }
})
</script>
