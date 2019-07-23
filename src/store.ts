import Vue from 'vue'
import Vuex from 'vuex'
import { TaskItem } from 'src/interface'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      tasks: Array<TaskItem>()
    },
  
    mutations: {
      addTask(state, newTask: TaskItem) {
        state.tasks.push(newTask);
      }
    },
    actions: {
        addTask(context, newTask: TaskItem) {
        context.commit('addTask', newTask);
      }
    }
  });