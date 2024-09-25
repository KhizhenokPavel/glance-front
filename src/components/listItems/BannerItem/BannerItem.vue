<script setup lang="ts">
	import SiteImage from "@/components/devTools/images/SiteImage/SiteImage.vue";

	const props = defineProps({
		text: {
			type: String,
			default: '',
		},
		image: {
			type: String,
			default: '',
		}
	});
</script>

<template>
	<div class="banner">
		<div class="banner__content">
			<div class="banner__content__text" v-html="text"></div>
			<SiteImage :src="image" class="banner__content__image"/>
		</div>
	</div>
</template>

<style scoped lang="scss">
.banner {
	min-width: 275px;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	background-color: var(--vt-c-black);
	border-radius: 8px;

	&__content {
		max-width: 930px;
		width: 100%;
		margin: 21px 12px 21px 22px;
		position: relative;

		&__text {
			color: var(--vt-c-white);
			font-size: 14px;
			position: relative;
			z-index: 20;
		}

		&__image {
			position: absolute;
			right: 0;
			top: 0;
		}
	}
}
</style>