<template>
  <section class="category-grid-container">
    <div class="categories-wrapper">
      <div
        v-for="category in categories"
        :key="category.name"
        class="category-item"
        :style="{ backgroundColor: category.bgColor }"
      >
        <div class="icon-box">
          <img :src="category.image" :alt="category.name" class="category-icon" />
        </div>
        <p class="category-name">{{ category.name }}</p>
        <p class="item-count">{{ category.count }} items</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Category {
  name: string;
  count: number;
  image: string;
  bgColor: string;
}

defineProps<{
  categories: Category[];
}>();
</script>

<style scoped>
.category-grid-container {
  padding: 30px 0;
}
.categories-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
  max-width: 1200px;
  margin: 0 auto;
}

.category-item {
  text-align: center;
  padding: 20px 5px;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  transition: all 0.3s;
  cursor: pointer;
  height: 100%;
}
.category-item:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    border-color: #34c034;
}

.icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto 15px;
    overflow: hidden;
}

.category-icon {
    max-width: 110%;
    max-height: 110%;
    object-fit: contain;
}

.category-name {
    font-size: 1em;
    font-weight: 700;
    color: #333;
    margin-bottom: 3px;
    line-height: 1.2;
}

.item-count {
    font-size: 0.8em;
    color: #777;
    margin-top: 5px;
}
</style>
