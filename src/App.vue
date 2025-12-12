<template>
  <div class="full_display">
    <div class="category-display">
      <Category v-for="category in categories" :key="category.name" :image="category.image" :categoryName="category.name" :num="category.productCount" :bgColor="category.color"/>
    </div>

    <div class="banner_display">
      <Banner v-for="banner in banners" :key="banner.title" :title="banner.title" :bgColor="banner.color" :bgImage="banner.image" :ButtonbgColor="banner.buttonColor"/>
    </div>
  </div>
</template>

<script lang="ts">
import Category from './components/CategoryGrid.vue'
import Banner from './components/PromoBanner.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Category,
    Banner
  },

  data() {
    return {
      categories: [] as {
      name: string;
      productCount: number;
      color: string;
      image: string;
    }[],
    banners: [] as {
      title: string;
      buttonColor: string;
      color: string;
      image: string;
    }[]
    }
  },

  methods: {
    async fetchCategories() {
      const result = await axios.get("http://localhost:3000/api/categories");
      this.categories = result.data
                        .map((cat: any) => ({
                          name: cat.name,
                          productCount: cat.productCount,
                          color: cat.color,
                          image: `http://localhost:3000/${cat.image.replace(/\\/g, '/')}`
                        }));
      console.log(result.data);
      console.log(this.categories);
    },

    async fetchBanners() {
      const result = await axios.get("http://localhost:3000/api/promotions");
      this.banners = result.data
                        .map((promo: any) => ({
                          title: promo.title,
                          buttonColor: promo.buttonColor,
                          color: promo.color,
                          image: `http://localhost:3000/${promo.image.replace(/\\/g, '/')}`
                        }));
      console.log(result.data);
      console.log(this.banners);
    }
  },

  mounted() {
    this.fetchCategories();
    this.fetchBanners();
  }
}
</script>

<style scoped>
  .full_display {
    width: 100%;
    /* Max width for the whole content area for better readability on large screens */
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px; /* Overall padding for edges */
    /* *** ADDED FOR LIGHT BACKGROUND *** */
    background-color: #f7f8fa; /* Soft, very light gray background */
    min-height: 100vh;
  }

  .category-display {
    width: 110%;
    display: flex;
    justify-content: center;
    gap: 24px;
  }

  .banner_display {
    width: 110%;
    display: flex;
    justify-content: center;
    margin-top: 75px;
    margin-bottom: 65px;
    gap: 24px;
  }

  .product_display {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
  }

</style>
