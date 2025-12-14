<template>
  <header class="header-section">
    <div class="header-top">
      <div class="logo">
        <img src="../assets/images/Logo.png" alt="Melon Mart & Grocery" />
      </div>

      <div class="search-bar">
        <select class="search-select">
          <option>All Categories</option>
        </select>
        <input type="text" placeholder="Search for items..." />
        <button class="search-btn">
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
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>

      <div class="user-actions">
        <a href="#" class="action-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          Account
        </a>
        <a href="#" class="action-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M9 21H4v-5"></path></svg>
          Compare
        </a>
        <a href="#" class="action-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          Wishlist
        </a>
        <a href="#" class="action-link cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          Cart
        </a>
      </div>
    </div>

    <div class="header-bottom">
      <button class="browse-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        Browse All Categories
        <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>

      <nav class="main-nav">
        <router-link to="/hot-deals" class="hot-deals">
          <img src="../assets/images/hot-deal-icon.png" alt="Hot" class="nav-icon" />
          Hot Deals
        </router-link>
        <a href="#">Home</a>
        <a href="#">Food <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
        <a href="#">Vegetables <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
        <a href="#">Drink</a>
        <a href="#">Cookies</a>
        <a href="#">Meat & Seafood <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
        <a href="#">Bakery</a>
      </nav>

      <div class="contact-info">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        <div class="phone-text">
          <span class="phone-number">099 777 888</span>
          <span class="support-text">24/7 Support Center</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>

<style scoped>

.header-section {
  width: 106%;
  max-width: 1600px;
  font-family: 'Quicksand', sans-serif;
  border-bottom: 1px solid #ececec;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ececec;

}

.logo img {
  height: 60px;
}

.search-bar {
  display: flex;
  align-items: center;
  border: 2px solid #BCE3C9;
  border-radius: 4px;
  padding: 5px;
  width: 45%;
  max-width: 600px;
}

.search-select {
  border: none;
  padding: 10px;
  font-family: inherit;
  font-weight: 600;
  color: #253D4E;
  border-right: 1px solid #ececec;
  outline: none;
  background-color: transparent;
  cursor: pointer;
}

.search-bar input {
  flex-grow: 1;
  border: none;
  padding: 10px 15px;
  font-family: inherit;
  outline: none;
  font-size: 14px;
}

.search-btn {
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  color: #7e7e7e;
}

.user-actions {
  display: flex;
  gap: 25px;
}

.action-link {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #7e7e7e;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

.action-link:hover {
  color: #3bb77e;
}

.action-link svg {
  color: #253D4E;
}

/* --- Bottom Header --- */
.header-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.browse-btn {
  background-color: #3bb77e;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.browse-btn:hover {
  background-color: #29a56c;
}

.main-nav {
  display: flex;
  gap: 30px;
  align-items: center;
}

.main-nav a {
  text-decoration: none;
  color: #253D4E;
  font-weight: 700;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s;
}

.main-nav a:hover {
  color: #3bb77e;
}

.hot-deals {
  color: #3bb77e !important;
}

.chevron {
    opacity: 0.6;
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-info svg {
    color: #3bb77e;
    width: 30px;
    height: 30px;
}

.phone-text {
  display: flex;
  flex-direction: column;
}

.phone-number {
  color: #3bb77e;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
}

.support-text {
  color: #7e7e7e;
  font-size: 11px;
}

.nav-icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
  object-fit: contain;
  vertical-align: middle;
}
</style>
