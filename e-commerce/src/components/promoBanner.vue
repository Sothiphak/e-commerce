<template>
  <div class="promo-banner-card">
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
// No specific logic needed for this component yet
</script>

<style scoped>
.promo-banner-card {
  max-width: 100%;
  padding: 40px 25px;
  border-radius: 10px;

  /* Layout: Text/Button and Image side-by-side */
  display: flex;
  justify-content: space-between;
  align-items: center; /* Vertically align items */
  overflow: hidden; /* Crucial for large images */
}

.text-and-button-area {
  /* Give the text space and ensure it pushes the image to the right */
  max-width: 50%;
  padding-right: 15px; /* Add some space between text and image */

}

/* Small devices optimization */
@media (max-width: 600px) {
    .promo-banner-card {
        flex-direction: column; /* Stack vertically on small screens */
        text-align: center;
    }
    .text-and-button-area {
        max-width: 100%;
        padding-right: 0;
        margin-bottom: 20px;
    }
}
</style>
