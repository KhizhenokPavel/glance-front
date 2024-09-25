<script setup lang="ts">
import type {Product} from "@/types/product.types.ts";

import BaseSwiper from "@/components/devTools/swipers/BaseSwiper/BaseSwiper.vue";
import {SwiperSlide} from "swiper/vue";
import ProductItem from "@/components/listItems/ProductItem/ProductItem.vue";

const props = defineProps({
	products: {
		type: Array<Product>,
		required: true,
	}
});
</script>

<template>
	<BaseSwiper
			:centeredSlides="false"
			:isBlackArrow="true"
	>
		<SwiperSlide v-for="product in products" class="swiper__slide">
			<ProductItem :product="product"/>
		</SwiperSlide>
	</BaseSwiper>
</template>

<style scoped lang="scss">

</style>