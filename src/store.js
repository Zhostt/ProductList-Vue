import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate';

const defaultimageLink = './product-icon.svg'
const [product1, product2, product3] = [
  './Product1.webp',
  './Product2.webp',
  './Product3.webp'
]

export default createStore({
    plugins: [createPersistedState({storage: window.sessionStorage})],
    state: {
      modalVisible: false,
      products: [
        {
          id: 1, 
          name: 'PENTAX KF body', 
          description: 'Зеркальный фотоаппарат черного цвета', 
          imageLink: product1, 
          price: 113490, 
          active:true 
        },
        {id: 2, name: 'PENTAX K-3 Mark III Body', description: 'Зеркальная фотокамера серебристого цвета', imageLink: product2, price: 156400, active:true}
      ],
      deletedProducts: [
      {id: 3, name: 'Canon EOS R6 Mark II Body', description: 'Фотоаппарат черного цвета', imageLink: product3, price: 235900, active:false}
      ]
    },
    mutations: {
      addProduct(state,product) {
        const newProduct = {...product}
        try {
          new URL(newProduct.imageLink) // check if recieved value is url
        } catch (_) {
          newProduct.imageLink = defaultimageLink
        }
        state.products.unshift(newProduct)
      },
      deleteProduct(state, deletedProduct) {
        const newDeletedProduct = {...deletedProduct}
        state.products = state.products.filter((product) => deletedProduct.id !== product.id)
        newDeletedProduct.active = false
        state.deletedProducts.unshift(newDeletedProduct)
      },

      toggleModal(state) {
        state.modalVisible = !state.modalVisible;
      }
    },
    actions: {
    },
    getters: {
    }
    });
  