<template>
    <button :style="{backgroundColor : buttonbgColor}">
        <p>Shop Now</p>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </button>
</template>

<script lang="ts">
    export default {
        name: 'ModButton',
        props: {
            buttonbgColor: {
                type: String,
                // Changed default to the vibrant green color from the image
                default: '#3BB77E',
                required: true
            }
        }
    }
</script>
<style scoped>
    button {
        width: 120px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.1s ease;
        box-shadow: 0 2px 5px rgba(59, 183, 126, 0.2);

    }

    button:hover {
        background-color: #29a56c !important;
        transform: translateY(0);
        box-shadow: 0 4px 8px rgba(59, 183, 126, 0.4);
    }

    p {
        font-size: 15px;
        font-weight: 700;
        color: white;
        font-family: 'Quicksand', sans-serif;
        margin-right: 5px;
    }

    svg {
        width: 16px;
        height: 16px;
        stroke: white;
    }
</style>
