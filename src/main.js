import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './plugins/iview.js'

/** mavonEditor Markdown editor */
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor);
/** mavonEditor Markdown editor */

/** vue-clipboard2 */
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);
/** vue-clipboard2 */

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')