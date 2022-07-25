import { createApp } from "vue";
import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 100,
      app: {
        name: "Task Manger",
        version: "1.1.0",
        price: "2000$",
      },
      posts: { title: "dfasdf" },
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    updateData(state, data) {
      state.posts = data;
    },
  },
  actions: {
    async getData({ commit }) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = response.data;
      commit("updateData", data);
    },
  },
  getters: {
    TaskName(state) {
      return state.app.name;
    },
    TaskVersion(state) {
      return state.app.version;
    },
    TaskPrice(state) {
      return state.app.price;
    },
  },
});
export default store;
