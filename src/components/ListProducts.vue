<template>
    <div class="container">
        <ul class="product-list">
            <ProductCard
            v-for="product in this.$store.state.products" 
            :key="product.id"
            :product = product
            @click="deleteProduct(product)"
            > </ProductCard>

            <ProductCard
            class="deleted-product" 
            v-for="product in this.$store.state.deletedProducts" 
            :key="product.id"
            :product = product
            > </ProductCard>
        </ul>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
    export default {
        components: {
            ProductCard
        },
        methods: {
            deleteProduct(product) {
                this.$store.commit('deleteProduct', product)
            }
        }
    }
</script>

<style scoped>

    .product-list {
        padding-left: 0;
        width: 100%;
    }
    .product {

    }
    .deleted-product {
        opacity: 30%;
        border: 1px solid red;
    }



</style>