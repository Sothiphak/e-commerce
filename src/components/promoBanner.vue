<template>
    <div class="card" :style="{ backgroundColor: bgColor, backgroundImage: `url(${bgImage})` }">
        <div class="content">
           <p>{{ title }}</p>
           <ModButton :buttonbgColor="ButtonbgColor" @click="shopNow(title)" />
        </div>
    </div>
</template>

<script lang="ts">
    import ModButton from './ModButton.vue';
    export default {
        name: 'PromoBanner',
        components: {
            ModButton
        },
        props: {
            bgColor: {
                type: String,
                default: '#ffffff'
            },
            title: {
                type: String,
                default: ''
            },
            bgImage: {
                type: String,
                default: ''
            },
            ButtonbgColor: {
                type: String,
                default: '#ffffff'
            }

        },

        methods: {
            shopNow(title: string) {
                alert("Let's shop: " + title);
            }
        }
    }
</script>

<style scoped>
    .card {
        display: flex;
        justify-content: flex-start;
        width: 110%;
        max-width: 440px; /* Reduced width to match the aspect ratio in the reference image */
        height: 270px; /* Adjusted height */
        border-radius: 10px;
        background-position: right bottom;
        background-repeat: no-repeat;
        background-size: 43%; /* Reduced background image size to fit the space as in the reference */
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); /* Lighter shadow */
        transition: transform 0.3s ease;


    }

    .card:hover {
        transform: translateY(-2px);

    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 70px 10px 50px 40px;
        width: 75%; /* Giving more space to the text content */
        height: 100%;
        font-family: 'Quicksand', sans-serif;
        font-size: 20px; /* Adjusted size */
        line-height: 1.25; /* Improved line spacing */
        color: #253D4E;
    }

    .content p {
        font-weight: 900; /* Bolder title */
        font-size: 25px; /* Larger title to fill the space */
        line-height: 1.2;
        margin-bottom: 20px; /* Space between text and button */
        margin-top: 0; /* Ensure no top margin */
        font-family: 'Quicksand',sans-serif;
    }
</style>
