<template>
<form @submit="submit" @change="needValidate">
  <label>
  Наименование товара
    <input 
      @invalid="(e) => {e.preventDefault()}"
      v-model="formData.name"
      type="text" 
      placeholder="Введите наименование товара"
      required>
      <div class="needed">Поле является обязательным</div>
  </label>
  <label>
  Описание товара
    <textarea 
      v-model="formData.description"
      placeholder="Введите описание товара"></textarea>
  </label>
  <label>
  Ссылка на изображение товара
    <input 
      @invalid="(e) => {e.preventDefault()}"
      v-model="formData.imgUrl"
      type="url" 
      placeholder="Введите ссылку"
      required>
    <div class="needed">Поле является обязательным</div>
  </label>
  <label>
  Цена товара
    <input 
      @invalid="(e) => {e.preventDefault()}"
      @input="costMasking"
      v-model="formData.cost"
      type="text" 
      placeholder="Введите цену"
      required>
    <div class="needed">Поле является обязательным</div>
  </label>
  <button type="submit" @click="isValid">Добавить товар</button>
</form>
</template>

<script>
import store from '@/store.js';

export default {
  name: 'CardAddingForm',
  data() {
    return {
      formData: store.newProduct,
      };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      store.products.push(Object.assign({}, store.newProduct));
      store.save();
    },
    costMasking() {
      let numericCost = "";
      for(let i=0; i < store.newProduct.cost.length; i++) {
        if(/\d/.test(store.newProduct.cost[i])) numericCost += store.newProduct.cost[i];
      }
      let maskedCost = numericCost[0];
      for(let i=1; i < numericCost.length; i++) {
        if((numericCost.length - i - 1) % 3 === 2) maskedCost += ' ';
        maskedCost += numericCost[i];
      }
      store.newProduct.cost = maskedCost;
    },
    needValidate(e) {
      e.target.className="submitted";
    },
    isValid(e) {
      e.target.parentElement.className = "submitted";
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

form {
  display: block;
  width: 332px;
  padding: 24px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  color: #49485E;
}

label {
  display: block;
  text-align: left;
  position: relative;
  width: 100%;
  font-size: 10px;
  line-height: 13px;
}

input, textarea {
  display: block;
  width: 100%;
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 9px 15px;
  padding-bottom: 10px;
  border: 1px solid #FFFEFB;
  font-size: 12px;
  line-height: 15px;
  margin-top: 4px;
  margin-bottom: 16px;
}

textarea {
  resize: none;
  height: 108px;
}

button {
  width: 100%;
  display: block;
  margin: auto;
  height: 36px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  background: #EEEEEE;
  border-radius: 10px;
  border: none;
  margin-top: 24px;
  color: #B4B4B4;
}

form:valid > button {
  background: #7BAE73;
  color: #FFFFFF;
}

.submitted input:invalid,
input.submitted:invalid {
  border: 1px solid #FF8484;
}

.needed {
  display: none;
}

.submitted input:invalid + .needed,
input.submitted:invalid + .needed {
  display: block;
  content: "not valid";
  position: absolute;
  bottom: -14px;
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #FF8484;
}

</style>
