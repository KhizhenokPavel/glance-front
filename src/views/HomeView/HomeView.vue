<script setup lang="ts">

import BannersList from "@/components/BannersList/BannersList.vue";
import CatalogMenuList from "@/components/CatalogMenuList/CatalogMenuList.vue";
import PromotionsList from "@/components/PromotionsList/PromotionsList.vue";
import ViewedProductsList from "@/components/ViewedProductsList/ViewedProductsList.vue";
</script>

<template>
	<div class="home">
    <BannersList class="banners__container"/>
    <CatalogMenuList class="catalog-menu__container"/>
		<ViewedProductsList class="promotions__container"/>
		<PromotionsList class="promotions__container"/>
	</div>
</template>

<style scoped lang="scss">
@import "@/assets/mixins";

.home {
	display: flex;
	flex-direction: column;
	gap: 40px;
	padding-top: 40px;
}

.banners__container,
.catalog-menu__container,
.promotions__container {
	@include adaptive {
		width: 100%;
		max-width: 1280px;
		margin: 0 auto;
	}
}
</style>