<script setup lang="ts">
import SiteImage from "@/components/devTools/images/SiteImage/SiteImage.vue";
import BigFieldWrapper from "@/components/devTools/wrappers/BigFieldWrapper/BigFieldWrapper.vue";

const props = defineProps({
	name: {
		type: String,
		default: '',
	},
	image: {
		type: String,
		default: '',
	}
});
</script>

<template>
	<div class="menu-item">
		<BigFieldWrapper class="menu-item__img">
			<SiteImage :src="image"/>
		</BigFieldWrapper>
		<div class="menu-item__name">
			{{ name }}
		</div>
	</div>
</template>

<style scoped lang="scss">
@import "@/assets/mixins";

.menu-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
	width: 100%;

	&__img {
		height: 128px;
		background-color: #D2D7FA;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 31px 13px;

		@include adaptive {
			height: 211px;
		}
	}
}
</style>