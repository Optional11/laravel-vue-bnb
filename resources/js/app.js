require('./bootstrap');

import VueRouter from "vue-router";
import router from "./routes";
import Index from "./Index"
import moment from "moment";
import StarRating from './shared/components/StartRating';
window.Vue = require('vue');

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.use(VueRouter);

Vue.filter("fromNow", value => moment(value).fromNow());

Vue.component("star-rating", StarRating);

const app = new Vue({
    el: '#app',
    router,
    components: {
        "index": Index,
    }
});
