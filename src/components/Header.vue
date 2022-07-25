 
<template>
    <header>
        <h1 class="text-white text-3xl">{{ name }}</h1>
        <button @click="AddOne">increment</button>
        <button @click="getDataApi">Call</button>
        {{ $store.getters.TaskPrice }}
        {{ $store.state.posts.title }}
        {{ $store.getters.TaskName }}
        {{ $store.getters.TaskVersion }}
        <Button @showAddForm="$emit('showAddForm')" :color="isFormShow ? 'red' : 'black'"
            :text="isFormShow ? 'Close' : 'Add Task'" pd='12px' />
    </header>
</template>
<script>
import Button from "./Button.vue"
export default {
    name: 'Header',
    props: {
        name: String,
        isFormShow: String
    },
    methods: {
        AddOne() {
            this.$store.commit('increment')
        },
        getDataApi() {
            this.$store.dispatch('getData')
        }
    },
    components: { Button }
}
</script>
<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 95%;
}
</style>