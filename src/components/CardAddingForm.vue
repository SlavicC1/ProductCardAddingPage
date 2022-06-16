<template>
<form>
  <label>
  Наименование товара
    <input 
      type="text" 
      placeholder="Введите наименование товара"
      required>
  </label>
  <label>
  Описание товара
    <textarea 
      required
      placeholder="Введите описание товара"></textarea>
  </label>
  <label>
  Ссылка на изображение товара
    <input 
      type="text" 
      placeholder="Введите ссылку"
      required>
  </label>
  <label>
  Цена товара
    <input 
      type="text" 
      placeholder="Введите цену"
      required>
  </label>
    <button type="submit">Добавить товар</button>
</form>
</template>

<script>
export default {
  name: 'CardAddingForm',
  props: {
    msg: String
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
  padding: 10px 16px;
  padding-bottom: 11px;
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

</style>
