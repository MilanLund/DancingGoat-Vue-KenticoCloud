import moment from 'moment';

export const articleTeaser = {
	props: ['passedItem'],
	data() {
		return {
			item: {}
		}
	},
	updated() {
		this.item = this.passedItem;
	},
	created() {
		this.item = this.passedItem;
	},
	computed: {
		articleLink() {
			return `/${this.$route.params.lang}/articles/${this.item.elements.url_pattern}`;
		},
		articleDate() {
			moment.locale(this.$route.params.lang);
			return moment(this.item.elements.post_date).format('MMMM D');
		}
	}
};

