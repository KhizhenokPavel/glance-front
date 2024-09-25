<script setup lang="ts">

import {ref} from "vue";
import LoadingSite from "@/components/LoadingSite/LoadingSite.vue";
import BaseHeader from "@/components/headers/BaseHeader/BaseHeader.vue";

const START_ANIMATION_TIME = 1500;

let showLoadingPage = ref(true);

function hideLoadingPage() {
	showLoadingPage.value = false;
}

setTimeout(hideLoadingPage, START_ANIMATION_TIME);
</script>

<template>
	<LoadingSite :show="showLoadingPage"/>
	<BaseHeader/>
	<main class="main__container">
		<RouterView/>
	</main>
</template>

<style scoped lang="scss">
@import "@/assets/mixins.scss";

.main__container {
	padding-top: 202px;
	padding-bottom: 96px;
	min-height: 100vh;

	@include adaptive {
		padding-top: 88px;
		padding-bottom: 0;
	}
}
</style>
