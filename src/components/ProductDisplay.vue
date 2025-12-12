<template>
  <div class="product-card" :class="{ 'card-active': clicked }">
    <span v-if="promotionAsPercentage > 0" class="badge discount">-{{ promotionAsPercentage }}%</span>

    <div class="img-wrapper">
      <img :src="image" :alt="name" />
    </div>

    <div class="prod-details">
      <span class="prod-group">Hodo Foods</span>
      <h4 class="prod-name">{{ name }}</h4>

      <div class="rating">
         <span v-for="n in 5" :key="n" :class="{ 'filled': n <= rating }">★</span>
         <span class="rating-num">({{ rating }})</span>
      </div>

      <div class="meta-info">
        <span class="size">{{ size }}</span>
      </div>

      <div class="price-row">
        <span class="price">${{ price }}</span>
        <button class="btn-add">Add +</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductDisplay',
  props: {
    name: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, default: 0 },
    price: { type: Number, required: true },
    size: { type: String, default: '500g' }, // Default size if missing
    promotionAsPercentage: { type: Number, default: 0 },

    // Props from your friend's code logic
    clicked: { type: Boolean, default: false },
    index: { type: Number, default: 0 }
  }
});
</script>

<style scoped>


.product-card {
  font-family: 'Quicksand', sans-serif;
  background: white;
  border: 1px solid #ececec;
  border-radius: 15px;
  padding: 20px;
  position: relative;
  transition: 0.2s;
  width: 230px; /* Adjusted width to match design */
  min-width: 230px;
  box-sizing: border-box;
}

.product-card:hover, .product-card.card-active {
  border-color: #bce3c9;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.05);
}

.img-wrapper { height: 160px; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; }
.img-wrapper img { max-width: 100%; max-height: 100%; object-fit: contain; }

.prod-group { font-size: 12px; color: #adadad; }
.prod-name { font-size: 16px; color: #253D4E; margin: 5px 0; font-weight: 700; line-height: 1.2; }
.size { font-size: 12px; color: #adadad; }

.rating { color: #fcc949; font-size: 14px; margin-bottom: 5px; }
.rating span:not(.filled) { color: #dedede; }
.rating-num { color: #b6b6b6; font-size: 12px; margin-left: 5px; }

.price-row { display: flex; justify-content: space-between; align-items: center; margin-top: 15px; }
.price { color: #3bb77e; font-weight: 800; font-size: 18px; }

.btn-add { background: #def9ec; color: #3bb77e; border: none; padding: 6px 20px; border-radius: 4px; font-weight: bold; cursor: pointer; font-family: 'Quicksand', sans-serif; transition: 0.2s;}
.btn-add:hover { background: #3bb77e; color: white; transform: translateY(-2px); }

.badge { position: absolute; top: 0; left: 0; padding: 5px 12px; color: white; font-size: 12px; border-radius: 15px 0 20px 0; font-weight: bold; background: #3bb77e; z-index: 2;}
</style>
