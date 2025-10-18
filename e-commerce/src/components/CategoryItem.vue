 <script setup lang="ts">
defineProps<{
  name: string;
  count: number;
  imageSrc: string; // URL path to the category image
  bgColor: string;  // Background color for the item
}>();
</script>

<template>
  <div class="category-item" :style="{ backgroundColor: bgColor }">
    <div class="image-container">
      <img :src="imageSrc" :alt="name" />
    </div>
    <div class="details">
      <p class="name">{{ name }}</p>
      <p class="count">{{ count }} items</p>
    </div>
  </div>
</template>

<style scoped>
.category-item {
  /* Basic styling for the box shape */
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.image-container img {
  width: 60px; /* Example size */
  height: 60px;
  margin-bottom: 5px;
}

.name {
  font-weight: bold;
  font-size: 0.9em;
  margin: 0;
}

.count {
  font-size: 0.7em;
  color: #666;
  margin: 0;
}
</style>
