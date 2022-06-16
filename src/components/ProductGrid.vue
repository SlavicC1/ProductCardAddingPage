<template>
  <div class="container">
    <ProductCard v-for="item in cardsData"
      v-bind:key="item"
      :name="item.name"
      :description="item.description"
      :cost="item.cost"
      :imgUrl="item.imgUrl" 
      :deleteCard="deleteCard(item.id)"/>
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
      let data = store.products.slice().map((el, i) => {
        return Object.assign(el, {id: i});
      });

      if(store.sortType === 'default') return data;
      return data.sort((a, b) => {
        if(store.sortType === 'name') return a.name > b.name;
        if(store.sortType === 'cost-up') 
          return parseInt(a.cost.replace(/\s/g, '')) > parseInt(b.cost.replace(/\s/g, ''));
        if(store.sortType === 'cost-down') 
          return parseInt(a.cost.replace(/\s/g, '')) < parseInt(b.cost.replace(/\s/g, ''));
      });
    }
  },
  methods: {
    deleteCard(i) {
      console.log(i);
      return function() {
        store.products.splice( i, 1);
        console.log(i);
        store.save();
      };
    },
  }
}
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -8px;
  flex-shrink: shrink;
}

</style>
