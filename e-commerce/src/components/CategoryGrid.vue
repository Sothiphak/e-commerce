<script setup lang="ts">
import CategoryItem from './CategoryItem.vue';

// Sample data structure for the categories (You would usually fetch this)
const categories = [
  { id: 1, name: 'Coke & Milk', count: 143, imageSrc: '...', bgColor: '#fcf6f0' },
  { id: 2, name: 'Peach', count: 17, imageSrc: '...', bgColor: '#fff0e5' },
  // ... rest of the 10 items
];
</script>

<template>
  <section class="category-grid-section">
    <div class="grid-container">
      <CategoryItem
        v-for="cat in categories"
        :key="cat.id"
        :name="cat.name"
        :count="cat.count"
        :image-src="cat.imageSrc"
        :bg-color="cat.bgColor"
      />
    </div>
  </section>
</template>

<style scoped>
.category-grid-section {
  margin-bottom: 40px;
}

.grid-container {
  display: grid;
  /* Adjust grid-template-columns for different screen sizes */
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
}
</style>
