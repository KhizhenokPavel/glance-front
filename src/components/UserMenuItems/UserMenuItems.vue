<script setup lang="ts">

import MenuLink from "@/components/devTools/links/MenuLink/MenuLink.vue";
import HomeIcon from "@/components/icons/HomeIcon.vue";
import CatalogIcon from "@/components/icons/CatalogIcon.vue";
import BasketIcon from "@/components/icons/BasketIcon.vue";
import ProfileIcon from "@/components/icons/ProfileIcon.vue";

const MENU_ITEMS = [
	{
		name: 'Главная',
		iconComponent: HomeIcon,
		href: '/',
		hideOnDesktop: true,
	},
	{
		name: 'Каталог',
		iconComponent: CatalogIcon,
		href: '/catalog',
		hideOnDesktop: false,
	},
	{
		name: 'Корзина',
		iconComponent: BasketIcon,
		href: '/basket',
		hideOnDesktop: false,
	},
	{
		name: 'Профиль',
		iconComponent: ProfileIcon,
		href: '/profile',
		hideOnDesktop: false,
	},
];
</script>

<template>
	<div class="menu__items">
		<div class="menu__items--wrapper">
			<MenuLink
					v-for="menuItem in MENU_ITEMS"
					:class="{ hide: menuItem.hideOnDesktop }"
					:name="menuItem.name"
					:key="menuItem.name"
					:href="menuItem.href"
					:iconComponent="menuItem.iconComponent"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import "@/assets/mixins.scss";

.menu__items {
	border-top: 1px var(--vt-c-grey) solid;
	padding: 20px 30px;
	display: flex;
	justify-content: center;
	align-items: center;
  background-color: var(--color-background);
  z-index: 5;

	&--wrapper {
		flex-direction: row;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		width: 100%;
		max-width: 500px;
		gap: 32px;
	}

	@include adaptive {
		border-top: none;
		padding: 17px 0;
	}
}

.hide {
	@include adaptive {
		display: none;
	}
}
</style>