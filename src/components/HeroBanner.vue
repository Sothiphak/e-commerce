<template>
  <div class="hero-banner-container">
    <div class="hero-content">
      <h1 class="title">Don’t miss amazing grocery deals</h1>
      <p class="subtitle">Sign up for the daily newsletter</p>

      <div class="subscribe-form">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mail-icon"
        >
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          ></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <input type="email" placeholder="Your email address" />
        <button class="subscribe-btn">Subscribe</button>
      </div>
    </div>
    <div class="hero-image-wrapper">
        <img src="../assets/images/grocery.png" alt="Grocery Bag" class="hero-image" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroBanner',
});
</script>

<style scoped>

.hero-banner-container {
  width: 100%;
  height: 450px;
  background-image: url('../assets/images/Hero.png');
  background-color: #f8f4e6; 
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
  position: relative;
  overflow: hidden;
  margin-top: 30px;
  margin-bottom: 50px;
}

.hero-content {
  max-width: 50%;
  z-index: 2;
}

.title {
  font-size: 56px;
  font-weight: 700;
  color: #253d4e;
  line-height: 1.1;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 24px;
  color: #7e7e7e;
  margin-bottom: 40px;
}

.subscribe-form {
  background-color: white;
  border-radius: 50px;
  padding: 8px;
  display: flex;
  align-items: center;
  width: 450px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.mail-icon {
  color: #7e7e7e;
  margin: 0 15px;
}

.subscribe-form input {
  border: none;
  flex-grow: 1;
  padding: 10px;
  font-size: 14px;
  outline: none;
  font-family: inherit;
}

.subscribe-btn {
  background-color: #3bb77e;
  color: white;
  border: none;
  padding: 12px 35px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: inherit;
}

.subscribe-btn:hover {
  background-color: #29a56c;
}

.hero-image-wrapper {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 90%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.hero-image {
    max-height: 100%;
    object-fit: contain;
}

</style>
