<script setup lang="ts">
import BaseLink from "@/components/devTools/links/BaseLink/BaseLink.vue";

const props = defineProps({
	iconComponent: {
		required: true,
	},
});
</script>

<template>
	<div class="icon__container">
		<component :is="iconComponent" class="menu-link__image"/>
	</div>
</template>

<style scoped lang="scss">
.icon {
	&__container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>