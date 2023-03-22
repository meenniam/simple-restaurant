<template>
    <b-navbar type="light" variant="light">
        <div class="d-flex justify-content-center w-100">
            <b-nav-form>
                <b-form @submit="onSubmit">
                    <b-form-input class="mr-sm-2" v-model="search" placeholder="Enter place here"></b-form-input>
                    <b-button type="submit" variant="success">Search</b-button>
                </b-form>
            </b-nav-form>
        </div>
    </b-navbar>
</template>

<script>
    export default {
        name: "navbar",
        props: ['value'],
        computed: {
            search: {
                get() {
                    return this.value
                },
                set(val) {
                    this.$emit('input', val)
                }
            }
        },
        methods: {
            onSubmit(e) {
                e.preventDefault();
                this.$emit('enter')
            }
        }
    }
</script>

<style scoped>

</style>
