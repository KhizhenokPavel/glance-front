<script setup lang="ts">

</script>

<template>
	<div class="content-wrapper">
		<slot/>
	</div>
</template>

<style scoped lang="scss">
.content-wrapper {
	width: 100%;
	max-width: 1320px;
	margin: 0 auto;
	padding: 0 var(--main-content-padding);
}
</style>