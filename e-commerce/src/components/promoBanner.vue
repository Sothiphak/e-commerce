<template>
  <div class="promo-banner">
    <div class="content">
      <slot name="text"></slot>

      <slot name="button"></slot>
    </div>

    <div class="image">
        <slot name="image"></slot>
    </div>
  </div>
</template>

<style scoped>
.promo-banner {
  /* Common styles for the three banner boxes */
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  min-height: 250px; /* Ensure banners have height */
}

/* You'd define different background colors/styles when using this component */
</style>
