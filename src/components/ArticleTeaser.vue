<template>
	<div class="col-md-3">
		<div class="article-tile">
			<router-link :to="articleLink">
				<img :alt="item.heading" class="article-tile-image" :src="item.image" :title="item.heading">
			</router-link> 
			<div class="article-tile-date">{{ articleDate }}</div>
			<div class="article-tile-content">
				<h2 class="h4"><router-link :to="articleLink">{{ item.heading }}</router-link></h2>
				<p class="article-tile-text">{{ item.description }}</p>
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

