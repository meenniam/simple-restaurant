<template>
    <div>
        <r-navbar v-model="search" @enter="handleEnter"></r-navbar>
        <div class="py-2 px-4">
            <restaurant-list :list="restaurantList" :loading="isFetching"></restaurant-list>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState, mapGetters } from 'vuex';
    import RestaurantList from '../components/restaurant-list'
    export default {
        name: "index",
        components: {
            RestaurantList
        },
        data: () => ({
            search: null,
            timeout: null
        }),
        mounted() {
            this.getRestaurants();
        },
        computed: {
            ...mapState('home', ['error', 'isFetching']),
            ...mapGetters('home', ['restaurantList'])
        },
        methods: {
            ...mapActions('home', ['getRestaurants']),
            handleEnter() {
                this.getRestaurants(this.search);
            }
        }
    }
</script>

<style scoped>

</style>
