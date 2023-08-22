import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate';

const defaultimageLink = './product-icon.svg'

export default createStore({
    plugins: [createPersistedState({storage: window.sessionStorage})],
    state: {
      products: [
        {
          id: 1, 
          name: 'Product 1', 
          description: 'Product 1 descr', 
          imageLink:'https://media.istockphoto.com/id/185278433/photo/black-digital-slr-camera-in-a-white-background.jpg?s=612x612&w=0&k=20&c=OOCbhvOF0W-eVhhrm-TxbgLfbKhFfs4Lprjd7hiQBNU=', 
          price: 120, 
          active:true 
        },
        {id: 2, name: 'Product 2', description: 'Product 2 descr', imageLink: defaultimageLink, price: 10, active:true}
      ],
      deletedProducts: [
      {id: 3, name: 'Product 3', description: 'Product 3 descr', imageLink: defaultimageLink, price: 100, active:false}
      ]
    },
    mutations: {
      addProduct(state,product) {
        const newProduct = {...product}
        if (newProduct.imageLink=== ''){
          newProduct.imageLink = defaultimageLink
        }
        state.products.unshift(newProduct)
      },
      deleteProduct(state, deletedProduct) {
        const newDeletedProduct = {...deletedProduct}
        state.products = state.products.filter((product) => deletedProduct.id !== product.id)
        newDeletedProduct.active = false
        state.deletedProducts.unshift(newDeletedProduct)
      }
    },
    actions: {
    },
    getters: {
    }
    });
  