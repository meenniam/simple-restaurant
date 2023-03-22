<template>
    <div class="m-auto restaurant-list">
        <template v-if="list.length === 0 && loading">
            <restaurant-item v-for="(i) in defaultList " :key="i" :loading="loading"></restaurant-item>
        </template>
        <template v-else>
            <restaurant-item v-for="(item, i) in list" :key="i" :id="`detail-${i}`" v-bind="item" :loading="loading"></restaurant-item>
        </template>
    </div>
</template>

<script>
    import RestaurantItem from './restaurant-item'
    export default {
        name: "restaurant-list",
        props: ['list', 'loading'],
        components: {
            RestaurantItem
        },
        data: () => ({
            defaultList: Array.from({length: 5}),
        }),
    }
</script>

<style scoped>
    .restaurant-list {
        width: 100%;
        max-width: 600px;
    }
</style>
