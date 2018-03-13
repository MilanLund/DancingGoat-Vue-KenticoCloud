<template>
  <div id="app">
		<Header />
		<div class="container">
			<router-view></router-view>
		</div>
		<Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
	components: {
		Header,
		Footer
	}
}
</script>
