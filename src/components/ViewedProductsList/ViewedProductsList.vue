<script setup lang="ts">

import {SwiperSlide} from "swiper/vue";

import BaseSwiper from "@/components/devTools/swipers/BaseSwiper/BaseSwiper.vue";
import ProductItem from "@/components/listItems/ProductItem/ProductItem.vue";
import laptopImage from '@/assets/images/banners/laptopBanner.png'
import type {Product} from "@/types/product.types";
import MainContentWrapper from "@/components/MainContentWrapper/MainContentWrapper.vue";

const PRODUCTS: Array<Product> = [
	{
		name: 'Смартфон Apple iPhone 12 64GB',
		price: 100000,
		currency: 'R',
		discount: 10,
		isStock: true,
		isLiked: true,
		images: [
			laptopImage,
			laptopImage,
			laptopImage,
		],
		isInBasket: false,
		description: 'Соси мой хуй мразь',
	},
	{
		name: 'Смартфон Apple iPhone 12 64GB',
		price: 100000,
		currency: 'R',
		discount: 10,
		isStock: true,
		isLiked: true,
		images: [
			laptopImage,
			laptopImage,
			laptopImage,
		],
		isInBasket: false,
		description: 'Соси мой хуй мразь',
	},
	{
		name: 'Смартфон Apple iPhone 12 64GB',
		price: 100000,
		currency: 'R',
		discount: 10,
		isStock: true,
		isLiked: true,
		images: [
			laptopImage,
			laptopImage,
			laptopImage,
		],
		isInBasket: false,
		description: 'Соси мой хуй мразь',
	},
	{
		name: 'Смартфон Apple iPhone 12 64GB',
		price: 100000,
		currency: 'R',
		discount: 10,
		isStock: true,
		isLiked: true,
		images: [
			laptopImage,
			laptopImage,
			laptopImage,
		],
		isInBasket: false,
		description: 'Соси мой хуй мразь',
	},
	{
		name: 'Смартфон Apple iPhone 12 64GB',
		price: 100000,
		currency: 'R',
		discount: 10,
		isStock: true,
		isLiked: true,
		images: [
			laptopImage,
			laptopImage,
			laptopImage,
		],
		isInBasket: false,
		description: 'Соси мой хуй мразь',
	},
	{
		name: 'Смартфон Apple iPhone 12 64GB',
		price: 100000,
		currency: 'R',
		discount: 10,
		isStock: true,
		isLiked: true,
		images: [
			laptopImage,
			laptopImage,
			laptopImage,
		],
		isInBasket: false,
		description: 'Соси мой хуй мразь',
	},
	{
		name: 'Смартфон Apple iPhone 12 64GB',
		price: 100000,
		currency: 'R',
		discount: 10,
		isStock: true,
		isLiked: true,
		images: [
			laptopImage,
			laptopImage,
			laptopImage,
		],
		isInBasket: false,
		description: 'Соси мой хуй мразь',
	},
	{
		name: 'Смартфон Apple iPhone 12 64GB',
		price: 100000,
		currency: 'R',
		discount: 10,
		isStock: true,
		isLiked: true,
		images: [
			laptopImage,
			laptopImage,
			laptopImage,
		],
		isInBasket: false,
		description: 'Соси мой хуй мразь',
	},
	{
		name: 'Смартфон Apple iPhone 12 64GB',
		price: 100000,
		currency: 'R',
		discount: 10,
		isStock: true,
		isLiked: true,
		images: [
			laptopImage,
			laptopImage,
			laptopImage,
		],
		isInBasket: false,
		description: 'Соси мой хуй мразь',
	},
	{
		name: 'Смартфон Apple iPhone 12 64GB',
		price: 100000,
		currency: 'R',
		discount: 10,
		isStock: true,
		isLiked: true,
		images: [
			laptopImage,
			laptopImage,
			laptopImage,
		],
		isInBasket: false,
		description: 'Соси мой хуй мразь',
	},
];
</script>

<template>
	<div class="viewed">
		<MainContentWrapper class="viewed__title">
			Вы смотрели
		</MainContentWrapper>
		<div class="viewed__swiper">
			<BaseSwiper
					:centeredSlides="false"
					:isBlackArrow="true"
					class="products__list-wrapper"
			>
				<SwiperSlide v-for="product in PRODUCTS" class="viewed__slide">
					<ProductItem :product="product" :showDescription="true"/>
				</SwiperSlide>
			</BaseSwiper>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import "@/assets/mixins";

.products__list-wrapper {
	padding: 20px 16px;

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

.viewed {
	display: flex;
	flex-direction: column;
	gap: 28px;

	&__title {
		font-size: 20px;
		color: var(--vt-c-black);
	}

	&__swiper {
		border-top: 1px var(--vt-c-light-blue) solid;
		border-bottom: 1px var(--vt-c-light-blue) solid;
	}
}
</style>