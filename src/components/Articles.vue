<template>
	<div v-if="isLoaded">
		<div v-for="(item, index) in $t('articles')" :key="index">
			<div v-if="index % 4 === 0" class="clear"></div>
			<ArticleTeaser :passed-item="item" />	
		</div>
	</div>
</template>
<script>
import ArticleTeaser from './ArticleTeaser.vue';
import { articles } from '../mixins/articles';

export default {
	mixins: [articles],
	components: {
		ArticleTeaser
	}
}
</script>

