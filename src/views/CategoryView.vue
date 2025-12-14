<template>
  <div class="full_display">

    <div class="content-section">
      <CategoryBanner :title="pageTitle" />
    </div>



  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '../stores/productStore';
import CategoryBanner from '../components/CategoryBanner.vue';

export default defineComponent({
  name: 'CategoryView',
  components: { CategoryBanner},
  setup() {
    const route = useRoute();
    const productStore = useProductStore();

    const pageTitle = computed(() => {
        if (route.name === 'hot-deals') return 'Hot Deals';
        return route.params.name ? String(route.params.name) : 'Shop';
    });

    const filteredProducts = computed(() => {
        const all = productStore.products;
        if (route.name === 'hot-deals') {
            return all.filter(p => p.promotionAsPercentage > 0);
        }
        return all;
    });

    return { pageTitle, filteredProducts };
  }
});
</script>

<style scoped>
.full_display {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  background-color: white;
  min-height: 100vh;
  box-sizing: border-box;
}

.content-section{
  width: 110%;
  max-width: 1600px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

</style>
