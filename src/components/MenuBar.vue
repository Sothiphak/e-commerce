<template>
  <div class="menu-bar">
    <h2>{{ menuName }}</h2>
    <div class="tabs">
      <span class="active">All</span>
      <span>Milks & Dairies</span>
      <span>Coffees & Teas</span>
      <span>Pet Foods</span>
      <span>Meats</span>
      <span>Vegetables</span>
      <span>Fruits</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MenuBar',
  props: {
    menuName: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>

.menu-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  font-family: 'Quicksand', sans-serif;
}

h2 {
  font-size: 32px;
  color: #253D4E;
  margin: 0;
  font-weight: 700;
}

.tabs {
  display: flex;
  gap: 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  color: #7e7e7e;
}

.tabs span.active, .tabs span:hover {
  color: #3bb77e;
}
@media (max-width: 768px) {
  .tabs { display: none; }
}
</style>
