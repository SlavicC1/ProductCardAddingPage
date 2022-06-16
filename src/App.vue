<template>
  <Header />
  <div class="adding-form-layout">
    <CardAddingForm />
  </div>
  <div class="product-grid-layout">
    <ProductGrid />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import CardAddingForm from '@/components/CardAddingForm.vue';
import ProductGrid from '@/components/ProductGrid.vue';

export default {
  name: 'App',
  components: {
    Header,
    CardAddingForm,
    ProductGrid
  }
}
</script>

<style lang="scss">
@font-face {
    font-family: 'Source Sans Pro';
    src: url('@/assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf') format('truetype');
}

$primary-background-color: #E5E5E5;
$primary-text-color: #2c3e50;

* {
  margin: 0;
  box-sizing: border-box;
}

body {
  background: $primary-background-color;
}

#app {
  font-family: 'Source Sans Pro';
  color: $primary-text-color;
  padding: 32px;
  background: #E5E5E5;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  position: relative;
  color: #3F3F3F;
}

.adding-form-layout {
  position: sticky;
  height: 460px;
  top: 24px;
  margin-right: 16px;
}

.product-grid-layout {
  flex: 1;
}

@media (max-width: 753px) {
  #app{
    flex-direction: column;
  }

  .adding-form-layout {
    position: relative;
    margin: auto;
    margin-bottom: 20px;
  }

  .product-grid-layout {
    width: 340px;
    margin: auto;
  }
}

</style>
