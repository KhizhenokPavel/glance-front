<script setup lang="ts">
const props = defineProps({
	src: {
		required: true,
		type: String,
	},
	alt: {
		type: String,
		default: '',
	},
});
</script>

<template>
	<div class="image__container">
		<img :src="src" :alt="alt" class="image">
	</div>
</template>

<style scoped lang="scss">
.image {
  object-fit: contain;
  flex-shrink: 0;

	&__container {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
	}
}
</style>