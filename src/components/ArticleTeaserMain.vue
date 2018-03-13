<template>
	<div class="article-tile article-tile-large">
		<div class="col-md-12 col-lg-6">
			<router-link :to="articleLink">
				<img :alt="item.heading" class="article-tile-image" :src="item.image" :title="item.heading">
			</router-link>
		</div>
		<div class="col-md-12 col-lg-6">
			<div class="article-tile-date">{{ articleDate }}</div>
			<div class="article-tile-content">
				<h2><router-link :to="articleLink">{{ item.heading }}</router-link></h2>
				<p class="article-tile-text lead-paragraph">{{ item.description }}</p>
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