window._ = require('lodash')

// Axios
window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.headers.common['Accept'] = 'application/json'
window.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// Vue
window.Vue = require('vue');
const files = require.context('./', true, /\.vue$/i)
// resources/components/ExampleComponent.vue => <example-component></example-component>
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false
import router from './routes'

const app = new Vue({
    el: '#app',
    router
});

app.$on('scrollToTop', function() {
    document.getElementById('app').scrollIntoView({ 
        behavior: 'smooth' 
    });
})
