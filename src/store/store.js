import Vue from 'vue';
import Vuex from 'vuex';
import masterEn from '../content/en/master.json';
import masterEs from '../content/es/master.json';
import homeEn from '../content/en/home.json';
import homeEs from '../content/es/home.json';
//import articlesEn from '../content/en/articles.json';
//import articlesEs from '../content/es/articles.json';

import Delivery from 'kentico-cloud-delivery-js-sdk';

Vue.use(Vuex);

import vuexI18n from 'vuex-i18n';

var content = {
	en: {
		master: masterEn,
		home: homeEn
	},
	es: {
		master: masterEs,
		home: homeEs
	}
};

export const store = new Vuex.Store({
	mutations: {
		FETCH_ARTICLES(state, lang) {
			Vue.i18n.add('en-us', lang[0]);
			Vue.i18n.add('es-es', lang[1]);
		}
	},
	actions: {
		fetchArticles({ commit }, { self }) {
			const project = new Delivery('7c11f814-8fd4-4211-8de0-b0b6f994dcf3');

			project.getContent({
				articlesEn: '?system.type[in]=article&language=en-US',
				articlesEs: '?system.type[in]=article&language=es-ES',
			})
			.then(project.getValues)
			.then((data) => {
				data.articlesEn.items.sort((a,b) => {
					return new Date(b.elements.post_date) - new Date(a.elements.post_date);
				});
				data.articlesEs.items.sort((a,b) => {
					return new Date(b.elements.post_date) - new Date(a.elements.post_date);
				});
				commit("FETCH_ARTICLES", [{ articles: data.articlesEn.items }, { articles: data.articlesEs.items }]);
			})
		}
	}
});

Vue.use(vuexI18n.plugin, store);

Vue.i18n.add('en-us', content.en);
Vue.i18n.add('es-es', content.es);
Vue.i18n.set('en-us');



