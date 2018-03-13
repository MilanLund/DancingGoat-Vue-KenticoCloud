import Vue from 'vue';
import Vuex from 'vuex';
import masterEn from '../content/en/master.json';
import masterEs from '../content/es/master.json';
import homeEn from '../content/en/home.json';
import homeEs from '../content/es/home.json';
import articlesEn from '../content/en/articles.json';
import articlesEs from '../content/es/articles.json';

Vue.use(Vuex);

import vuexI18n from 'vuex-i18n';
export const store = new Vuex.Store();
Vue.use(vuexI18n.plugin, store);

var content = {
	en: {
		master: masterEn,
		home: homeEn,
		articles: articlesEn 
	},
	es: {
		master: masterEs,
		home: homeEs,
		articles: articlesEs
	}
};

Vue.i18n.add('en-us', content.en);
Vue.i18n.add('es-es', content.es);
Vue.i18n.set('en-us');