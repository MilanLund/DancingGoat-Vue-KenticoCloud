import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { store } from './store/store';
import Home from './components/Home.vue';
import Articles from './components/Articles.vue';

Vue.use(VueRouter);

const routes = [{
	path: '/',
	redirect: '/en-us/home'
},{
	path: '/:lang',
	redirect: '/:lang/home'
}, {
	path: '/:lang/home',
	component: Home
},{
	path: '/:lang/articles',
	component: Articles
}];

const router = new VueRouter({
	routes
});

router.beforeEach((to, from, next) => {
	let language = to.params.lang;
	if (!language) {
	  language = 'en-us';
	}

	Vue.i18n.set(language);
	next();
	
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
