<template>
    <button @click="onClick()" class="btn" :style="{ background: color, padding: pd }">{{ text }}</button>
</template>
<script>
export default {
    name: "Button",
    props: { text: String, color: String, pd: String },
    methods: {
        onClick() {
            this.$emit('showAddForm')
        }
    }
}
</script>
<style scoped>
.btn {
    border: 0;
    outline: 0;
    color: azure;
    padding: 8px 9px;
    border-radius: 4px;
    cursor: pointer;
}
</style>