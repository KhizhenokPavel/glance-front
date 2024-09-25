<script setup lang="ts">

import BigFieldWrapper from "@/components/devTools/wrappers/BigFieldWrapper/BigFieldWrapper.vue";

const inputValue = defineModel({
	type: String,
	required: true,
});

const props = defineProps({
	isRequiredField: {
		type: Boolean,
		default: false,
	},
});
</script>

<template>
	<BigFieldWrapper class="input__container">
		<input
				id="textInput"
				type="text"
				class="input"
				v-model="inputValue"
		/>
		<slot class="input__content" v-if="!inputValue"></slot>
	</BigFieldWrapper>
</template>

<style scoped lang="scss">
.input {
	width: 100%;
	background: none;
	border: none;
	outline: none;
	position: inherit;
	z-index: 10;
	color: var(--vt-c-black);
	font-size: 16px;
	font-family: Roboto, sans-serif;

	&__container {
		border: 1px var(--vt-c-more-dark-grey) solid;
		position: relative;
	}

	&__content, & {
		padding: 14px 16px;
	}
}
</style>