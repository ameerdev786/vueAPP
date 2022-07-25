<script setup lang="ts">
</script>
<template>

  <div class="container">
    <div class="left">
      <Header :isFormShow="showAddForm" @showAddForm="toggleForm" name="Task Tracer" />
      <div v-if="showAddForm">
        <AddTask @add-task="AddTask" />
      </div>
    </div>
    <div class="right">
      <Tasks class="tasks" @delete-task="deleteTask" @toggle="ToggleTask" :tasks="tasks" />

    </div>


  </div>
</template>
<script>
import Tasks from "./components/Tasks.vue"
import AddTask from "./components/AddTask.vue"
import Header from "./components/Header.vue"
import Button from "./components/Button.vue"
export default {
  name: 'App',
  components: { Header, Button, Tasks, AddTask },
  data() {
    return {
      tasks: [{}],
      showAddForm: false
    }
  },
  methods: {
    deleteTask(id) {
      console.log(id, "from child to parent ");
      this.tasks = this.tasks.filter((task) => task.id !== id)
    },
    ToggleTask(id) {
      this.tasks = this.tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)
    },
    AddTask(task) {
      this.tasks = [...this.tasks, task]
    },
    toggleForm() {
      this.showAddForm = !this.showAddForm
    }
  }
  , created() {
    this.tasks = [
      {
        id: 1,
        text: "Ameer",
        day: '12 mar 3:40pm',
        reminder: false,
      },
      {
        id: 2,
        text: "Ahsan",
        day: 18,
        reminder: true,
      },
      {
        id: 3,
        text: "ami",
        day: 1,
        reminder: false,
      },
      {
        id: 4,
        text: "Dad",
        day: 3,
        reminder: true,
      },
      {
        id: 5,
        text: "mazhar hussain",
        day: 1,
        reminder: true,
      },
    ]
  }
}
</script>

<style scoped>
.container {
  width: 80vw;
  height: 100vh;
  padding: 20px;
  margin: auto;
  box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.7);
  overflow: auto;
}

.left {}

.right {
  width: 80%;
  position: absolute;
  top: 13%;
  left: 53%;
}
</style>