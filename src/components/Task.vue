<template>
    <div @dblclick="$emit('toggle', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <div class="data">
            <h3>{{ task.text }}</h3>
            <p>{{ task.day }}</p>
        </div>

        <button class="del" @click="$emit('delete-task', task.id)">x</button>
    </div>
</template>

<script lang="ts">
export default {
    name: "Task",
    props: {
        task: Object
    },
    methods: {
    }
}
</script>
<style scoped>
.task {
    background: rgb(150, 148, 148);
    color: rgb(255, 255, 255);
    margin: 5px;
    padding: 7px 10px;
    border-radius: 3px 0px 4px 0px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.task.reminder {
    border-bottom: 7px solid rgb(241, 68, 0);
    border-top: 7px solid rgb(241, 68, 0);
    border-left: 7px solid rgb(255, 255, 255);
    border-right: 7px solid rgb(255, 255, 255);
    border-radius: 10px;
}

.task.slide {
    margin-left: 100px;
}

.task:hover {
    background: rgb(223, 121, 4);
    color: white;
    /* border: 2px solid white;
    margin: 5px;
    padding: 7px 10px;
    border-radius: 3px 0px 4px 0px;
    transition: all 0.3s ease; */
}

.del {
    color: red;
    font-size: 24px;
    background: transparent;
    border: none;
    outline: none;
}

.data {
    width: 30%;
}
</style>