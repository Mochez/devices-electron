import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    historic: [],
    todoInput: '',
    todo: {}
  },
  mutations: {
    setTodos(state, x) {
     state.todos.push(x);
    },
    setHistoric(state, x) {
      if (x.length > 0) {
      state.historic.push(x);
    }
    },
    setTodoInput(state, x) {
      state.todoInput = x;
    },
    setTodo(state, x) {
      state.todo = x
    }
  },
  actions: {
    getTodosAction({commit}, title) {
      const todoTitle = title;
      axios.get(`https://jsonplaceholder.typicode.com/todos?title=${todoTitle}`)
      .then(res => commit('setTodos', res.data))
    },
    getHistoricAction({commit}, id) {
      const todoId = id;
      commit('setHistoric', todoId);
    },
    todoInputAction({commit}, search) {
      commit('setTodoInput', search);
    },
    getTodoAction({commit}, todo) {
      commit('setTodo', todo)
    }
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getHistoric(state) {
      return state.historic;
    },
    getTodoInput(state) {
      return state.todoInput;
    },
    todo(state) {
      return state.todo;
    }
  }
})
