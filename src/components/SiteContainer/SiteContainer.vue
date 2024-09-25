<script setup lang="ts">

</script>

<template>
	<div class="site__container">
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">
@import "@/assets/mixins";

.site__container {
	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
}
</style>