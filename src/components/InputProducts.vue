<template>
    <div class="container">
        <h1 class="input-header">Добавить продукт</h1>
        <form class="product-input"  @submit="addProduct">
            <div class="input-group">
                <label for="product-name">Название</label>
                <input id="product-name" class="product-name" type="text" v-model="productName" required>
            </div>

            <div class="input-group">
                <label for="product-price">Цена</label>
                <input id="product-price" class="product-price" type="number" v-model="productPrice" required>
            </div>

            
            <div class="input-group">
                <label for="product-description">Описание</label>
                <textarea id="product-description" class="product-description" type="textarea" v-model="productDescription" required></textarea>
            </div>

            <div class="input-group">
                <label for="product-image">Ссылка на изображение</label>
                <input id="product-image" class="product-image" type="text" v-model="productImage">
            </div>


            <input id="submit" class="submit" type="submit" value="Добавить">
        </form>
    </div>
</template>

<script>
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
            }
        }
    }
</script>

<style scoped>
    .input-header {
        }

    .product-input {
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        padding: 2em 0;
        border: 1px solid red
    }
    .input-group>label {
        text-align: start;
    }


</style>