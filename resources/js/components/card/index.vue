<template>
    <div>
        <b-skeleton-wrapper :loading="loading">
            <template #loading>
                <b-card>
                    <b-skeleton width="85%"></b-skeleton>
                    <b-skeleton width="55%"></b-skeleton>
                    <b-skeleton width="70%"></b-skeleton>
                </b-card>
            </template>

            <b-card no-body>
                <slot />
            </b-card>
        </b-skeleton-wrapper>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: ['loading']
    }
</script>

<style scoped>

</style>
