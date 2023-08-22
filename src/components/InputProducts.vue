<template>
    <div class="container">
        <form class="product-input"  @submit="addProduct">
            <label for="product-name">Название</label>
            <input id="product-name" class="product-name" type="text" v-model="productName">

            <label for="product-description">Описание</label>
            <textarea id="product-description" class="product-description" type="textarea" v-model="productDescription"></textarea>

            <label for="product-image">Ссылка на изображение</label>
            <input id="product-image" class="product-image" type="text" v-model="productImage">

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