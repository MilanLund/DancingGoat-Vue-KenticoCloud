<template>
	<div>
		<section class="banner-section" :style="bgImageHero">
			<h2 class="banner-heading">{{ $t('home.hero.heading') }}</h2>
			<p class="banner-text">{{ $t('home.hero.text') }}</p>
		</section>
		<div class="row">
			<h1 class="title-tab">{{ $t('home.articles.heading') }}</h1>
		</div>
		<div class="row" v-if="isLoaded">
			<div v-for="(item, index) in $t('articles')" :key="index">
				<div v-if="index > 0 && index < 5">
					<ArticleTeaser :passed-item="item" />
				</div>
				<div v-if="index === 0">
					<ArticleTeaserMain :passed-item="item" />
				</div>	
			</div>
		</div>
		<div class="row">
			<div class="clear center-text">
				<router-link class="btn btn-more" :to="articlesLink">{{ $t('home.articles.btnText') }}</router-link> 
			</div>
		</div>
		<div class="row">
			<h1 class="title-tab">{{ $t('home.story.heading') }}</h1>
			<div class="col-sm-12">
				<div class="ourstory-section center-text" :style="bgImageStory">
					{{ $t('home.story.text') }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ArticleTeaser from './ArticleTeaser.vue';
import ArticleTeaserMain from './ArticleTeaserMain.vue';
import { articles } from '../mixins/articles';

export default {
	mixins: [articles],
	computed: {
		bgImageHero() {
			return `background-image: url('${this.$store.state.i18n.translations[this.$route.params.lang]['home.hero.image']}')`;
		},
		bgImageStory() {
			return `background-image: url('${this.$store.state.i18n.translations[this.$route.params.lang]['home.story.image']}')`;
		},
		articlesLink() {
			return `/${this.$route.params.lang}/articles`;
		}
	},
	components: {
		ArticleTeaser,
		ArticleTeaserMain
	}
}
</script>

