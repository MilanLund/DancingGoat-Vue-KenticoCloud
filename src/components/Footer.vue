<template>
	<div class="footer-wrapper">
		<footer role="contentinfo">
			<div class="footer-container">
				<div class="container">
					<div class="row">
						<div class="col-md-4 col-lg-4 footer-col">
							<h3 class="contact-title">{{ $t('master.contact.heading') }}</h3>
							<p>
								{{ $t('master.contact.phone') }}
								<br>
								<a :href="$t('master.contact.email')">{{ $t('master.contact.email') }}</a>
								<br><br>
							</p>
							<div v-html="$t('master.contact.address')"></div>
						</div>
						<div class="col-md-4 col-lg-4 footer-col">
							<h3>{{ $t('master.social.heading') }}</h3>
							<a class="followus-link" target="_blank" :href="$t('master.social.facebook')">
								<img alt="Follow us on Facebook" class="" src="../assets/images/facebook-icon.png" title="Follow us on Facebook">
							</a>
							<a class="followus-link" target="_blank" :href="$t('master.social.twitter')">
								<img alt="Follow us on Twitter" class="" src="../assets/images/twitter-icon.png" title="Follow us on Twitter">
							</a>
						</div>
						<div class="col-md-4 col-lg-4 footer-col"></div>
					</div>
				</div>
			</div>
			<div class="container copyright">
				{{ $t('master.copyright') }}
			</div>
		</footer>
	</div>
</template>

<script>
export default {
  computed: {

  }
}
</script>
