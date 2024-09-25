<script setup lang="ts">

import Logotype from "@/components/Logotype/Logotype.vue";
import {ref} from "vue";

const props = defineProps({
	show: {
		type: Boolean,
		default: false,
	},
});

let loadingLogoFontSize = ref(60);
</script>

<template>
	<div class="loader" v-if="show">
		<div class="loader__animation">
		</div>
		<Logotype :logotypeSize="loadingLogoFontSize"/>
	</div>
</template>

<style scoped lang="scss">

.loader {
	position: absolute;
	inset: 0;
	display: flex;
	background-color: #d8ddff;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	z-index: 1000;

	&__text {
		font-size: 60px;
		text-transform: uppercase;
		font-family: DisketMono, sans-serif;
		color: #9610B8; background-image: -webkit-linear-gradient(315deg, #9610b8 0%, #260dc1 100%);
		background-clip: text;
		-webkit-background-clip: text;
		text-fill-color: transparent;
		-webkit-text-fill-color: transparent;
	}

	&__animation {
		height: 140%;
		background-color: rgba(0, 0, 0, 0.3);
		position: absolute;
		right: -20%;
		bottom: -20%;
		box-shadow: 0 0 300px 200px rgb(255, 255, 255);

		animation-duration: 1.5s;
		animation-name: blur-line;
		animation-iteration-count: infinite;
	}
}

@keyframes blur-line {
	from {
		transform: translateX(-130vw) rotate(15deg);
	}

	to {
		transform: rotate(15deg);
	}
}
</style>