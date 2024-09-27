<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import '@/assets/node/swiper.scss';
import '@/assets/node/pagination.scss';
import {Pagination} from "swiper/modules";
import SiteImage from "@/components/devTools/images/SiteImage/SiteImage.vue";
import type {Product} from "@/types/product.types.ts";
import BaseButton from "@/components/devTools/buttons/BaseButton/BaseButton.vue";
import LikeIcon from "@/components/icons/LikeIcon.vue";
import SiteButton from "@/components/devTools/buttons/SiteButton/SiteButton.vue";
import PricesBlock from "@/components/PricesBlock/PricesBlock.vue";

const props = defineProps<{
	product: Product,
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
					<SiteImage :src="image" class="card__images--item"/>
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
			<div class="card__description--text">
				{{ product.description }}
			</div>
		</div>
		<PricesBlock :price="product.price" :currency="product.currency" :discount="product.discount"/>
		<div class="actions__like__and__stock">
			<div class="actions__stock" :class="{ 'stock': product.isStock }">
				{{ product.isStock ? 'В наличии' : 'Нет в наличии' }}
			</div>
			<div class="actions__like">
				<BaseButton class="actions__like--button" :class="{ active: product.isLiked }">
					<LikeIcon/>
				</BaseButton>
			</div>
		</div>
		<div class="actions__basket">
			<SiteButton :isActive="!product.isInBasket">В корзину</SiteButton>
		</div>
	</div>
</template>

<style scoped lang="scss">
.card {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 16px;

	&__description {
		&--title {
			font-size: 16px;
			line-height: 1.5;
		}

		&--text {
			display: none;
		}
	}

	&__images {
		position: relative;

		&--item {
			height: 158px;
		}
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
	&__like__and__stock {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__like--button {
		padding: 9px;
		box-shadow: 1px 1px 20px 0 rgba(0, 0, 0, 0.1);
		border-radius: 2px;
		width: auto;
		color: var(--vt-c-white);

		&.active {
			color: var(--vt-c-red);
		}
	}

	&__stock, .card__description--text {
		font-weight: 300;
		font-size: 14px;
		color: var(--vt-c-more-dark-grey);

		&.stock {
			color: var(--vt-c-green);

		}
	}
}
</style>