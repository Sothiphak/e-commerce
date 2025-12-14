<template>
  <div class="full_display">
    <div class="content-section">
      <HeroBanner />
    </div>

    <div class="content-section">
      <MenuBar menuName="Featured Categories" />
    </div>

    <div class="category-display">
      <Category v-for="(category, index) in categories" :key="index"
        :image="category.image" :categoryName="category.categoryName"
        :num="category.num" :bgColor="category.bgColor" />
    </div>

    <div class="banner_display">
      <Banner v-for="(banner, index) in promotions" :key="index"
        :title="banner.title" :bgColor="banner.bgColor"
        :bgImage="banner.bannerImage" :ButtonbgColor="banner.ButtonbgColor" />
    </div>

    <div class="content-section">
        <MenuBar menuName="Popular Products" />
    </div>

    <div class="product_display">
      <Product v-for="(product, index) in products" :key="index"
        :name="product.name" :rating="product.rating" :size="product.size"
        :price="product.price" :promotionAsPercentage="product.promotionAsPercentage"
        :countSold="product.countSold" :image="product.image"
        :clicked="index === 0" :index="index" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useProductStore } from '../stores/productStore';

import HeroBanner from '../components/HeroBanner.vue';
import MenuBar from '../components/MenuBar.vue';
import Product from '../components/ProductDisplay.vue';
import Category from '../components/CategoryGrid.vue';
import Banner from '../components/PromoBanner.vue';

export default defineComponent({
  name: 'HomeView',
  components: { HeroBanner, MenuBar, Product, Category, Banner },
  setup() {
    const productStore = useProductStore();
    const { categories, promotions, products } = storeToRefs(productStore);

    onMounted(() => {
        if (products.value.length === 0) productStore.fetchProducts();
        productStore.fetchBanners();
        productStore.fetchCategories();
    });

    return { categories, promotions, products };
  },
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

.content-section,
.category-display,
.banner_display,
.product_display {
  width: 110%;
  max-width: 1600px; /* ALIGNMENT FIX: Matches Header exactly */
}

.content-section {
  display: flex;
}

.category-display {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 40px;
  flex-direction: row;
  flex-wrap: wrap;
}

.banner_display {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 30px;
  margin-bottom: 60px;
  flex-direction: row;
}

.product_display {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 23px;
  margin-bottom: 50px;
}

</style>
