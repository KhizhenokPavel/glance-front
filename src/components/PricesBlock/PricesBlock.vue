<script setup lang="ts">

const props = defineProps<{
	price: number,
	discount?: number,
	currency: string,
}>();

const PRICE_PERCENTS = 100;
</script>

<template>
	<div class="price">
		<div class="price__discount" v-if="discount">
			{{ price * (PRICE_PERCENTS - discount) / 100 }} {{ currency }}
		</div>
		<div class="price__original" :class="{ 'price__original--discount': discount }">
			{{ price }} {{ currency }}
		</div>
	</div>
</template>

<style scoped lang="scss">
.price {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;

	&__discount,
	&__original {
		color: var(--vt-c-black);
		font-weight: 500;
		font-size: 18px;
	}

	&__original.price__original--discount {
		color: var(--vt-c-grey);
		font-size: 14px;
		text-decoration: line-through;
	}
}
</style>