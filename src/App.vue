<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from './stores/productStore';
import CategoryGrid from './components/CategoryGrid.vue';
import PromoBanner from './components/PromoBanner.vue';


const productStore = useProductStore();

function shopNow(promo: any) {
  alert(`Let's shop: ${promo.title}`);
}

onMounted(() => {
  productStore.loadAll();
});
</script>

<template>
  <div class="home-page-container">
    <!-- Category Section -->
    <CategoryGrid :categories="productStore.categories" />

    <!-- Promotion Banners -->
    <section class="banner-group">
      <PromoBanner
        v-for="(promo, index) in productStore.promotions"
        :key="index"
        :bgColor="promo.bgColor"
      >
        <template #text>
          <h2 class="banner-heading">{{ promo.title }}</h2>
        </template>

        <template #button>
          <a
            :href="promo.url"
            class="shop-btn"
            :class="promo.buttonClass"
            @click.prevent="shopNow(promo)"
          >
            Shop Now <span class="arrow-svg-icon"></span>
          </a>
        </template>

        <template #image>
          <img :src="promo.imageSrc" :alt="promo.imageAlt" class="banner-img" />
        </template>
      </PromoBanner>
    </section>
  </div>
</template>
