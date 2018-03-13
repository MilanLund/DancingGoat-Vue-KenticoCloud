<template>
	<div class="article-tile article-tile-large">
		<div class="col-md-12 col-lg-6">
			<router-link :to="articleLink">
				<img :alt="item.elements.title" class="article-tile-image" :src="item.elements.teaser_image[0]" :title="item.elements.title">
			</router-link>
		</div>
		<div class="col-md-12 col-lg-6">
			<div class="article-tile-date">{{ articleDate }}</div>
			<div class="article-tile-content">
				<h2><router-link :to="articleLink">{{ item.elements.title }}</router-link></h2>
				<p class="article-tile-text lead-paragraph">{{ item.elements.summary }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { articleTeaser } from '../mixins/articleTeaser';

export default {
	mixins: [articleTeaser]
}
</script>