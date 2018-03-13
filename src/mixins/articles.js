export const articles = {
	created() {
		this.$store.dispatch("fetchArticles", { self: this });     
	},
	computed: {
		isLoaded() {
			if (this.$store.state.i18n.translations[this.$route.params.lang].hasOwnProperty('articles')) {
				 return true;
			}
			return false;
		}
	}
};
