import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate';

const defaultImageLink = '../public/product-icon.svg'

export default createStore({
    plugins: [createPersistedState({storage: window.sessionStorage})],
    state: {
      products: [
        {id: 1, name: 'Product 1', description: 'Product 1 descr', image:'https://media.istockphoto.com/id/185278433/photo/black-digital-slr-camera-in-a-white-background.jpg?s=612x612&w=0&k=20&c=OOCbhvOF0W-eVhhrm-TxbgLfbKhFfs4Lprjd7hiQBNU=' },
      {id: 2, name: 'Product 2', description: 'Product 2 descr', image: defaultImageLink}
      ],
      deletedProducts: [
      {id: 3, name: 'Product 3', description: 'Product 3 descr', image: defaultImageLink}
      ]
    },
    mutations: {
      addProduct(state,product) {
        state.products.unshift(product)
      },
      deleteProduct(state, deletedProduct) {
        state.products = state.products.filter((product) => deletedProduct.id !== product.id)
        state.deletedProducts.unshift(deletedProduct)
      }
    },
    actions: {
    },
    getters: {
    }
    });
  