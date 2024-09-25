<script setup lang="ts">
const props = defineProps({
	logotypeSize: {
		type: Number,
		default: 28,
	}
});

let getLogoComputedCss = {
		'font-size': props.logotypeSize + 'px',
};
</script>

<template>
	<div class="logotype" :style="getLogoComputedCss">
		glance
	</div>
</template>

<style scoped lang="scss">
.logotype {
	width: 100%;
	text-transform: uppercase;
	font-family: DisketMono, sans-serif;
	color: #9610B8; background-image: -webkit-linear-gradient(315deg, #9610b8 0%, #260dc1 100%);
	background-clip: text;
	-webkit-background-clip: text;
	text-fill-color: transparent;
	-webkit-text-fill-color: transparent;
	text-align: center;
}
</style>