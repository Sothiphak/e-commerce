<template>
    <div :class="{'hasBorder': bordered}" class="card" :style="{ backgroundColor : bgColor}">
        <img id="category-image" :src="image" alt="">
        <p id="category-name">{{ categoryName }}</p>
        <p id="category-num">{{ num }} items</p>
    </div>
</template>

<script lang="ts">
export default {
    name: 'CategoryGrid',
    props: {
        categoryName: {
            type: String,
            required: true
        },
        num: {
            type: Number,
            required: true
        },

        bgColor: {
            type: String,
            default: '#ffffff'
        },
        image: {
            type: String,
            default: ''
        },
        bordered: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
    .card {
        width: 100%;
        max-width: 145px;
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        transition: all 0.3s ease;
        background-color: #fcfcfc;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        cursor: pointer;
        border: 1px solid transparent;

    }

    .card:hover {
        transform: translateY(-3px); /* Subtle lift on hover */
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
        border-color: #3BB77E;
    }

    .hasBorder {
        /* Keep a clean hover effect without a strong internal border */
        border: 2px solid #3BB77E;
        box-shadow: 0 0 0 2px #3BB77E, 0 10px 25px rgba(0, 0, 0, 0.1);
    }
    #category-image {
        /* Adjusted image size to match the spacing of the reference */
        width: 90px;
        height: 90px;
        margin-bottom: 5px;
    }
    #category-name {
        font-family: 'Quicksand', sans-serif;
        font-weight: 700;
        font-size: 16px; /* Closer to the reference size */
        color: #253D4E;
        margin-bottom: 2px;
    }

    #category-num {
        font-family: 'Lato', sans-serif;
        font-size: 13px;
        /* Use the darker gray from the reference image */
        color: #777777;
    }
</style>
