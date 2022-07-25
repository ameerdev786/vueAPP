<template>
    <form @submit="onSubmitTask" class="add-form">
        <div class="form-control">
            <label>Task</label>
            <input type="text" v-model="text" name="text" placeholder="Add Task" />
        </div>
        <div class="form-control">
            <label>Day & Time</label>
            <input v-model="day" type="text" name="day" placeholder="Add Day & Time" />
        </div>
        <div class="form-control form-control-check">
            <label>Set Reminder</label>
            <input v-model="reminder" type="checkbox" name="reminder" />
        </div>
        <input type="submit" value="Save Task" class="btn btn-block" />
    </form>
</template>
<script>
export default {
    name: "AddTask",
    data() {
        return {
            text: "",
            day: "",
            reminder: false
        }
    },
    methods: {
        onSubmitTask(e) {
            e.preventDefault();
            if (!this.text) {
                alert("hey fill the text first understood")
            } else {
                const newTask = {
                    id: Math.floor(Math.random() * 100000),
                    text: this.text,
                    day: this.day,
                    reminder: this.reminder,
                }
                this.$emit('add-task', newTask)
                console.log(newTask, "look new task");
                this.text = ""
                this.day = ""
                this.reminder = false
            }
        }
    }
}
</script>
<style scoped>
.add-form {
    width: 50%;
    margin-bottom: 30px;
    background: rgb(184, 180, 180);
    padding: 10px 24px 12px 12px;

}

.form-control {
    margin: 5px 0px;
}

.form-control label {
    display: block;
}

.form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 2px 4px;
    font-size: 17px;
    color: black;
}

.form-control-check {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-control-check label {
    flex: 1;
}

.form-control-check input {
    flex: 2;
    height: 20px;
}

.btn {
    width: 100%;
    background: rgb(187, 108, 5);
    color: black;
    height: 40px;
    border-radius: 2px;
    font-weight: 600;
}

.btn:hover {
    background: rgb(0, 0, 0);
    color: white;
    opacity: 0.7
}
</style>