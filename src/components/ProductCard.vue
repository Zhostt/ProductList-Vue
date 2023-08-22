<template>
    <div>
        <img :src="imageLink" alt="Изображение продукта" class="image">
        <h4 class="name">{{ name }}</h4>
        <p class="description">{{ description }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            description: String,
            imageLink:String,
        }
    }
</script>

<style lang="scss" scoped>

</style>