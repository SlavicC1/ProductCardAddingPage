<template>
<div :class="fake ? 'card fake-card' : 'card'">
  <img :src="imgUrl">
  <div class="description">
    <h3>{{name}}</h3>
    <p>{{description}}</p>
    <h2>{{cost}} руб.</h2>
    <div class="delete">
      <img src="@/assets/images/delete.png">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    imgUrl: String,
    name: String,
    description: String,
    cost: String,
    fake: Boolean,
  }
}
</script>

<style scoped>

.card {
  margin: 8px;
  min-width: 300px;
  max-width: 500px;
  height: 423px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  flex: 1;
  position: relative;
}

.card:hover {
  transform: scale(1.01) translateY(-6px);
  cursor: pointer;
}

.delete {
  display: none;
  position: absolute;
  right: -8px;
  top: -8px;
  width: 32px;
  height: 32px;
  background: #FF8484;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.card:hover .delete {
  display: flex;
  justify-content: center;
  align-items: center;
}

.delete:hover {
  transform: scale(1.1);
}

.card > img {
  border-radius: 4px 4px 0 0;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.description {
  margin: 16px;
}

.description > h3 {
  margin-bottom: 16px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
}

.description > p {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
}

.description > h2 {
  position: absolute;
  bottom: 24px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
}

.fake-card {
  height: 0;
}

.fake-card * {
  display: none;
}

</style>
