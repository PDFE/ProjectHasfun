import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import routes from "./routes";
import Vuetity from "vuetify";
import Api from "./Methods/Api";
import '../node_modules/vuetify/dist/vuetify.min.css';

Vue.use(VueRouter);
Vue.use(Vuetity);
Vue.use(Api);
Vue.use(Vuex);
const app = new Vue({
    template: "<router-view></router-view>",
    router: new VueRouter({ routes }),
}).$mount("#app");
