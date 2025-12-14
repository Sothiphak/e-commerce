<template>
  <div class="category-header">
    <div class="header-content">
      <h1 class="cat-title">{{ title }}</h1>
      <div class="breadcrumbs">
        <span class="crumb">Home</span>
        <span class="separator">›</span>
        <span class="crumb">Categories</span>
        <span class="separator">›</span>
        <span class="crumb active">{{ title }}</span>
      </div>
    </div>
    <img src="../assets/images/bg-pattern.png" class="bg-pattern" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CategoryBanner',
  props: {
    title: {
      type: String,
      default: 'Category'
    }
  }
});
</script>

<style scoped>

.category-header {
  position: relative;
  width: 100%;
  height: 250px;
  background-color: #d8f1e5; /* Match the light green */
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 60px;
  overflow: hidden;
  margin-bottom: 40px;
  box-sizing: border-box;
}

.header-content {
  position: relative;
  z-index: 2;
  font-family: 'Quicksand', sans-serif;
}

.cat-title {
  font-size: 48px;
  font-weight: 700;
  color: #253D4E;
  margin: 0 0 15px 0;
}

.breadcrumbs {
  font-size: 16px;
  color: #7e7e7e;
  display: flex;
  align-items: center;
  gap: 10px;
}

.separator {
  font-size: 18px;
  color: #adadad;
  padding-bottom: 2px;
}

.crumb.active {
  color: #3bb77e;
  font-weight: 600;
}

.bg-pattern {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  width: auto;
  opacity: 0.6;
  z-index: 1;
  pointer-events: none;
}
</style>
