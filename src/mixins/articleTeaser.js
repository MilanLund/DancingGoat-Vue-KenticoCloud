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
			return `/${this.$route.params.lang}/articles${this.item.slug}`;
		},
		articleDate() {
			moment.locale(this.$route.params.lang);
			return moment(this.item.date).format('MMMM D');
		}
	}
};

