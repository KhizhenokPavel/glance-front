<script setup lang="ts">
	import { SwiperSlide } from 'swiper/vue';

	import laptopImage from '@/assets/images/banners/laptopBanner.png'
	import BannerItem from "@/components/listItems/BannerItem/BannerItem.vue";
	import BaseSwiper from "@/components/devTools/swipers/BaseSwiper/BaseSwiper.vue";

	const BANNERS = [
		{
			text: 'Суперцены <br>на все ноутбуки',
			image: laptopImage,
		},
		{
			text: 'Суперцены на все ноутбуки',
			image: laptopImage,
		},
		{
			text: 'Суперцены на все ноутбуки',
			image: laptopImage,
		},
		{
			text: 'Суперцены на все ноутбуки',
			image: laptopImage,
		},
	];

	let initialSlide = BANNERS.length / 2;
</script>

<template>
	<BaseSwiper
			:initialSlide="initialSlide"
			class="banner__swiper-wrapper"
	>
		<SwiperSlide v-for="banner in BANNERS" class="swiper__slide">
			<BannerItem :text="banner.text" :image="banner.image"/>
		</SwiperSlide>
	</BaseSwiper>
</template>

<style scoped lang="scss">
@import "@/assets/mixins";

.banner__swiper-wrapper {
	width: 100%;
	height: 149px;

	@include adaptive {
		border-radius: 8px;
		min-height: 260px;
	}
}
</style>