<script setup lang="ts">

import {SwiperSlide} from "swiper/vue";

import BaseSwiper from "@/components/devTools/swipers/BaseSwiper/BaseSwiper.vue";
import SiteContainer from "@/components/SiteContainer/SiteContainer.vue";
import ProductItem from "@/components/listItems/ProductItem/ProductItem.vue";
import laptopImage from '@/assets/images/banners/laptopBanner.png'
import type {Product} from "@/types/product.types";

const PRODUCTS: Array<Product> = [
  {
    name: 'Смартфон Apple iPhone 12 64GB',
    price: 10000,
    currency: 'BYN',
    discount: 10,
    isStock: true,
    isLiked: true,
    images: [
      laptopImage,
      laptopImage,
      laptopImage,
    ],
    isInBasket: true,
    description: 'Соси мой хуй мразь',
  }
];
</script>

<template>
	<div class="promotions">
		<SiteContainer class="promotions__title">
			Акции
		</SiteContainer>
    <div class="promotions__swiper">
      <BaseSwiper
          :centeredSlides="false"
          :isBlackArrow="true"
      >
        <SwiperSlide v-for="product in PRODUCTS" class="promotions__slide">
          <ProductItem :product="product" :showDescription="true"/>
        </SwiperSlide>
      </BaseSwiper>
    </div>
	</div>
</template>

<style scoped lang="scss">
@import "@/assets/mixins";

.menu-list {
	gap: 28px;
	display: flex;
	flex-direction: column;

	&__title {
		font-size: 32px;
		color: var(--vt-c-black);
	}
}

.promotions {
  display: flex;
  flex-direction: column;
  gap: 28px;

  &__title {
    font-size: 32px;
    color: var(--vt-c-black);
  }

  &__swiper {
    padding: 20px 16px;
    border-top: 1px var(--vt-c-light-blue) solid;
    border-bottom: 1px var(--vt-c-light-blue) solid;
  }
}
</style>