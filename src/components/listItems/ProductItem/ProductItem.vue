<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from "swiper/modules";
import SiteImage from "@/components/devTools/images/SiteImage/SiteImage.vue";
import type {Product} from "@/types/product.types.ts";
import BaseButton from "@/components/devTools/buttons/BaseButton/BaseButton.vue";
import LikeIcon from "@/components/icons/LikeIcon.vue";
import SiteButton from "@/components/devTools/buttons/SiteButton/SiteButton.vue";

const props = defineProps<{
  product: Product,
  showDescription?: boolean,
}>();

let modules = [Pagination];
</script>

<template>
	<div class="card">
		<div class="card__images">
      <Swiper
          :pagination="true"
          :modules="modules"
          :centeredSlides="true"
          class="card__images--swiper"
      >
        <SwiperSlide
          v-for="image in product.images"
        >
          <SiteImage :src="image"/>
        </SwiperSlide>
      </Swiper>
      <div class="card__discount">
        - {{ product.discount }} %
      </div>
		</div>
		<div class="card__description">
      <div class="card__description--title">
        {{ product.name }}
      </div>
      <div class="card__description--text" v-if="showDescription">
        {{ product.description }}
      </div>
		</div>
		<div class="card__buy-actions">
      <div class="actions__price">
        <div class="actions__price--discount" v-if="product.discount">
          {{ product.price * (1 - product.discount / 100) }} {{ product.currency }}
        </div>
        <div class="actions__price--original" :class="{ 'discount__original-prise': product.discount }">
          {{ product.price }} {{ product.currency }}
        </div>
      </div>
      <div class="actions__like__and__stock">
        <div class="actions__stock" :class="{ 'stock': product.isStock }">
          {{ product.isStock ? 'В наличии' : 'Нет в наличии' }}
        </div>
        <div class="actions__like">
          <BaseButton class="actions__like--button">
            <LikeIcon/>
          </BaseButton>
        </div>
      </div>
      <div class="actions__basket">
        <SiteButton>В корзину</SiteButton>
      </div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.card {
	display: flex;
	flex-direction: column;
  width: 100%;

  &__description--title {
    font-size: 16px;
    line-height: 1.5;
  }

  &__images {
    position: relative;
  }

  &__discount {
    position: absolute;
    top: 0;
    right: 15px;
    z-index: 5;
    padding: 12px 13px;
    background-color: var(--vt-c-yellow);
    border-radius: 8px;
  }
}

.actions {
  &__like--button {
    padding: 9px;
    box-shadow: 1px 1px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    width: auto;
  }

  &__stock, .card__description--text {
    font-weight: 300;
    font-size: 14px;
    color: var(--vt-c-more-dark-grey);

    &.stock {
      color: var(--vt-c-green);

    }
  }

  &__price {
    &--original,
    &--discount {
      font-size: 18px;
      font-weight: 500;
      line-height: 21px;
      color: var(--vt-c-black);
    }

    &--original.discount__original-prise {
      text-decoration: line-through;
      font-weight: 300;
      font-size: 14px;
    }
  }
}
</style>