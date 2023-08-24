<template>
  <div class="app-parent">
    <div class="app-container">
      <InputProducts class="input-block"></InputProducts>
      <ListProducts class="products-block"></ListProducts>
    </div>
  </div>
</template>

<script>
import InputProducts from './components/InputProducts.vue'
import ListProducts from './components/ListProducts.vue'

export default {
  name: 'App',
  components: {
    ListProducts, InputProducts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
  background-color: #8BADE9;
}


.app-container {
  height: 100vh;
  max-width: 1140px;
  padding: 5% 10% 0 10%;
  display: flex;

  margin: 0 20%;
}

.input-block {
  width: 25%;
  display: flex;
  flex-direction: column;
  position: relative;
  left: 0;
  border: 1px solid green;
}

.products-block {
  width: 100%;
  border: 1px solid red;
}

@media only screen and (max-width: 768px) {
}
</style>
