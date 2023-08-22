<template>
    <div class="container">
    <ul class="product-list">
        <li 
        class="product-name" 
        v-for="product in this.$store.state.products" 
        :key="product.id"
        @click="deleteProduct(product)"
        >
        {{ product.name }}</li>

        <li
        class="deleted-product" 
        v-for="product in this.$store.state.deletedProducts" 
        :key="product.id"
        >
        <s>{{ product.name }}</s></li>
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

<style lang="scss" scoped>

</style>