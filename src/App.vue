<template>
  <div class="full_display">

    <MenuBar menuName="Featured Categories"/>

    <div class="category-display">
      <Category
        v-for="(category, index) in categories"
        :key="index"
        :image="category.image"
        :categoryName="category.categoryName"
        :num="category.num"
        :bgColor="category.bgColor"
      />
    </div>

    <div class="banner_display">
      <Banner
        v-for="(banner, index) in promotions"
        :key="index"
        :title="banner.title"
        :bgColor="banner.bgColor"
        :bgImage="banner.bannerImage"
        :ButtonbgColor="banner.ButtonbgColor"
      />
    </div>

    <MenuBar menuName="Popular Products"/>

    <div class="product_display">
      <Product
        v-for="(product, index) in products"
        :key="index"
        :name="product.name"
        :rating="product.rating"
        :size="product.size"
        :price="product.price"
        :promotionAsPercentage="product.promotionAsPercentage"
        :countSold="product.countSold"
        :image="product.image"
        :clicked="index === 0"
        :index="index"
      />
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useProductStore } from './stores/productStore';

// Components
import MenuBar from './components/MenuBar.vue';
import Product from './components/ProductDisplay.vue';
import Category from './components/CategoryGrid.vue';
import Banner from './components/PromoBanner.vue';

export default defineComponent({
  name: 'App',
  components: {
    MenuBar,
    Product,
    Category,
    Banner
  },

  setup() {
    const productStore = useProductStore();

    const { categories, promotions, products, groups } = storeToRefs(productStore);

    onMounted(() => {
      productStore.fetchBanners();
      productStore.fetchCategories();
      productStore.fetchGroups();
      productStore.fetchProducts();
    });

    return {
      categories,
      promotions,
      products,
      groups
    };
  }
});
</script>

<style scoped>
.full_display {
    width: 110%;
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
    background-color: #f7f8fa;
    min-height: 100vh;
    box-sizing: border-box;
  }

  .content-section {
    width: 110%;
    display: flex;
    flex-direction: column;
  }

  .category-display {
    width: 110%;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 40px;

  }

  .banner_display {
    width: 110%;
    display: flex;
    justify-content: space-between;
    gap: 24px;
    margin-top: 30px;
    margin-bottom: 60px;
    flex-direction: row;
  }

  /* PRODUCTS */
  .product_display {
    width: 110%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 23px;
    margin-bottom: 50px;
  }
</style>
