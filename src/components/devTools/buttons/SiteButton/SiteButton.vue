<script setup lang="ts">

import BaseButton from "@/components/devTools/buttons/BaseButton/BaseButton.vue";

const props = defineProps<{
  isActive?: boolean,
}>();
</script>

<template>
  <BaseButton class="button" :class="{ active: isActive }">
    <slot></slot>
  </BaseButton>
</template>

<style scoped lang="scss">
.button {
  border-radius: 8px;
  background-color: var(--vt-c-light-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  max-width: 267px;
  color: var(--vt-c-not-active);
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;

  .active & {
    color: var(--vt-c-white);
    background-color: var(--vt-c-dark-blue);
  }
}
</style>