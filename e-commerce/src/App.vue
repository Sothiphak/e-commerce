<script setup lang="ts">
import CategoryGrid from './components/CategoryGrid.vue';
import PromoBanner from './components/PromoBanner.vue';
</script>

<template>
  <div class="home-page-container">
    <CategoryGrid />

    <section class="banner-group">

      <PromoBanner class="banner-onions">
        <template #text>
          <h2 class="banner-heading">Everyday Fresh & Clean with Our Products</h2>
        </template>
        <template #button>
          <a href="#" class="shop-btn green-btn">Shop Now →</a>
        </template>
        <template #image>
          <img src="/images/onion.jpg" alt="Fresh Onions" class="banner-imgg" />
        </template>
      </PromoBanner>

      <PromoBanner class="banner-breakfast">
        <template #text>
          <h2 class="banner-heading">Make your Breakfast Healthy and Easy</h2>
        </template>
        <template #button>
          <a href="#" class="shop-btn green-btn">Shop Now →</a>
        </template>
        <template #image>
          <img src="/images/strawberrymilk.png" alt="Breakfast Products" class="banner-img" />
        </template>
      </PromoBanner>

      <PromoBanner class="banner-organic">
        <template #text>
          <h2 class="banner-heading">The best Organic Products Online</h2>
        </template>
        <template #button>
          <a href="#" class="shop-btn orange-btn">Shop Now →</a>
        </template>
        <template #image>
          <img src="/images/vegetables.jpg" alt="Organic Products" class="banner-imgg" />
        </template>
      </PromoBanner>

    </section>
  </div>
</template>

<style scoped>
/* Layout and Container Styles */
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

/* Text and Heading Styling */
.banner-heading {
    font-size: 1.8em;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 20px;
    color: #333;
}

/* Custom Background Colors */
.banner-onions {
    background-color: #F0E8D5;
}
.banner-breakfast {
    background-color: #F3E8E8;
}
.banner-organic {
    background-color: #E7EAF3;
}

/* Button Styling */
.shop-btn {
    display: inline-block;
    padding: 10px 18px;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 700;
    transition: background-color 0.3s;
}

.shop-btn.green-btn {
    background-color: #49c470;
}

.shop-btn.orange-btn {
    background-color: #ffa500;
}

/* Image scaling for banners */
.banner-img {
    height: auto;
    display: block;
    max-width: 100%;
}

.banner-imgg {
    height: auto;
    display: block;
    max-width: 400px;
    padding-right: 110px;
    padding-top: 80px;
}

/* Responsiveness */
@media (max-width: 900px) {
  .banner-group {
    grid-template-columns: 1fr;
  }
}
</style>
