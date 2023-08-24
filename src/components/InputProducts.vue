<template>
    <div class="container" v-if="visible">
        <div class="background" @click="toggleModal"></div>
        <div class="main-block">
            <h1 class="input-header">Добавить продукт</h1>
            <form class="product-input-form"  @submit="addProduct">
                <div class="input-group">
                    <label for="product-name">Название</label>
                    <input id="product-name" class="product-name input-field" type="text" v-model="productName" required>
                </div>

                <div class="input-group">
                    <label for="product-price">Цена</label>
                    <input id="product-price" class="product-price input-field" type="number" v-model="productPrice" required>
                </div>

                
                <div class="input-group">
                    <label for="product-description">Описание</label>
                    <textarea id="product-description" class="product-description input-field" type="textarea" v-model="productDescription" required></textarea>
                </div>

                <div class="input-group">
                    <label for="product-image">Ссылка на изображение</label>
                    <input id="product-image" class="product-image input-field" type="text" v-model="productImage">
                </div>

                <input id="submit" class="submit" type="submit" value="Добавить">
                <button class="decline" @click="toggleModal">Отмена</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        data() {
        return {
            productName: '',
            productDescription: '',
            productImage: '',
            productPrice: null,
            active: true,
            }
        },

        methods: {
            toggleModal(){
                this.$store.commit('toggleModal')
            },

            addProduct(e) {
                e.preventDefault()
                const id = (new Date()).getTime()
                const newProduct = {
                    id,
                    name: this.productName,
                    description: this.productDescription,
                    imageLink: this.productImage,
                    price: this.productPrice,
                }
                this.$store.commit('addProduct', newProduct);
                this.productName = '';
                this.productDescription = '';
                this.productImage = '';
                this.productPrice = null;
                this.toggleModal();
            },

        },

        computed: {
            ...mapState({
            visible: 'modalVisible',
        }),
  },
    }
</script>

<style scoped>
    .container {
        position: fixed;
            top: 0;
            left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;

    }

    .background {
        position: fixed;
            top: 0;
            left: 0;
        width: 100%;
        height: 100%;
        background-color: grey;
        opacity: 50%;
        z-index: 1;
    }   

    .main-block {
        background-color: #E8ECF3;
        border-radius: 5px;
        min-width: 40%;
        min-height: 70%;
        z-index: 2;
        border-radius: 1.5em;
    }
    .input-header {
        padding: 5% 10% 0 10% ;
        }

    .product-input-form {
        display: flex;
        flex-direction: column;
        justify-content: start;
        padding: 0 10% 5% 10% ;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        padding: 3% 0;
    }
    .input-group>label {
        font-size: 1.4em;
        padding-bottom: 2%;
        opacity: 80%;
    }

    .input-field {
        height: 4vh;
        font-size: 1.4em;
        border: 0;
        border-radius: 10px;
    }

    .product-description {
        resize: vertical;
        height: 10vh;
    }

    .submit {
        font-size: 1.5em;
        color:white;
        background-color: #8BADE9;
        height: 7vh;
        margin-top: 15%;
        border-radius: 1em;
        border: 0;
    }

    .decline {
        font-size: 1.5em;
        height: 7vh;
        margin: 5% 0 10%  0;
        border-radius: 1em;
        border: 0;
        background-color: #c4cee0;
    }

    @media only screen and (max-width: 720px) {
        .main-block {
                width:80vw;
        }
    }
    @media only screen and (min-width: 720px) {
        .main-block {
                width: 60vw;
        }
    }
    @media only screen and (min-width: 1140px) {
        .main-block {
                width: 40vw;
                min-width: 0;
        }
    }
    
</style>