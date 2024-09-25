<script setup lang="ts">

import {SwiperSlide} from "swiper/vue";

import phoneImage from '@/assets/images/catalogMenu/phone.png'
import BaseSwiper from "@/components/devTools/swipers/BaseSwiper/BaseSwiper.vue";
import CatalogMenuItem from "@/components/listItems/CatalogMenuItem/CatalogMenuItem.vue";
import SiteContainer from "@/components/SiteContainer/SiteContainer.vue";

const MENU = [
	{
		name: 'Смартфоны',
		image: phoneImage,
	},
	{
		name: 'Смартфоны',
		image: phoneImage,
	},
	{
		name: 'Смартфоны',
		image: phoneImage,
	},
	{
		name: 'Смартфоны',
		image: phoneImage,
	},
	{
		name: 'Смартфоны',
		image: phoneImage,
	},
	{
		name: 'Смартфоны',
		image: phoneImage,
	},
	{
		name: 'Смартфоны',
		image: phoneImage,
	},
	{
		name: 'Смартфоны',
		image: phoneImage,
	},
	{
		name: 'Смартфоны',
		image: phoneImage,
	},
];
</script>

<template>
	<div class="menu-list">
		<SiteContainer class="menu-list__title">
			Каталог
		</SiteContainer>
		<div class="menu-list__swiper">
			<BaseSwiper
					:centeredSlides="false"
					:isBlackArrow="true"
					class="catalog__swiper-wrapper"
			>
				<SwiperSlide v-for="banner in MENU" class="swiper__slide">
					<CatalogMenuItem :name="banner.name" :image="banner.image"/>
				</SwiperSlide>
			</BaseSwiper>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import "@/assets/mixins";

.catalog__swiper-wrapper {
	padding-left: 16px;
	padding-right: 16px;

	@include adaptive {
		padding-left: 0;
		padding-right: 0;
	}
}

.menu-list {
	gap: 28px;
	display: flex;
	flex-direction: column;

	&__title {
		font-size: 32px;
		color: var(--vt-c-black);
	}
}
</style>