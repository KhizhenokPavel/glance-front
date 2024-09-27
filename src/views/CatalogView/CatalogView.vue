<script setup lang="ts">

import CatalogMenuList from "@/components/CatalogMenuList/CatalogMenuList.vue";
</script>

<template>
	<div class="catalog">
		<CatalogMenuList class="catalog-menu__container"/>
	</div>
</template>

<style scoped lang="scss">
	.catalog {
		display: flex;
		flex-direction: column;
		gap: 40px;
		padding-top: 40px;
	}
</style>