<template>
  <InputProducts></InputProducts>
  <ListProducts></ListProducts>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
