import { defineStore } from 'pinia';
import axios from 'axios';

// --- Interfaces ---

export interface Promotions {
    title: string;
    bgColor: string;
    bannerImage: string;
    ButtonbgColor: string;
}

export interface Categories {
    categoryName: string;
    image: string;
    num: number;
    bgColor: string;
    group: string;
}

export interface Groups {
    groupName: string;
}

export interface Products {
    name: string;
    rating: number;
    size: string;
    image: string;
    price: number;
    promotionAsPercentage: number;
    categoryId: number;
    instock: number;
    countSold: number;
    group: string;
}


export const useProductStore = defineStore('product', {
    state: () => ({
        groups: [] as Groups[],
        promotions: [] as Promotions[],
        categories: [] as Categories[],
        products: [] as Products[]
    }),

    getters: {
        getCategoriesByGroup(state) {
            return (groupName: string) => state.categories.filter((category) => category.group === groupName)
        },

        getProductsByGroup(state) {
            return (groupName: string) => state.products.filter((product) => product.group === groupName)
        },

        getProductsByCategory(state) {
            return (categoryId: number) => state.products.filter((product) => product.categoryId === categoryId)
        },

        getPopularProducts(state) {
            return state.products.filter((product) => product.countSold > 10)
        }
    },

    actions: {
        async fetchCategories() {
            const result = await axios.get("http://localhost:3000/api/categories");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.categories = result.data.map((cat: any) => ({
                categoryName: cat.name,
                num: cat.productCount,
                bgColor: cat.color,
                group: cat.group,
                image: `http://localhost:3000/${cat.image.replace(/\\/g, '/')}`
            }));

            console.log("Categories loaded:", this.categories);
        },

        async fetchBanners() {
            const result = await axios.get("http://localhost:3000/api/promotions");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.promotions = result.data.map((promo: any) => ({
                title: promo.title,
                ButtonbgColor: promo.buttonColor,
                bgColor: promo.color,
                bannerImage: `http://localhost:3000/${promo.image.replace(/\\/g, '/')}`
            }));

            console.log("Promotions loaded:", this.promotions);
        },

        async fetchGroups() {
            const result = await axios.get("http://localhost:3000/api/groups");
            this.groups = result.data;
        },


        async fetchProducts() {
            const result = await axios.get("http://localhost:3000/api/products");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.products = result.data.map((prod: any) => ({
                ...prod,
                image: `http://localhost:3000/${JSON.parse(prod.image)[0].replace(/\\/g, '/')}`
            }));
            console.log(this.products[0]);
        }
    }
});
