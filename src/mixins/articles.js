export const articles = {
	computed: {
		sortedArticles() {
			return this.$store.state.i18n.translations[this.$route.params.lang]['articles'].sort((a,b) => {
				return new Date(b.date) - new Date(a.date);
			});
		}
	}
};
