<script setup lang="ts">
const props = defineProps({
	href: {
		required: true,
		type: String,
	},
	isRouterLink: {
		type: Boolean,
		default: false
	}
});
</script>

<template>
	<RouterLink
			:to="href"
			class="site-link"
			v-if="isRouterLink"
	>
		<slot></slot>
	</RouterLink>
	<a
			class="site-link"
			:href="href"
			v-else
	>
		<slot></slot>
	</a>
</template>

<style scoped lang="scss">
.site-link {
	text-decoration: none;
	color: var(--vt-c-more-dark-grey);
	font-size: 14px;
	transition: color 0.3s ease;

	&:hover  {
		color: var(--vt-c-dark-blue);
	}
}
</style>