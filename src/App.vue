<template>
  <div class="app-container">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header
  }
});
</script>

<style>
/* Global Reset */
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.app-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  min-height: 100vh;
}
</style>
