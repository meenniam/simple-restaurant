<template>
    <div class="my-1">
        <r-card :loading="loading">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 variant="info" @click="visible = !visible">{{ description }}</b-button>
                </b-card-header>
                <b-collapse :id="id" v-model="visible" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <text-skeleton v-if="isFetching"></text-skeleton>
                        <template v-else-if="detail">
                            <b-card-text><strong>Name: </strong> {{ detail.name || '-' }}</b-card-text>
                            <b-card-text><strong>Open: </strong> {{ detail.open_now ? 'Open now': 'Close now' }}</b-card-text>
                            <b-card-text><strong>Rating: </strong> {{ detail.rating || '-' }}</b-card-text>
                        </template>
                        <div v-else>No Data</div>
                    </b-card-body>
                </b-collapse>
        </r-card>
    </div>
</template>

<script>
    import { getDetail } from '../services'
    import TextSkeleton from './text-skeleton'
    export default {
        name: "restaurant-item",
        props: ['loading', 'description', 'id', 'place_id'],
        components: {
            TextSkeleton
        },
        data: () => ({
            visible: false,
            isFetching: false,
            detail: null
        }),
        watch: {
            visible(val) {
                if (val) {
                    this.getDetail()
                }
            }
        },
        methods: {
            async getDetail() {
                try {
                    if (this.detail && !this.isFetching) return;
                    this.isFetching = true
                    const { result } = await getDetail(this.place_id);
                    this.detail = result;
                    this.isFetching = false
                } catch (e) {
                    console.log(e)
                    this.isFetching = false
                }
            }
        }
    }
</script>

<style scoped>

</style>
