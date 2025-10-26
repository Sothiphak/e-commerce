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
  align-items: center;
  overflow: hidden;
  height: 250px; /* 💡 NEW: Set a consistent height for the card */
}

/* 💡 TWEAK: Adjusted width for a more focused text area */
.text-and-button-area {
  max-width: 60%;
  padding-right: 15px;
}

.image-area {
    /* Set alignment properties to push content to the bottom */
    display: flex;
    flex-direction: column;
    justify-content: flex-end; /* Pushes image to the bottom */
    align-items: center; /* Centers image horizontally */

    /* Give the image area the remaining space */
    flex-shrink: 0;
    max-width: 40%; /* Limited to 40% */
    overflow: hidden;
}

/* 💡 CRITICAL FIX: Standardize the image size and ensure it's pushed to the bottom/right */
.image-area :deep(.banner-img) {
    /* Standardize the size for all images */
    width: auto;
    max-width: 100%;
    /* 💡 NEW: The height constraint makes them look uniform */
    max-height: 180px;
    height: auto;
    display: block;
    object-fit: contain;

    /* 💡 NEW: Add positioning to push the image to the bottom-right corner */
    align-self: flex-end; /* Aligns the image itself to the bottom-right within the flex container */
}

/* Small devices optimization */
@media (max-width: 600px) {
    .promo-banner-card {
        flex-direction: column;
        text-align: center;
        height: auto; /* Reset height on mobile */
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
        align-self: center; /* Center image on mobile */
    }
}
</style>
