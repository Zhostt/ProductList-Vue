<template>
    <li class="product">
        <img :src="product.imageLink" alt="Изображение продукта" class="image">
        <div class="text-block">
            <h2 class="name">{{ product.name }}</h2>
            <p class="description">{{ product.description }}</p>
        </div>
        <h2 class="price">{{ product.price }} ₽</h2>

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
    .product {

        display: flex;
        border: 1px solid purple;
        background-color: #FFFFFF;

    }
    .image {
        padding: 3em; ;
        max-width: 4em;
    }

    .description{
        overflow-wrap: break-word;
    }

    .deleted-product>*>.name{
        text-decoration: line-through;
    }

</style>