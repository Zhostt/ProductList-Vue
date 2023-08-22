<template>
    <li>
        <img :src="product.imageLink" alt="Изображение продукта" class="image">
        <h4 class="name">{{ product.name }}</h4>
        <p class="description">{{ product.description }}</p>
        <p class="price">{{ product.price }} рублей</p>
    </li>
        

</template>

<script>
    export default {
        props: {
            product: Object,
        }
    }
</script>

<style scoped>
    .image {
        max-height: 3em;
    }

    .deleted-product>.name{
        text-decoration: line-through;
    }
</style>