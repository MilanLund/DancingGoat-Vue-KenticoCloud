<template>
	<div class="col-md-3">
		<div class="article-tile">
			<router-link :to="articleLink">
				<img :alt="item.elements.title" class="article-tile-image" :src="item.elements.teaser_image[0]" :title="item.elements.title">
			</router-link> 
			<div class="article-tile-date">{{ articleDate }}</div>
			<div class="article-tile-content">
				<h2 class="h4"><router-link :to="articleLink">{{ item.elements.title }}</router-link></h2>
				<p class="article-tile-text">{{ item.elements.summary }}</p>
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

