<script setup lang="ts">
import {ref} from "vue";

import BaseInput from "@/components/devTools/inputs/BaseInput/BaseInput.vue";
import SiteIcon from "@/components/devTools/images/SiteIcon/SiteIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";

let searchValue = ref('');
let searchImageIconComponent = ref(SearchIcon);
</script>

<template>
	<BaseInput v-model="searchValue" class="search-input">
		<div class="input__content">
			<SiteIcon class="input__content--icon" :iconComponent="searchImageIconComponent"/>
			<div class="input__content--placeholder">
				Поиск
			</div>
		</div>
	</BaseInput>
</template>

<style scoped lang="scss">
.input__content {
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	top: 0;
	left: 0;
	gap: 16px;
	align-items: center;
	padding-left: 16px;

	&--icon {
		max-height: 18px;
		height: 100%;
	}

	&--placeholder {
		color: var(--vt-c-more-dark-grey);
		font-size: 16px;
		font-family: Roboto, sans-serif;
	}
}
</style>