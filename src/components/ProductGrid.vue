<template>
  <div class="container">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <!-- Чтобы карточки имели одинаковый размер -->
    <div class="fake-card"></div>
    <div class="fake-card"></div>
    <div class="fake-card"></div>
    <div class="fake-card"></div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
//import store from '@/store.js';

export default {
  name: 'ProductGrid',
  components: {
    ProductCard,
  },
}
</script>

<style scoped>

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -8px;
  flex-shrink: shrink;
}

.fake-card {
  flex: 1;
  height: 0;
  min-width: 300px;
  max-width: 500px;
  margin: 8px;
}

</style>
