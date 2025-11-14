<template>
  <div class="promo-banner-card" :style="{ backgroundColor: bgColor }">
    <div class="text-and-button-area">
      <slot name="text"></slot>
      <slot name="button"></slot>
    </div>

    <div class="image-area">
      <slot name="image"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  bgColor: string;
}>();
</script>

<style scoped>
.promo-banner-card {
  max-width: 100%;
  padding: 40px 25px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  height: 250px;
}
/* ... rest of the styles are unchanged ... */
.text-and-button-area {
  max-width: 60%;
  padding-right: 15px;
}

.image-area {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0;
    max-width: 40%;
    overflow: hidden;
}

.image-area :deep(.banner-img) {
    width: auto;
    max-width: 100%;
    max-height: 180px;
    height: auto;
    display: block;
    object-fit: contain;
    align-self: flex-end;
}

@media (max-width: 600px) {
    .promo-banner-card {
        flex-direction: column;
        text-align: center;
        height: auto;
    }
    .text-and-button-area {
        max-width: 100%;
        padding-right: 0;
        margin-bottom: 20px;
    }
    .image-area {
        max-width: 60%;
        margin: 0 auto;
        justify-content: flex-end;
    }
    .image-area :deep(.banner-img) {
        max-height: 120px;
        align-self: center;
    }
}
</style>
