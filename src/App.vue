<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import CategoryGrid from './components/CategoryGrid.vue';
import PromoBanner from './components/promoBanner.vue';

interface Category {
  name: string;
  count: number;
  image: string;
  bgColor: string;
}

interface Promotion {
  title: string;
  bgColor: string;
  buttonClass: string;
  imageSrc: string;
  imageAlt: string;
  url: string;
}

const STATIC_CATEGORIES: Category[] = [
  { name: "Peach", count: 17, bgColor: "#FEFBE8", image: "/images/peach.png" },
  { name: "Red Apple", count: 68, bgColor: "#FFF0E9", image: "/images/apple.png" },
  { name: "Snack", count: 34, bgColor: "#FEF4EB", image: "/images/snack.png" },
  { name: "Organic Kiwi", count: 23, bgColor: "#ECFFEC", image: "/images/kiwi.png" },
  { name: "Black Plum", count: 29, bgColor: "#FFF3FF", image: "/images/bluberries.png" },
  { name: "Vegetables", count: 15, bgColor: "#F2FCE4", image: "/images/cabbage.png" },
  { name: 'Cake & Milk', count: 14, bgColor: '#F2FCE4', image: '/images/burger.png' },
  { name: 'Headphone', count: 18, bgColor: '#FFFCEB', image: '/images/headphone.png' },
  { name: 'Breakfast', count: 34, bgColor: '#FFF3EB', image: '/images/cakeandmilk.png' },
  { name: 'Orange', count: 63, bgColor: '#FFF3FF', image: '/images/orange.png' },
];

const STATIC_PROMOTIONS: Promotion[] = [
  {
      title: "Everyday Fresh and Clean with Our Products",
      bgColor: "#F0E9D7",
      imageSrc: "/images/onion.png",
      buttonClass: "green-btn",
      imageAlt: "Fresh Onions",
      url: "/promotions/1",
  },
  {
      title: "Make your Breakfast Healthy and Easy",
      bgColor: "#F2E8E9",
      imageSrc: "/images/strawberrymilk.png",
      buttonClass: "green-btn",
      imageAlt: "Strawberry Juice",
      url: "/promotions/2",
  },
  {
      title: "The best Organic Products Online",
      bgColor: "#E6EAF3",
      imageSrc: "/images/vegetables.png",
      buttonClass: "orange-btn",
      imageAlt: "Vegetables",
      url: "/promotions/3",
  }
];


const categoriesData = ref<Category[]>([]);
const promotionsData = ref<Promotion[]>([]);

function shopNow(promotion: Promotion): void {
  alert(`Let's shop: ${promotion.title}`);
}


onMounted(async () => {
  const API_URL = 'http://localhost:3000';

  const normalizeImagePath = (backendImageName: string) => {
      const name = backendImageName.split('/').pop()?.replace('.jpg', '.png') || '';
      if (name.includes('red_apple')) return '/images/apple.png';
      if (name.includes('strawberry_juice')) return '/images/strawberrymilk.png';
      if (name.includes('vegetable')) return '/images/vegetables.png';
      return `/images/${name}`;
  };

  try {
    const categoriesResponse = await axios.get(`${API_URL}/api/api/categories`);
    const normalizedCategories: Category[] = categoriesResponse.data.map((cat: any) => ({
      name: cat.name,
      count: cat.productCount || cat.count,
      image: normalizeImagePath(cat.image),
      bgColor: cat.color,
    }));

    if (normalizedCategories.length > 0) {
      categoriesData.value = normalizedCategories;
    } else {
      console.warn("Backend categories empty, using static fallback data.");
      categoriesData.value = STATIC_CATEGORIES;
    }

  } catch (error) {
    console.error('Error fetching categories:', error);
    categoriesData.value = STATIC_CATEGORIES;
  }

  try {
    const promotionsResponse = await axios.get(`${API_URL}/api/api/promotions`);
    const normalizedPromotions: Promotion[] = promotionsResponse.data.map((promo: any) => ({
      title: promo.title,
      bgColor: promo.color,
      buttonClass: promo.buttonColor === '#FBC040' ? 'orange-btn' : 'green-btn',
      imageSrc: normalizeImagePath(promo.image),
      imageAlt: promo.title,
      url: promo.url,
    }));

    if (normalizedPromotions.length > 0) {
      promotionsData.value = normalizedPromotions;
    } else {
      console.warn("Backend promotions empty, using static fallback data.");
      promotionsData.value = STATIC_PROMOTIONS;
    }

  } catch (error) {
    console.error('Error fetching promotions:', error);
    promotionsData.value = STATIC_PROMOTIONS;
  }
});
</script>

<template>
  <div class="home-page-container">
    <CategoryGrid :categories="categoriesData" />

    <section class="banner-group">

      <PromoBanner
        v-for="(promo, index) in promotionsData"
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
      <p v-if="!promotionsData.length && !categoriesData.length">Loading data...</p>

    </section>
  </div>
</template>

<style scoped>
.home-page-container {
    padding-top: 20px;
}
.banner-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 30px auto;
}

.banner-heading {
    font-size: 1.8em;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 20px;
    color: #333;
}

.shop-btn {
    display: inline-block;
    padding: 10px 18px;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 700;
    transition: background-color 0.3s;
    display: inline-flex;
    align-items: center;
}

.shop-btn.green-btn {
    background-color: #49c470;
}

.shop-btn.orange-btn {
    background-color: #ffa500;
}

.arrow-svg-icon {
    width: 18px;
    height: 18px;
    margin-left: 8px;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640'%3E%3Cpath fill='%23ffffff' d='M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: contain;
}

@media (max-width: 900px) {
  .banner-group {
    grid-template-columns: 1fr;
  }
}
</style>
