<script setup lang="ts">

import SiteImage from "@/components/devTools/images/SiteImage/SiteImage.vue";
import searchImageIcon from '@/assets/images/icons/search.svg';

const props = defineProps({
	isSearchInput: {
		type: Boolean,
		default: false,
	},
	placeHolder: {
		type: String,
		required: true,
	},
	isRequiredField: {
		type: Boolean,
		default: false,
	},
	inputValue: {
		type: String,
		required: true,
	}
});

const inputValue = defineModel(props.inputValue);
</script>

<template>
	<div class="input__wrapper">
		<input
				id="textInput"
				type="text"
				class="input"
				:class="isSearchInput ? 'search' : 'field'"
				v-model="inputValue"
		/>
		<label for="textInput" class="input__label">
			<SiteImage class="input__icon" :src="searchImageIcon"/>
			<span class="input__placeholder">
				{{ placeHolder + (isRequiredField ? ' *' : '') }}
			</span>
		</label>
	</div>
</template>

<style scoped lang="scss">
.input {
	width: 100%;
	border-radius: 8px;
	padding: 14px 16px;
	outline: none;
	position: relative;

	&.search {
		border: none;
		background-color: var(--vt-c-field);
		padding-left: 50px;
	}

	&__label {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
		display: flex;
		align-items: center;
		padding-left: 16px;
		gap: 16px;
		top: 0;
	}

	&:focus + &__label {

		& .input__placeholder {
			transition: transform 0.5s ease;
			transform: translate(-40%, -87%);
		}
	}

	&__placeholder {
		font-size: 16px;
		color: var(--vt-c-more-dark-grey);
		font-family: Roboto, sans-serif;
	}

	&__wrapper {
		position: relative;
	}
}
</style>