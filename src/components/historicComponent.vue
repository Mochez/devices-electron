<template>
    <div id="historic">
        <h3>Historic</h3>
        <ul>
            <li v-for="(todo, index) in getHistoric" :key="index">
                <span @click="getTodoInput($event)">
                   <router-link to="/"> {{todo}}</router-link>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
    ...mapGetters(['getHistoric'])
    },
    methods: {
        ...mapActions(['todoInputAction']),
        getTodoInput(search) {
            this.todoInputAction(search.target.textContent.trim());
        }
    }
}
</script>


<style scoped>

</style>