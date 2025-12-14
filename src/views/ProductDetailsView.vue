<template>
  <div class="full_display">
    <div class="content-section breadcrumbs-section">
      <div class="breadcrumbs">
        <router-link to="/" class="crumb">Home</router-link>
        <span class="separator">›</span>
        <span class="crumb">Products</span>
        <span class="separator">›</span>
        <span class="crumb active">{{ product ? product.name : 'Loading...' }}</span>
      </div>
    </div>

    <div class="content-section product-container" v-if="product">
      <div class="product-gallery">
        <div class="main-image-box">
          <span class="badge sale" v-if="product.promotionAsPercentage > 0">-{{ product.promotionAsPercentage }}%</span>
          <img :src="product.image" :alt="product.name" class="main-img" />
          <div class="zoom-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>

        <div class="thumbnail-row">
          <button class="thumb-arrow left" @click="scrollThumbnails(-1)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>

          <div class="thumbnails" ref="thumbContainer">
            <router-link
              v-for="(prod, index) in allProducts"
              :key="index"
              :to="`/product/${prod.name}`"
              class="thumb-item"
              :class="{ active: prod.name === product.name }"
            >
              <img :src="prod.image" :alt="prod.name">
            </router-link>
          </div>

          <button class="thumb-arrow right" @click="scrollThumbnails(1)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div class="product-info">
        <span class="stock-badge">In Stock</span>
        <h1 class="product-title">{{ product.name }}</h1>

        <div class="rating-row">
          <div class="stars">
            <span v-for="n in 5" :key="n" class="star" :class="{filled: n <= product.rating}">★</span>
          </div>
          <span class="rating-text">({{ product.rating.toFixed(1) }} reviews)</span>
        </div>

        <div class="price-row">
          <span class="current-price">${{ product.price.toFixed(2) }}</span>
          <div class="old-price-block" v-if="product.promotionAsPercentage > 0">
            <span class="discount-tag">{{ product.promotionAsPercentage }}% Off</span>
            <span class="old-price">${{ calculateOldPrice(product.price, product.promotionAsPercentage) }}</span>
          </div>
        </div>

        <p class="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi?
        </p>

        <div class="actions-row">
          <div class="qty-control">
            <input type="number" v-model="quantity" min="1" />
             <div class="qty-arrows">
              <i class="arrow up" @click="quantity++"></i>
              <i class="arrow down" @click="Math.max(1, quantity--)"></i>
            </div>
          </div>

          <button class="btn-add-cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Add To Cart
          </button>
        </div>

        <div class="meta-row">
          <p><strong>Vendor:</strong> <span class="text-muted">NestMart</span></p>
          <p><strong>SKU:</strong> <span class="text-muted">FWM15VKT</span></p>
        </div>
      </div>
    </div>

    <div v-else class="content-section" style="padding: 50px; text-align: center;">
        <h2>Loading Product...</h2>
        <p>If this takes too long, the product "{{ $route.params.name }}" might not exist.</p>
        <router-link to="/" style="color: #3bb77e; font-weight: bold;">Return Home</router-link>
    </div>

    <div class="content-section tabs-container">
      <div class="tab-headers">
        <button class="tab-btn active">Description</button>
        <button class="tab-btn">Reviews (3)</button>
      </div>
      <div class="tab-content">
        <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '../stores/productStore';

export default defineComponent({
  name: 'ProductDetailsView',
  setup() {
    const route = useRoute();
    const store = useProductStore();
    const quantity = ref(1);
    const thumbContainer = ref<HTMLElement | null>(null);

    const product = computed(() => {
      const prodName = route.params.name;
      const found = store.products.find(p => p.name === prodName);
      return found || store.products[0];
    });

    const allProducts = computed(() => store.products);

    onMounted(() => {
      if (store.products.length === 0) {
        store.fetchProducts();
      }
    });

    watch(() => route.params.name, () => {
        quantity.value = 1;
    });

    const calculateOldPrice = (price: number, percent: number) => {
      return (price / (1 - percent / 100)).toFixed(2);
    };

    const scrollThumbnails = (direction: number) => {
      if (thumbContainer.value) {
        const scrollAmount = 100;
        thumbContainer.value.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
      }
    };

    return { product, quantity, allProducts, calculateOldPrice, thumbContainer, scrollThumbnails };
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
  font-family: 'Quicksand', sans-serif;
}

.content-section {
  width: 110%;
  max-width: 1600px;
}

.breadcrumbs-section { margin-bottom: 30px; }
.breadcrumbs { font-size: 14px; color: #7e7e7e; display: flex; align-items: center; gap: 8px; }
.separator { color: #adadad; }
.crumb { text-decoration: none; color: #7e7e7e; }
.crumb:hover { color: #3bb77e; }
.crumb.active { color: #3bb77e; font-weight: 600; }

.product-container { display: flex; gap: 50px; margin-bottom: 60px; align-items: flex-start; }
.product-gallery { flex: 1; max-width: 50%; }

.main-image-box {
    border: 1px solid #ececec;
    border-radius: 15px;
    padding: 20px;
    position: relative;
    margin-bottom: 20px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-img { max-width: 100%; max-height: 100%; object-fit: contain; }
.zoom-icon { position: absolute; top: 20px; right: 20px; opacity: 0.5; }
.badge.sale {
    position: absolute; top: 20px; left: 20px;
    background: #3bb77e; color: white; padding: 5px 15px;
    border-radius: 15px 0 15px 0; font-weight: bold; font-size: 12px;
}

.thumbnail-row { display: flex; align-items: center; gap: 10px; justify-content: center;}
.thumbnails {
    display: flex; gap: 15px;
    overflow-x: auto;
    scroll-behavior: smooth;
    max-width: 400px;
    padding-bottom: 5px;
    scrollbar-width: none;
}
.thumbnails::-webkit-scrollbar { display: none; }

.thumb-item {
    flex: 0 0 80px;
    height: 80px; border: 1px solid #ececec; border-radius: 10px;
    padding: 5px; cursor: pointer; display: flex; justify-content: center; align-items: center;
    transition: 0.2s;
    text-decoration: none;
}
.thumb-item:hover, .thumb-item.active { border-color: #3bb77e; transform: translateY(-2px); }
.thumb-item img { max-width: 100%; max-height: 100%; object-fit: contain; }

.thumb-arrow {
    background: #3bb77e; color: white; border: none; width: 35px; height: 35px;
    border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: 0.2s;
}
.thumb-arrow:hover { background: #29a56c; }

.product-info { flex: 1; }
.stock-badge {
    background: #def9ec; color: #3bb77e; padding: 5px 10px;
    border-radius: 5px; font-weight: bold; font-size: 13px; display: inline-block; margin-bottom: 15px;
}
.product-title { font-size: 40px; color: #253D4E; margin: 0 0 15px 0; line-height: 1.2; font-weight: 700;}
.rating-row { display: flex; align-items: center; margin-bottom: 20px; gap: 10px;}
.stars { color: #fdc040; font-size: 14px;}
.rating-text { color: #b6b6b6; font-size: 13px;}
.price-row { display: flex; align-items: center; gap: 15px; margin-bottom: 25px;}
.current-price { font-size: 58px; color: #3bb77e; font-weight: 700; line-height: 1;}
.old-price-block { display: flex; flex-direction: column; justify-content: center;}
.old-price { font-size: 24px; color: #adadad; text-decoration: line-through; font-weight: 600;}
.discount-tag { font-size: 12px; color: #fdc040; font-weight: bold; margin-bottom: -5px;}
.description { font-size: 16px; color: #7e7e7e; line-height: 24px; margin-bottom: 40px;}

.actions-row { display: flex; gap: 10px; margin-bottom: 40px;}
.qty-control {
    display: flex; align-items: center; border: 2px solid #3bb77e;
    border-radius: 5px; padding: 0 5px; height: 50px; background: white; width: 90px;
}
.qty-control input {
    border: none; width: 100%; text-align: center; font-weight: 700;
    font-size: 18px; color: #3bb77e; outline: none; background: transparent;
}
.qty-control input::-webkit-outer-spin-button, .qty-control input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.qty-arrows { display: flex; flex-direction: column; justify-content: center; gap: 4px; margin-left: 5px;}
.arrow { border: solid #3bb77e; border-width: 0 2px 2px 0; display: inline-block; padding: 3px; cursor: pointer;}
.arrow.up { transform: rotate(-135deg); }
.arrow.down { transform: rotate(45deg); }

.btn-add-cart {
    background-color: #3bb77e; color: white; border: none; height: 50px; padding: 0 40px;
    border-radius: 5px; font-weight: 700; font-size: 16px; display: flex; align-items: center; gap: 10px; cursor: pointer; transition: 0.2s;
    font-family: 'Quicksand', sans-serif;
}
.btn-add-cart:hover { background-color: #29a56c; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(59, 183, 126, 0.4);}

.meta-row { display: flex; gap: 30px; font-size: 14px; color: #253D4E;}
.text-muted { color: #7e7e7e;}

.tabs-container {
    border: 1px solid #ececec; border-radius: 15px; padding: 40px; margin-bottom: 50px;
}
.tab-headers { display: flex; gap: 20px; margin-bottom: 30px; }
.tab-btn {
    background: none; border: 1px solid #ececec; border-radius: 30px; padding: 10px 25px;
    font-size: 16px; color: #7e7e7e; font-weight: 600; cursor: pointer; font-family: 'Quicksand', sans-serif;
}
.tab-btn.active { color: #3bb77e; border-color: transparent; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
.tab-content p { color: #7e7e7e; line-height: 1.6; font-size: 15px;}
</style>
