<template>
  <div
    class="card"
    :style="{ backgroundColor: bgColor, backgroundImage: `url(${bgImage})` }"
    @click="shopNow(title)"
  >
    <div class="content">
      <p>{{ title }}</p>
      <ModButton :buttonbgColor="ButtonbgColor" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import ModButton from './ModButton.vue';

export default defineComponent({
  name: 'PromoBanner',
  components: {
    ModButton
  },
  props: {
    bgColor: { type: String, default: '#ffffff' },
    title: { type: String, default: '' },
    bgImage: { type: String, default: '' },
    ButtonbgColor: { type: String, default: '#ffffff' }
  },
  setup() {
    const router = useRouter();

    const shopNow = (productName: string) => {
      router.push(`/product/${productName}`);
    };

    return { shopNow };
  }
});
</script>

<style scoped>
.card {
  display: flex;
  justify-content: flex-start;
  width: 110%;
  max-width: 440px;
  height: 270px;
  border-radius: 10px;
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: 43%;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-2px);
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 70px 10px 50px 40px;
  width: 75%;
  height: 100%;
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
  line-height: 1.25;
  color: #253D4E;
}

.content p {
  font-weight: 900;
  font-size: 25px;
  line-height: 1.2;
  margin-bottom: 20px;
  margin-top: 0;
}
</style>
