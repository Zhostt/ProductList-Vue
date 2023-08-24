<template>
    <div class="app-container">
      <div class="header-container">
        <h1 class="products-header">Список продуктов</h1>
        <img src="./assets/Add_button.svg" alt="Добавить продукт" class="toggleModal" @click="toggleModal"/>
      </div>

      <InputProducts class="input-block"></InputProducts>
      <ListProducts class="products-block"></ListProducts>
    </div>
</template>

<script>
import InputProducts from './components/InputProducts.vue'
import ListProducts from './components/ListProducts.vue'

export default {
  name: 'App',
  components: {
    ListProducts, InputProducts
  },
  methods:{
    toggleModal(){
      this.$store.commit('toggleModal')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #494949;
  font-size: 20px
}

body {
  background-color: #E8ECF3;
}

.app-container {
  max-width: 1140px;
  padding: 0 10%;
  margin: 0 20%;
}

.header-container{
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #E8ECF3;
  height: 10vh;
  width: 100vw;
  position: sticky; 
    top: 0; 
    left: 0;
  z-index: 1;
  width: inherit;
}

.toggleModal {
  height: 7vh;
}

@media only screen and (max-width: 960px) {
      .app-container {
        padding: 5% 10% 0 10%;
        margin: 0;
        font-size: 12px;
        }
    }
@media only screen and (max-width: 768px) {
      .app-container {
        margin: 0;
        padding: 0 3%;
        font-size: 12px;
    }
}


@media only screen and (max-width: 720px) {
    .input-block {
            width:80%;
        }
    }
@media only screen and (min-width: 720px) {
      .input-block {
            width:20%;
            min-width:0;
    }
}

</style>
