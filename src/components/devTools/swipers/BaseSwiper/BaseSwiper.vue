<script setup lang="ts">

import {Swiper} from "swiper/vue";
import {Navigation} from "swiper/modules";

import '@/assets/node/navigation.scss';
import '@/assets/node/swiper.scss';

const props = defineProps({
	spaceBetween: {
		type: [String, Number],
		default: '16',
	},
	centeredSlides: {
		type: Boolean,
		default: true,
	},
	initialSlide: {
		type: Number,
		default: 0,
	},
	navigation: {
		type: Boolean,
		default: true,
	},
	isBlackArrow: {
		type: Boolean,
		default: false,
	}
});

let modules = [Navigation];
</script>

<template>
	<Swiper
			:spaceBetween="spaceBetween"
			:slidesPerView="'auto'"
			:centeredSlides="centeredSlides"
			:initialSlide="initialSlide"
			:navigation="navigation"
			:modules="modules"
			:class="{ 'swiper-button-black': isBlackArrow }"
			class="swiper"
	>
		<slot></slot>
	</Swiper>
</template>

<style scoped lang="scss">

</style>