window._ = require('lodash')
import VueTippy, { TippyComponent } from "vue-tippy";

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

Vue.use(VueTippy, {
  directive: "tippy", // => v-tippy
  flipDuration: 0,
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false
      }
    }
  }
});
Vue.component("tippy", TippyComponent);

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


var backgroundImages = [
    'dist/img/background/calus.webp',
    'dist/img/background/beyondlight.webp',
    'dist/img/background/COS.jpg',
    'dist/img/background/dsc.jpg',
    'dist/img/background/eow.webp',
    'dist/img/background/forsaken.png',
    'dist/img/background/gos.jpeg',
    'dist/img/background/hunter.jpg',
    'dist/img/background/levi.png',
    'dist/img/background/levi.webp',
    'dist/img/background/lw.jpg',
    'dist/img/background/lw2.jpeg',
    'dist/img/background/sotp.jpg',
    'dist/img/background/spire.jpg',
    'dist/img/background/traveler.jpg'
];

var selectedRandomBackground = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
document.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.95)), url('"+selectedRandomBackground+"')"; 
