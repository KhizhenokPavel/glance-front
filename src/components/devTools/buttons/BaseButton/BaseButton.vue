<script setup lang="ts">

</script>

<template>
	<button class="button">
		<slot></slot>
	</button>
</template>

<style scoped lang="scss">
.button {
	width: 100%;
	height: 100%;
	background: none;
	border: none;
	cursor: pointer;
  outline: none;
}
</style>