import { defineStore } from 'pinia';

export interface Category {
  name: string;
  count: number;
  image: string;
  bgColor: string;
}

export interface Promotion {
  title: string;
  bgColor: string;
  buttonClass: string;
  imageSrc: string;
  imageAlt: string;
  url: string;
}

export interface Product {
  name: string;
  price: number;
  image: string;
}

const STATIC_CATEGORIES: Category[] = [
  { name: "Peach", count: 17, bgColor: "#FEFBE8", image: "/images/peach.png" },
  { name: "Red Apple", count: 68, bgColor: "#FFF0E9", image: "/images/apple.png" },
];

const STATIC_PROMOTIONS: Promotion[] = [
  {
    title: "Everyday Fresh and Clean with Our Products",
    bgColor: "#F0E8D5",
    imageSrc: "/images/onion.png",
    buttonClass: "green-btn",
    imageAlt: "Onions",
    url: "/promotions/1"
  }
];

const STATIC_GROUPS: string[] = [
  "Fruits",
  "Vegetables",
  "Beverages"
];

const STATIC_PRODUCTS: Product[] = [
  { name: "Fresh Kiwi", price: 4.2, image: "/images/kiwi.png" },
  { name: "Fuji Apple", price: 3.8, image: "/images/apple.png" }
];

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [] as string[],
    promotions: [] as Promotion[],
    categories: [] as Category[],
    products: [] as Product[]
  }),

  getters: {
    getPromotionCount: (state) => state.promotions.length,
    getCategoryCount: (state) => state.categories.length,
    getProductCount: (state) => state.products.length,
  },

  actions: {
    async loadGroups() {
      try {
        const res = await fetch("http://localhost:3000/api/groups");
        const data = await res.json();
        this.groups = data.length ? data : STATIC_GROUPS;
      } catch {
        this.groups = STATIC_GROUPS;
      }
    },

    async loadCategories() {
      try {
        const res = await fetch("http://localhost:3000/api/categories");
        const data = await res.json();
        this.categories = data.length ? data : STATIC_CATEGORIES;
      } catch {
        this.categories = STATIC_CATEGORIES;
      }
    },

    async loadPromotions() {
      try {
        const res = await fetch("http://localhost:3000/api/promotions");
        const data = await res.json();
        this.promotions = data.length ? data : STATIC_PROMOTIONS;
      } catch {
        this.promotions = STATIC_PROMOTIONS;
      }
    },

    async loadProducts() {
      try {
        const res = await fetch("http://localhost:3000/api/products");
        const data = await res.json();
        this.products = data.length ? data : STATIC_PRODUCTS;
      } catch {
        this.products = STATIC_PRODUCTS;
      }
    },

    async loadAll() {
      await Promise.all([
        this.loadGroups(),
        this.loadCategories(),
        this.loadPromotions(),
        this.loadProducts()
      ]);
    }
  }
});
