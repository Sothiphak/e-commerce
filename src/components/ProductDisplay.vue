<template>
  <div class="product-card" :class="{ 'card-active': clicked }">
    <div class="badges">
      <span v-if="badge.visible" :class="['badge', badge.type]">
        {{ badge.label }}
      </span>
    </div>

    <div class="img-wrapper">
      <img :src="image" :alt="name" />
    </div>

    <div class="prod-details">
      <span class="prod-group">Hodo Foods</span>
      <h4 class="prod-name">{{ name }}</h4>

      <div class="rating">
         <span v-for="n in 5" :key="n" class="star" :class="{ 'filled': n <= rating }">★</span>
         <span class="rating-num">({{ rating.toFixed(1) }})</span>
      </div>

      <div class="meta-info">
        <span class="size">{{ size }}</span>
      </div>

      <div class="bottom-row">
  <div class="price-box">
    <span class="price">${{ price.toFixed(2) }}</span>
    <span v-if="displayOldPrice" class="old-price">${{ displayOldPrice }}</span>
  </div>

  <div
    class="action-wrapper"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
>
    <div v-if="isHovered" class="qty-input">
      <input type="number" value="1" min="1" />
    </div>

    <button v-else class="btn-add">Add +</button>
  </div>
</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

export default defineComponent({
  name: 'ProductDisplay',
  props: {
    name: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, default: 0 },
    price: { type: Number, required: true },
    size: { type: String, default: '500g' },

    // Data from your Sequelize Model
    promotionAsPercentage: { type: Number, default: 0 },
    countSold: { type: Number, default: 0 },

    clicked: { type: Boolean, default: false },
  },
  setup(props) {
    // Logic for Old Price Calculation
    const isHovered = ref(false);
    const displayOldPrice = computed(() => {
      if (props.promotionAsPercentage > 0) {
        const original = props.price / (1 - props.promotionAsPercentage / 100);
        return original.toFixed(2);
      }
      return null;
    });

    // Updated Logic for Badge Display
    const badge = computed(() => {
      const promo = props.promotionAsPercentage;
      const sold = props.countSold;

      // 1. PRIORITY RULE: High Sales (>= 100) always shows Orange "Sale" badge
      // This overrides any discount badge.
      if (sold >= 100) {
        return { visible: true, type: 'sale', label: 'Sale' };
      }

      // 2. "Hot" Deal: If promotion is very high (e.g., 20% or more)
      if (promo >= 20) {
        return { visible: true, type: 'hot', label: 'Hot' };
      }

      // 3. Percentage Discount: If there is a smaller promotion (e.g., 1-19%)
      if (promo > 0) {
        return { visible: true, type: 'discount', label: `-${promo}%` };
      }

      return { visible: false, type: '', label: '' };
    });

    return { displayOldPrice, badge, isHovered};
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
  width: 250px;
  box-sizing: border-box;
  overflow: hidden;
}

.product-card:hover, .product-card.card-active {
  border-color: #bce3c9;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.05);
}

/* --- BADGE STYLES --- */
.badges {
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 2;
}

.badge {
  display: inline-block;
  padding: 9px 20px 10px 20px;
  color: white;
  font-size: 12px;
  border-radius: 0 20px 20px 0;
  font-weight: 700;
  line-height: 1;
}

/* Color Mappings based on Logic */
.badge.discount { background-color: #3bb77e; } /* Green for % */
.badge.hot { background-color: #FD6E6E; }      /* Red for Hot Deal */
.badge.sale { background-color: #FDC040; }     /* Orange for Best Sellers */

/* Image */
.img-wrapper {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding-top: 50px;
}
.img-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Text Details */
.prod-group { font-size: 12px; color: #adadad; margin-bottom: 5px; display: block;}
.prod-name {
  font-size: 16px;
  color: #253D4E;
  margin: 0 0 10px 0;
  font-weight: 700;
  line-height: 1.2;
  height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Rating */
.rating { margin-bottom: 5px; font-size: 14px;}
.star { color: #dedede; margin-right: 2px;}
.star.filled { color: #fdc040; }
.rating-num { color: #b6b6b6; font-size: 12px; margin-left: 5px; }

/* Meta */
.meta-info { margin-bottom: 15px; }
.size { font-size: 13px; color: #adadad; font-weight: 600;}

/* Price Row */
.bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.price-box { display: flex; align-items: center; gap: 8px;}
.price { color: #3bb77e; font-weight: 700; font-size: 18px; }
.old-price { font-size: 13px; color: #adadad; text-decoration: line-through; font-weight: 600;}

/* Buttons */
.btn-add {
  background: #DEF9EC;
  color: #3bb77e;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  font-size: 13px;
  font-family: 'Quicksand', sans-serif;
  width: 100%; /* Fill the wrapper */
}
.btn-add:hover { background: #3bb77e; color: white; transform: translateY(-2px); }
.qty-input {
  display: flex;
  align-items: center;
  width: 100%;
}
/* Input for Active State */
.qty-input input {
  width: 70px;
  padding: 6px;
  border: 1px solid #3bb77e;
  border-radius: 5px;
  color: #3bb77e;
  font-weight: bold;
  text-align: center;
  outline: none;
  font-family: 'Quicksand', sans-serif;
}
.action-wrapper {
  min-width: 80px; /* Set a fixed minimum width to prevent jumping */
  height: 35px;    /* Fixed height for alignment */
  display: flex;
  justify-content: flex-end; /* Align to the right */
  align-items: center;
}
.qty-input input::-webkit-outer-spin-button,
.qty-input input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.qty-input input[type=number] {
  -moz-appearance: textfield;
}
</style>
