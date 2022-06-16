<template>
  <div class="container">
    <ProductCard v-for="(item, key) in cardsData"
      v-bind:key="key"
      :name="item.name"
      :description="item.description"
      :cost="item.cost"
      :imgUrl="item.imgUrl" />
    <!-- Чтобы карточки имели одинаковый размер -->
    <ProductCard :fake="true" />
    <ProductCard :fake="true" />
    <ProductCard :fake="true" />
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import store from '@/store.js';

export default {
  name: 'ProductGrid',
  components: {
    ProductCard,
  },
  computed: {
    cardsData() {
      return store.products;
    }
  }
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

</style>
