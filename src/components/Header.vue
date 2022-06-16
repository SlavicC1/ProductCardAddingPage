<template>
  <header>
    <div class="page-name">Добавление товара</div>
    <select class="sort-option" v-model="store.sortType">
      <option value="default">По умолчанию</option>
      <option value="cost-up">По цене min</option>
      <option value="cost-down">По цене max</option>
      <option value="name">По наименованию</option>
    </select>
  </header>
</template>

<script>
import store from '@/store.js';

export default {
  name: 'PageHeader',
  computed: {
    store() {
      return store;
    }
  }
}
</script>

<style scoped>

header {
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.page-name {
  display: table-cell;
  vertical-align: middle;
  font-size: 28px;
  height: 35px;
}

.sort-option {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  height: 36px;
  padding-left: 16px;
  padding-right: 0px;
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  outline: none;
  color: #B4B4B4;
}

select::after {
  display: none;
}

select::before {
  display: none;
}

</style>
