import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CategoryView from '../views/CategoryView.vue';
import ProductDetailsView from '../views/ProductDetailsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hot-deals',
      name: 'hot-deals',
      component: CategoryView
    },
    {
      path: '/category/:name',
      name: 'category',
      component: CategoryView
    },
    {
      path: '/product/:name',
      name: 'product-details',
      component: ProductDetailsView
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
});

export default router;
