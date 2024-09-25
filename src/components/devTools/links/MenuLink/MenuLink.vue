<script setup lang="ts">

import SiteImage from "@/components/devTools/images/SiteImage/SiteImage.vue";
import BaseLink from "@/components/devTools/links/BaseLink/BaseLink.vue";
import {ref} from "vue";
import SiteIcon from "@/components/devTools/images/SiteIcon/SiteIcon.vue";

const props = defineProps({
	name: {
		required: true,
		type: String,
	},
	href: {
		required: true,
		type: String,
	},
	iconComponent: {
		required: true,
	},
});

let isRouterLink = ref(true);
</script>

<template>
	<BaseLink
			:href="href"
			class="menu-link"
			:isRouterLink="isRouterLink"
	>
		<SiteIcon :iconComponent="iconComponent" class="menu-link__icon"/>
		<div>
			{{ name }}
		</div>
	</BaseLink>
</template>

<style scoped lang="scss">
.menu-link {
	display: flex;
	flex-direction: column;
	gap: 8px;
	justify-content: space-between;
	align-items: center;

	&:hover {
		& path {
			stroke: var(--vt-c-dark-blue) !important;
		}
	}

	&__icon {
		flex-grow: 1;
	}
}
</style>