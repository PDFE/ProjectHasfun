import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import Vuetity from "vuetify";
import '../node_modules/vuetify/dist/vuetify.min.css';

Vue.use(VueRouter);
Vue.use(Vuetity);
const app = new Vue({
    template:"<router-view></router-view>",
    router:new VueRouter({routes}),
}).$mount("#app");