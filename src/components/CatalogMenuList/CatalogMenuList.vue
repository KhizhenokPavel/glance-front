<script setup lang="ts">

import {SwiperSlide} from "swiper/vue";

import phoneImage from '@/assets/images/catalogMenu/phone.png'
import BaseSwiper from "@/components/devTools/swipers/BaseSwiper/BaseSwiper.vue";
import CatalogMenuItem from "@/components/listItems/CatalogMenuItem/CatalogMenuItem.vue";
import MainContentWrapper from "@/components/MainContentWrapper/MainContentWrapper.vue";
import BaseLink from "@/components/devTools/links/BaseLink/BaseLink.vue";

const MENU = [
	{
		title: 'Смартфоны',
		sectionName: 'phones',
		image: phoneImage,
	},
	{
		title: 'Смартфоны',
		sectionName: 'phones',
		image: phoneImage,
	},
	{
		title: 'Смартфоны',
		sectionName: 'phones',
		image: phoneImage,
	},
	{
		title: 'Смартфоны',
		sectionName: 'phones',
		image: phoneImage,
	},
	{
		title: 'Смартфоны',
		sectionName: 'phones',
		image: phoneImage,
	},
	{
		title: 'Смартфоны',
		sectionName: 'phones',
		image: phoneImage,
	},
	{
		title: 'Смартфоны',
		sectionName: 'phones',
		image: phoneImage,
	},
	{
		title: 'Смартфоны',
		sectionName: 'phones',
		image: phoneImage,
	},
	{
		title: 'Смартфоны',
		sectionName: 'phones',
		image: phoneImage,
	},
];
</script>

<template>
	<div class="menu-list">
		<MainContentWrapper class="menu-list__title">
			Каталог
		</MainContentWrapper>
		<div class="menu-list__swiper">
			<BaseSwiper
					:centeredSlides="false"
					:isBlackArrow="true"
					class="catalog__swiper-wrapper"
			>
				<SwiperSlide v-for="menuItem in MENU" class="swiper__slide">
					<BaseLink :href="'/catalog/' + menuItem.sectionName" :isRouterLink="true">
						<CatalogMenuItem :name="menuItem.title" :image="menuItem.image"/>
					</BaseLink>
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
		font-size: 20px;
		color: var(--vt-c-black);
	}
}
</style>