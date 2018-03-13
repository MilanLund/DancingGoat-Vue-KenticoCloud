<template>
	<header class="header" role="banner">
		<div class="menu">
			<div class="container">
				<nav role="navigation">
					<ul>
						<li v-for="(item, index) in $t('master.navigation')" :key="index">
							<router-link :to="item[1]">{{ item[0] }}</router-link> 
						</li>
					</ul>
				</nav>
				<div class="additional-menu-buttons user-menu">
					<nav role="navigation">
						<ul class="dropdown-items-list dropdown-desktop-visible">
							<li v-for="(item, index) in localeRoutes" :key="index">
								<router-link :to="item.url">{{ item.name }}</router-link> 
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
		<div class="header-row">
			<div class="container">
				<div class="col-xs-8 col-md-8 col-lg-4 logo">
					<h1 class="logo">
						<router-link class="logo-link" :to="rootRoute">Dancing Goat</router-link> 
					</h1>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
  computed: {
	  localeRoutes() {
		  var items = [];
		  this.$i18n.locales().forEach(element => {
			  var item = {
				  name: (element === 'en-us' ? 'English' : 'Español'),
				  url: `/${element}/${this.$route.path.replace('/en-us/', '').replace('/es-es/', '')}`
			  };
			  items.push(item);
		  });
		  return items;
	  },
	  rootRoute() {
		  return `/${this.$route.params.lang}`;
	  } 
  }
}
</script>
