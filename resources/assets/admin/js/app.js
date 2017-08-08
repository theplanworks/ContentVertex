import Vue from 'vue';
import axios from 'axios';
import Buefy from 'buefy';
import VeeValidate from 'vee-validate';
import router from './config/router';
import App from './components/App.vue';

Vue.use(Buefy, {
    defaultIconPack: 'fa',
});
Vue.use(VeeValidate);

Vue.prototype.$http = axios.create();

new Vue({
    el: '#root',
    router,

    render: h => h(App),
});