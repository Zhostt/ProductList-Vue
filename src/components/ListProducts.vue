<template>
    <div class="container">
    <ul class="product-list">
        <li 
        class="product" 
        v-for="product in this.$store.state.products" 
        :key="product.id"
        @click="deleteProduct(product)"
        >
            <img :src="product.imageLink" alt="Изображение продукта" class="image">
            <h4 class="name">{{ product.name }}</h4>
            <p class="description">{{ product.description }}</p>
        </li>

        <li
        class="deleted-product" 
        v-for="product in this.$store.state.deletedProducts" 
        :key="product.id"
        >
            <img :src="product.imageLink" alt="Изображение продукта" class="image">
            <h4 class="name"><s>{{ product.name }}</s></h4>
            <p class="description">{{ product.description }}</p>
        </li>
    </ul>


    </div>
</template>

<script>
    export default {
        methods: {
            deleteProduct(product) {
                this.$store.commit('deleteProduct', product)
            }
        }
    }
</script>

<style scoped>
    .image {
        max-height: 3em;
    }
</style>