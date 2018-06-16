import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import VueSweetalert2 from 'vue-sweetalert2'
import VeeValidate from 'vee-validate'
import Notifications from 'vue-notification'

Vue.use(VueRouter)
Vue.use(VueSweetalert2)
Vue.use(VeeValidate)
Vue.use(Notifications)

import NProgress from 'nprogress';
import '../node_modules/nprogress/nprogress.css'

const router = new VueRouter({
	routes : Routes,
	mode: 'history'
})

router.beforeResolve((to, from, next) => {
	if (to.name) {
		NProgress.start()
	}
	next()
})

router.afterEach(() => {
	NProgress.done()
})

new Vue({
	el: '#app',
	render: h => h(App),
	router: router
})
