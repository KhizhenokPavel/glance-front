<script setup lang="ts">

import Logotype from "@/components/Logotype/Logotype.vue";
import {ref} from "vue";
import SearchInput from "@/components/devTools/inputs/SearchInput/SearchInput.vue";
import BigFieldWrapper from "@/components/devTools/wrappers/BigFieldWrapper/BigFieldWrapper.vue";
import UserMenuItems from "@/components/UserMenuItems/UserMenuItems.vue";

let searchValue = ref('');
</script>

<template>
	<header class="header">
		<div class="header__container">
			<BigFieldWrapper class="header__first-part">
				<Logotype class="header__logotype"/>
				<SearchInput v-model="searchValue"/>
			</BigFieldWrapper>
			<UserMenuItems class="header__second-part"/>
		</div>
	</header>
</template>

<style scoped lang="scss">
@import "@/assets/mixins.scss";

.header {
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: center;

	&__logotype {
		max-width: 118px;
	}

	&__container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		max-width: 1280px;
		width: 100%;

		@include adaptive {
			flex-direction: row;
			align-items: center;
			gap: 88px;
		}
	}

	&__first-part {
		padding: 58px 16px 28px 16px;
		border-bottom: 1px var(--vt-c-grey) solid;
		display: flex;
		flex-direction: column;
		gap: 24px;
		align-items: center;
		max-height: 202px;

		@include adaptive {
			display: contents;
			border-bottom: none;
			padding-top: 17px;
			padding-bottom: 17px;
			max-height: 88px;
		}
	}

	&__second-part {
		max-height: 96px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

		@include adaptive {
      position: inherit;
			max-height: 88px;
		}
	}

	@include adaptive {
		flex-direction: row;
		height: auto;
		align-items: center;
		border-bottom: 1px var(--vt-c-grey) solid;
		padding-left: 20px;
		padding-right: 20px;
	}
}
</style>