<template>
    <li class="product">
        <img :src="product.imageLink" alt="Изображение продукта" class="image">
        <div class="text-block">
            <h3 class="name">{{ product.name }}</h3>
            <p class="description">{{ product.description }}</p>
        </div>
        <h3 class="price">{{ product.price }} Р</h3>

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
        background-color: #FFFFFF;
        border-radius: 1.5em;
        display: flex;
        justify-content: space-between;
        align-items: bottom;
        margin-bottom: 3%;
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
        white-space: nowrap;
        margin-right: 3%;
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