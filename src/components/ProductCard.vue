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
        background-color: #FFFFFF;
        margin: 2% 0;
        border-radius: 1.5em;
        display: flex;
        justify-content: space-between;
        align-items: top;
    }

    .text-block {
        flex-grow: 6;
        max-width: 50%;
        word-wrap: break-word;
    }

    .description {
        max-height: 10em;
        overflow-y: auto;
    }

    .price {
        text-align: right;
        flex-grow: 4;
        margin: 0.83em 5%;
    }

    .image {
        flex-shrink: 1;
        padding: 5% 5%;
        max-width: 10vw;
        max-height: 10vh;
        height: 100%;
    }

    .deleted-product>*>.name{
        text-decoration: line-through;
    }

</style>