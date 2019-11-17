<template>
    <div id="list">
        <h3>Todos List</h3>
        <form>
            <label for="todo">Search todo by title</label>
            <input type="text" id="todoInput" :value="getTodoInput">
            <button type="button" v-on:click="searchTodo()">Search</button>
        </form>
        <div id="ifList" v-if="getTodos.length > 0">
            <span v-for="(todo, index) in todosListLength" :key="index">
                <li v-for="el in todo" :key="el.id" @click="setTodo(todo[index])">
                   <router-link :to="`${todo[index].id}`">{{index}}{{todo[index]}}</router-link>
                </li>
            </span>
        </div>
    </div>
</template>


<script>
import  {mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['getTodos', 'getTodoInput']),
        todosListLength() {
            return this.getTodos.filter(todo => todo.length > 0)
        }
    },
    methods: {
        ...mapActions(['getTodosAction', 'getHistoricAction', 'todoInputAction', 'getTodoAction']),
        searchTodo() {
            this.getTodosAction(todoInput.value);
            this.getHistoricAction(todoInput.value);
            this.todoInputAction('');
        },
        setTodo(event) {
            console.log(event)
            this.getTodoAction(event);
        }
    },
}
</script>


<style scoped>

</style>