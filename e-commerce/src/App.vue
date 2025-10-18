<script setup lang="ts">
import CategoryGrid from '../components/CategoryGrid.vue';
import PromoBanner from '../components/PromoBanner.vue';
// Assuming you created a ShopButton component or just use a styled link
// import ShopButton from '../components/ShopButton.vue';
</script>

<template>
  <div class="home-page-container">

    <CategoryGrid />

    <section class="banner-group">

      <PromoBanner class="banner-onions">
        <template #text>
          <h2>Everyday Fresh & Clean with Our Products</h2>
        </template>
        <template #button>
          <a href="#" class="shop-btn">Shop Now →</a>
        </template>
        <template #image>
                  </template>
      </PromoBanner>

      <PromoBanner class="banner-breakfast">
        <template #text>
          <h2>Make your Breakfast Healthy and Easy</h2>
        </template>
        <template #button>
          <a href="#" class="shop-btn">Shop Now →</a>
        </template>
        <template #image>
                  </template>
      </PromoBanner>

      <PromoBanner class="banner-organic">
        <template #text>
          <h2>The best Organic Products Online</h2>
        </template>
        <template #button>
          <a href="#" class="shop-btn orange">Shop Now →</a>
        </template>
        <template #image>
                  </template>
      </PromoBanner>

    </section>
  </div>
</template>

<style scoped>
.banner-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Custom styles to match the colors and layout from the image */
.banner-onions {
    background-color: #f7f3e8; /* Light yellowish background */
}
.banner-breakfast {
    background-color: #f7e8e7; /* Light pinkish background */
}
.banner-organic {
    background-color: #e8f4f7; /* Light bluish background */
}

.shop-btn {
    /* Basic button styling */
    display: inline-block;
    padding: 8px 15px;
    background-color: #42b883; /* Green default */
    color: white;
    text-decoration: none;
    border-radius: 4px;
}

.shop-btn.orange {
    background-color: #ffa500; /* Orange button on third banner */
}

/* Media query for responsiveness (stacking banners on small screens) */
@media (max-width: 900px) {
  .banner-group {
    grid-template-columns: 1fr;
  }
}
</style>
