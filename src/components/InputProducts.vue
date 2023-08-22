<template>
    <div class="container">
        <form class="product-input"  @submit="addProduct">
            <label for="product-name">Название</label>
            <input id="product-name" type="text" v-model="productName">

            <label for="product-description">Описание</label>
            <input id="product-description" type="textbox" v-model="productDescription">

            <label for="product-image">Ссылка на изображение</label>
            <input id="product-image" type="text" v-model="productImage">
            
            <input id="submit" type="submit" value="Добавить">
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
                    image: this.productImage,
                }
                this.$store.commit('addProduct', newProduct);
                this.productName = '';
                this.productDescription = '';
                this.productImage = '';
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>